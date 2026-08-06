#!/usr/bin/env python3
"""
train.py — fetches market/features, trains tiny MLP to predict SPY/NVDA next-day, exports to JSON for WASM/JS.
Features: 10Y yield (^TNX), 2Y (^IRX proxy via ^TNX/¹⁰), DXY (DX-Y.NYB), WTI (CL=F), Gold (GC=F), Silver (SI=F), GSR, REIT (VNQ), Repo proxy (SHV), SPY vs 200MA, NVDA
If fetch fails (no internet/rate limit), falls back to synthetic walk.
Output: ml/model.json + ml/meta.json + ml/validate.json
"""
import json, pathlib, datetime, math, random
import sys
ROOT = pathlib.Path(__file__).parent
try:
    import yfinance as yf, numpy as np, pandas as pd
    from sklearn.neural_network import MLPRegressor
    from sklearn.preprocessing import StandardScaler
    HAS = True
except ImportError as e:
    print("missing deps", e)
    HAS = False

TICKERS = {
    "spy": "SPY", "nvda": "NVDA",
    "tnx": "^TNX", "dxy": "DX-Y.NYB", "oil": "CL=F", "gold": "GC=F", "silver": "SI=F",
    "reit": "VNQ", "shv": "SHV",  # repo proxy short treasury
}
PERIOD = "2y"

def fetch():
    if not HAS:
        return None
    try:
        data = {}
        for k, sym in TICKERS.items():
            df = yf.download(sym, period=PERIOD, progress=False, auto_adjust=True)
            if df.empty:
                raise ValueError(f"empty {sym}")
            data[k] = df["Close"]
        df = pd.concat(data, axis=1).dropna()
        df.columns = list(data.keys())
        # features
        df["spy_200ma"] = df["spy"].rolling(200).mean()
        df["spy_vs_200"] = (df["spy"] - df["spy_200ma"]) / df["spy_200ma"]
        df["yield_10y"] = df["tnx"]  # tnx is 10Y yield *10, use as proxy
        df["yield_curve"] = df["tnx"] * 0.15  # proxy spread
        df["gsr"] = df["gold"] / df["silver"]
        df["m2_proxy"] = df["shv"].rolling(20).mean().pct_change()  # placeholder
        df = df.dropna()
        return df
    except Exception as e:
        print("fetch failed", e, file=sys.stderr)
        return None

def synthetic(n=500):
    import numpy as np, pandas as pd
    idx = pd.date_range(end=datetime.date.today(), periods=n, freq="B")
    spy = 400 + np.cumsum(np.random.randn(n)*1.2)
    nvda = 400 + np.cumsum(np.random.randn(n)*3)
    df = pd.DataFrame({"spy": spy, "nvda": nvda,
                       "tnx": 4 + np.random.randn(n)*0.2,
                       "dxy": 104 + np.random.randn(n)*0.5,
                       "oil": 80 + np.random.randn(n)*2,
                       "gold": 2000 + np.random.randn(n)*15,
                       "silver": 25 + np.random.randn(n)*0.5,
                       "reit": 85 + np.random.randn(n)*1,
                       "shv": 110 + np.random.randn(n)*0.2}, index=idx)
    df["spy_200ma"] = df["spy"].rolling(20).mean()  # short for synth
    df["spy_vs_200"] = (df["spy"] - df["spy_200ma"])/df["spy_200ma"]
    df["yield_10y"] = df["tnx"]
    df["yield_curve"] = df["tnx"]*0.15
    df["gsr"] = df["gold"]/df["silver"]
    df["m2_proxy"] = np.random.randn(n)*0.01
    return df.dropna()

def train(df):
    feats = ["yield_10y","yield_curve","dxy","oil","gold","silver","gsr","reit","shv","spy_vs_200","m2_proxy","nvda"]
    # ensure cols
    feats = [f for f in feats if f in df.columns]
    X = df[feats].values[:-1]
    y_spy = (df["spy"].values[1:] - df["spy"].values[:-1])/df["spy"].values[:-1]  # next-day return
    y_nvda = (df["nvda"].values[1:] - df["nvda"].values[:-1])/df["nvda"].values[:-1]
    Y = np.column_stack([y_spy, y_nvda])
    split = int(len(X)*0.8)
    Xtr, Xte = X[:split], X[split:]
    Ytr, Yte = Y[:split], Y[split:]
    scaler = StandardScaler().fit(Xtr)
    Xtr_s, Xte_s = scaler.transform(Xtr), scaler.transform(Xte)
    mlp = MLPRegressor(hidden_layer_sizes=(32,16), activation="relu", max_iter=800, early_stopping=True, random_state=0)
    mlp.fit(Xtr_s, Ytr)
    # validate
    pred = mlp.predict(Xte_s)
    mae = np.abs(pred - Yte).mean(axis=0)
    r2 = 1 - ((Yte - pred)**2).sum(axis=0) / ((Yte - Yte.mean(axis=0))**2).sum(axis=0)
    meta = {"features": feats, "scaler_mean": scaler.mean_.tolist(), "scaler_scale": scaler.scale_.tolist(),
            "coefs": [c.tolist() for c in mlp.coefs_], "intercepts": [b.tolist() for b in mlp.intercepts_],
            "activation": "relu", "n_features": len(feats)}
    validate = {"mae_spy": float(mae[0]), "mae_nvda": float(mae[1]), "r2_spy": float(r2[0]), "r2_nvda": float(r2[1]),
                "n_train": int(split), "n_test": int(len(X)-split), "last_close_spy": float(df["spy"].iloc[-1]), "last_close_nvda": float(df["nvda"].iloc[-1])}
    # tomorrow prediction using last row
    last = scaler.transform(df[feats].values[-1:].reshape(1,-1))
    ret = mlp.predict(last)[0]
    px_spy = float(df["spy"].iloc[-1] * (1+ret[0]))
    px_nvda = float(df["nvda"].iloc[-1] * (1+ret[1]))
    validate["pred_ret_spy"] = float(ret[0]); validate["pred_ret_nvda"] = float(ret[1])
    validate["pred_px_spy"] = px_spy; validate["pred_px_nvda"] = px_nvda
    validate["pred_date"] = str((df.index[-1] + pd.tseries.offsets.BDay(1)).date())
    return meta, validate

def main():
    df = fetch()
    if df is None or len(df) < 220:
        print("using synthetic fallback")
        df = synthetic()
    meta, validate = train(df)
    ROOT.mkdir(exist_ok=True)
    (ROOT/"model.json").write_text(json.dumps(meta))
    (ROOT/"meta.json").write_text(json.dumps({"features": meta["features"], "validate": validate, "tickers": TICKERS, "period": PERIOD}, indent=2))
    (ROOT/"validate.json").write_text(json.dumps(validate, indent=2))
    print(json.dumps(validate, indent=2))

if __name__ == "__main__":
    main()
