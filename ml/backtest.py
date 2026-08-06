#!/usr/bin/env python3
"""backtest.py — walk-forward sanity toy, decent looking. No live trading."""
import json, pathlib
import pandas as pd, numpy as np

ROOT = pathlib.Path(__file__).parent

def load_df():
    try:
        import yfinance as yf
        data={}
        tickers={"spy":"SPY","nvda":"NVDA","tnx":"^TNX","dxy":"DX-Y.NYB","oil":"CL=F","gold":"GC=F","silver":"SI=F","reit":"VNQ","shv":"SHV"}
        for k,sym in tickers.items():
            df=yf.download(sym, period="2y", progress=False, auto_adjust=True)
            data[k]=df["Close"]
        df=pd.concat(data, axis=1).dropna()
        df.columns=list(data.keys())
        df["spy_200ma"]=df["spy"].rolling(200).mean()
        df["spy_vs_200"]=(df["spy"]-df["spy_200ma"])/df["spy_200ma"]
        df["yield_10y"]=df["tnx"]; df["yield_curve"]=df["tnx"]*0.15
        df["gsr"]=df["gold"]/df["silver"]; df["m2_proxy"]=df["shv"].rolling(20).mean().pct_change()
        return df.dropna()
    except Exception as e:
        print("fetch fail",e)
        return None

def backtest():
    df = load_df()
    if df is None or len(df)<250:
        print("synthetic fallback")
        import pandas as pd, numpy as np, datetime
        n=500
        idx=pd.date_range(end=pd.Timestamp.today(), periods=n, freq="B")
        spy=400+np.cumsum(np.random.randn(n)*1.2)
        nvda=400+np.cumsum(np.random.randn(n)*3)
        df=pd.DataFrame({"spy":spy,"nvda":nvda,"tnx":4+np.random.randn(n)*0.2,"dxy":104+np.random.randn(n)*0.5,"oil":80+np.random.randn(n)*2,"gold":2000+np.random.randn(n)*15,"silver":25+np.random.randn(n)*0.5,"reit":85+np.random.randn(n)*1,"shv":110+np.random.randn(n)*0.2}, index=idx)
        df["spy_200ma"]=df["spy"].rolling(20).mean()
        df["spy_vs_200"]=(df["spy"]-df["spy_200ma"])/df["spy_200ma"]
        df["yield_10y"]=df["tnx"]; df["yield_curve"]=df["tnx"]*0.15; df["gsr"]=df["gold"]/df["silver"]; df["m2_proxy"]=np.random.randn(n)*0.01
        df=df.dropna()

    feats=["yield_10y","yield_curve","dxy","oil","gold","silver","gsr","reit","shv","spy_vs_200","m2_proxy","nvda"]
    feats=[f for f in feats if f in df.columns]
    # walk-forward: train 120d, predict next day, step 1d
    window=120
    rets=[]
    preds=[]
    dates=[]
    from sklearn.neural_network import MLPRegressor
    from sklearn.preprocessing import StandardScaler
    for i in range(window, len(df)-1):
        tr = df.iloc[i-window:i]
        te = df.iloc[i:i+1]
        Xtr = tr[feats].values
        ytr = (tr["spy"].values[1:]-tr["spy"].values[:-1])/tr["spy"].values[:-1]
        # need aligned Xtr[:-1] vs ytr
        Xtr = Xtr[:-1]
        # skip if small
        if len(Xtr)<60: continue
        scaler=StandardScaler().fit(Xtr)
        Xtr_s=scaler.transform(Xtr)
        Xte_s=scaler.transform(te[feats].values)
        mlp=MLPRegressor(hidden_layer_sizes=(16,), max_iter=400, random_state=0)
        try:
            mlp.fit(Xtr_s, ytr)
            pr = mlp.predict(Xte_s)[0]
        except: pr=0
        actual = (df["spy"].iloc[i+1]-df["spy"].iloc[i])/df["spy"].iloc[i]
        rets.append(actual); preds.append(pr); dates.append(str(df.index[i].date()))
    # strategy: long if pred>0 else flat (sanity)
    strat = [r if p>0 else 0 for r,p in zip(rets,preds)]
    # equity curves
    bh_eq = [1]
    st_eq = [1]
    for r,s in zip(rets,strat):
        bh_eq.append(bh_eq[-1]*(1+r))
        st_eq.append(st_eq[-1]*(1+s))
    # metrics
    import numpy as np
    bh_ret = np.array(rets)
    st_ret = np.array(strat)
    def sharpe(a): return float(np.mean(a)/np.std(a)*np.sqrt(252)) if np.std(a)>0 else 0
    def maxdd(eq):
        peak=np.maximum.accumulate(eq)
        dd=(np.array(eq)-peak)/peak
        return float(dd.min())
    res={"dates":dates, "bh_equity":bh_eq, "strat_equity":st_eq,
         "preds":preds, "actuals":rets,
         "metrics":{"bh_sharpe":sharpe(bh_ret), "st_sharpe":sharpe(st_ret), "bh_maxdd":maxdd(bh_eq), "st_maxdd":maxdd(st_eq),
                   "bh_total":float(bh_eq[-1]-1), "st_total":float(st_eq[-1]-1), "hit_rate":float(np.mean((np.array(preds)>0)==(np.array(rets)>0))),
                   "n":len(rets)}}
    (ROOT/"backtest.json").write_text(json.dumps(res))
    print(json.dumps(res["metrics"], indent=2))

if __name__=="__main__":
    backtest()
