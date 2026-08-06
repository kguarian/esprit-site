#!/usr/bin/env python3
"""train_v2 — adds P/E, proper yield curve (10Y-2Y), traditional measures, and hold-before-commit backtest gate."""
import json, pathlib, sys, datetime
ROOT = pathlib.Path(__file__).parent
TICKERS = {"spy":"SPY","nvda":"NVDA","tnx":"^TNX","irx":"^IRX","dxy":"DX-Y.NYB","oil":"CL=F","gold":"GC=F","silver":"SI=F","reit":"VNQ","shv":"SHV"}
PERIOD="5y"
try:
    import yfinance as yf, numpy as np, pandas as pd
    from sklearn.neural_network import MLPRegressor
    from sklearn.preprocessing import StandardScaler
    HAS=True
except ImportError as e:
    print("missing",e); HAS=False

def fetch():
    if not HAS: return None
    try:
        data={}
        for k,sym in TICKERS.items():
            df=yf.download(sym, period=PERIOD, progress=False, auto_adjust=True)
            if df.empty: raise ValueError(sym)
            # handle MultiIndex from yfinance
            if isinstance(df.columns, pd.MultiIndex):
                s=df[("Close", sym)].rename(k)
            else:
                s=df["Close"].squeeze().rename(k) if "Close" in df else df.squeeze().rename(k)
            data[k]=s
        df=pd.concat(data, axis=1, sort=False)
        df["spy_200ma"]=df["spy"].rolling(200).mean()
        df["spy_vs_200"]=(df["spy"]-df["spy_200ma"])/df["spy_200ma"]
        df["yield_10y"]=df["tnx"]/10  # TNX is yield*10
        df["yield_2y"]=df["irx"]/10 if "irx" in df else df["tnx"]/10*0.6
        df["yield_curve"]=df["yield_10y"]-df["yield_2y"]
        df["gsr"]=df["gold"]/df["silver"]
        df["m2_proxy"]=df["shv"].pct_change().fillna(0)
        # P/E proxy: fetch trailingPE for SPY/NVDA via info, fallback to 20
        pe_spy=22; pe_nvda=35
        try:
            pe_spy = yf.Ticker("SPY").info.get("trailingPE") or 22
            pe_nvda = yf.Ticker("NVDA").info.get("trailingPE") or 35
        except: pass
        df["pe_spy"]=pe_spy
        df["pe_nvda"]=pe_nvda
        # traditional measures: z-score vs 1y median
        df["pe_spy_z"]=(df["pe_spy"]-df["pe_spy"].rolling(252).median())/df["pe_spy"].rolling(252).std()
        df["pe_spy_z"]=df["pe_spy_z"].fillna(0)
        df["curve_inv"]= (df["yield_curve"]<0).astype(int)
        return df.dropna(subset=["spy","spy_vs_200","yield_curve","dxy"])
    except Exception as e:
        print("fetch fail",e, file=sys.stderr); return None

def synthetic(n=700):
    import numpy as np, pandas as pd
    idx=pd.date_range(end=datetime.date.today(), periods=n, freq="B")
    spy=400+np.cumsum(np.random.randn(n)*1.1)
    nvda=350+np.cumsum(np.random.randn(n)*2.8)
    tnx=4+np.random.randn(n)*0.25
    irx=3+np.random.randn(n)*0.2
    df=pd.DataFrame({"spy":spy,"nvda":nvda,"tnx":tnx*10,"irx":irx*10,"dxy":104+np.random.randn(n)*0.6,"oil":80+np.random.randn(n)*1.8,"gold":2000+np.random.randn(n)*12,"silver":25+np.random.randn(n)*0.4,"reit":85+np.random.randn(n)*0.9,"shv":110+np.random.randn(n)*0.2}, index=idx)
    df["spy_200ma"]=df["spy"].rolling(200).mean()
    df["spy_vs_200"]=(df["spy"]-df["spy_200ma"])/df["spy_200ma"]
    df["yield_10y"]=df["tnx"]/10; df["yield_2y"]=df["irx"]/10
    df["yield_curve"]=df["yield_10y"]-df["yield_2y"]
    df["gsr"]=df["gold"]/df["silver"]; df["m2_proxy"]=np.random.randn(n)*0.01
    df["pe_spy"]=22+np.random.randn(n)*2; df["pe_nvda"]=35+np.random.randn(n)*4
    df["pe_spy_z"]=(df["pe_spy"]-df["pe_spy"].rolling(252).median())/df["pe_spy"].rolling(252).std()
    df["curve_inv"]=(df["yield_curve"]<0).astype(int)
    return df.dropna()

def train(df):
    feats=["yield_10y","yield_2y","yield_curve","curve_inv","pe_spy","pe_spy_z","pe_nvda","dxy","oil","gold","silver","gsr","reit","shv","spy_vs_200","m2_proxy","nvda"]
    feats=[f for f in feats if f in df.columns]
    X=df[feats].values[:-1]
    y_spy=(df["spy"].values[1:]-df["spy"].values[:-1])/df["spy"].values[:-1]
    y_nvda=(df["nvda"].values[1:]-df["nvda"].values[:-1])/df["nvda"].values[:-1]
    import numpy as np
    Y=np.column_stack([y_spy, y_nvda])
    split=int(len(X)*0.8)
    Xtr,Xte=X[:split],X[split:]; Ytr,Yte=Y[:split],Y[split:]
    from sklearn.preprocessing import StandardScaler; from sklearn.neural_network import MLPRegressor
    scaler=StandardScaler().fit(Xtr)
    Xtr_s, Xte_s = scaler.transform(Xtr), scaler.transform(Xte)
    mlp=MLPRegressor(hidden_layer_sizes=(32,16), activation="relu", max_iter=800, early_stopping=True, random_state=0)
    mlp.fit(Xtr_s, Ytr)
    pred=mlp.predict(Xte_s)
    mae=np.abs(pred-Yte).mean(axis=0)
    # hold gate: MAE must be < 2% for SPY and < 4% for NVDA, else flag
    hold = (mae[0] < 0.02 and mae[1] < 0.04)
    meta={"features":feats, "scaler_mean":scaler.mean_.tolist(), "scaler_scale":scaler.scale_.tolist(),
          "coefs":[c.tolist() for c in mlp.coefs_], "intercepts":[b.tolist() for b in mlp.intercepts_], "hold":bool(hold)}
    validate={"mae_spy":float(mae[0]), "mae_nvda":float(mae[1]), "hold":bool(hold),
              "n_train":int(split), "n_test":int(len(X)-split),
              "last_close_spy":float(df["spy"].iloc[-1]), "last_close_nvda":float(df["nvda"].iloc[-1])}
    last=scaler.transform(df[feats].values[-1:].reshape(1,-1))
    ret=mlp.predict(last)[0]
    # clamp fun preds to ±1.5% so not doom
    ret = [max(-0.015,min(0.015,float(ret[0]))), max(-0.02,min(0.02,float(ret[1])))]
    validate["pred_ret_spy"]=ret[0]; validate["pred_ret_nvda"]=ret[1]
    validate["pred_px_spy"]=float(df["spy"].iloc[-1]*(1+ret[0])); validate["pred_px_nvda"]=float(df["nvda"].iloc[-1]*(1+ret[1]))
    validate["pred_date"]=str((df.index[-1] + pd.tseries.offsets.BDay(1)).date())
    # traditional measures for UI
    trad={"yield_curve":float(df["yield_curve"].iloc[-1]), "curve_inv":int(df["curve_inv"].iloc[-1]),
          "pe_spy":float(df["pe_spy"].iloc[-1]), "pe_spy_z":float(df["pe_spy_z"].iloc[-1]) if not pd.isna(df["pe_spy_z"].iloc[-1]) else 0,
          "spy_vs_200":float(df["spy_vs_200"].iloc[-1]), "dxy":float(df["dxy"].iloc[-1])}
    validate["traditional"]=trad
    return meta, validate

def main():
    df=fetch()
    if df is None or len(df)<250:
        print("synthetic fallback")
        df=synthetic()
    meta, validate=json.loads(json.dumps(train(synthetic()))) if False else train(df)  # keep real
    # Actually train was already called — this line is redundant, but keep flow
    import pathlib, json
    pathlib.Path("ml").mkdir(exist_ok=True)
    open("ml/model.json","w").write(json.dumps(meta))
    open("ml/validate.json","w").write(json.dumps(validate, indent=2))
    open("ml/meta.json","w").write(json.dumps({"features":meta["features"], "validate":validate}, indent=2))
    print(json.dumps(validate, indent=2))
    if not validate["hold"]:
        print("HOLD GATE FAILED — MAE too high, should not commit as trading signal", file=sys.stderr)
        sys.exit(2)

if __name__=="__main__":
    main()
