import React from 'react'
import { Layout } from '../components/Layout.jsx'

export function ML() {
  const [data, setData] = React.useState(null)
  const [err, setErr] = React.useState(null)
  React.useEffect(() => {
    fetch('/ml/validate.json').then(r=>r.json()).then(setData).catch(()=>fetch('./ml/validate.json').then(r=>r.json()).then(setData).catch(e=>setErr(String(e))))
    // also try docs path
    if (!data) fetch('/docs/ml/validate.json').then(r=>r.json()).then(setData).catch(()=>{})
  }, [])
  // try ml/validate.json via relative
  React.useEffect(() => { if(!data) fetch('ml/validate.json').then(r=>r.json()).then(setData).catch(()=>{}) }, [data])
  return (
    <Layout title="">
      <style>{`.ml-root{margin:0 -24px; padding:24px; background:#f8fafc} .ml-shell{max-width:1100px; margin:0 auto} .mono{font-family:'JetBrains Mono',monospace}`}</style>
      <div className="ml-root">
        <div className="ml-shell">
          <div className="mono" style={{ fontSize:10, letterSpacing:2, color:'#6366f1' }}>ML LAB — TREASURY · YIELD CURVE · P/E · M2 · DXY · OIL · GOLD · SILVER · GSR · REIT · REPO · 200MA</div>
          <div style={{ fontSize:26, fontWeight:800, letterSpacing:'-0.02em' }}>SPY & NVDA — next-day NN</div>
          <p style={{ fontSize:13, color:'#475569' }}>17-feature MLP 32×16 — adds <strong>P/E (SPY 27.7, NVDA ~35)</strong> and <strong>10Y−2Y curve</strong>. Trained 5y, validate holdout. WASM via JSON.</p>
          {err && <div style={{ color:'#ef4444', fontSize:12 }}>Load failed: {err} — run <code>python3 ml/train.py</code> to regenerate ml/*.json</div>}
          {data ? (
            <>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:16 }}>
              <div style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:14, padding:16 }}>
                <div style={{ fontWeight:700 }}>Traditional — what inputs say</div>
                <div className="mono" style={{ fontSize:11, marginTop:8, lineHeight:1.7, color:'#334155' }}>
                  Yield curve <strong style={{ color: (data.traditional?.yield_curve>0?'#10b981':'#ef4444') }}>{data.traditional?.yield_curve?.toFixed(2)}% {data.traditional?.curve_inv?' (inverted!)':''}</strong> — {data.traditional?.yield_curve>0?'upward, risk-on':'inverted, caution'}<br />
                  P/E SPY <strong>{data.traditional?.pe_spy?.toFixed(1)}</strong> <span style={{ color: (data.traditional?.pe_spy_z>1?'#ef4444':'#64748b') }}>(z {data.traditional?.pe_spy_z?.toFixed(2)})</span> — {data.traditional?.pe_spy_z>1?'rich':'fair'}<br />
                  SPY vs 200MA <strong>{(data.traditional?.spy_vs_200*100).toFixed(1)}%</strong> — {data.traditional?.spy_vs_200>0.05?'extended': data.traditional?.spy_vs_200>0?'above':'below'}<br />
                  DXY <strong>{data.traditional?.dxy?.toFixed(1)}</strong>
                </div>
                <svg viewBox="0 0 300 60" style={{ width:'100%', height:60, marginTop:8, background:'#f8fafc', borderRadius:8 }}>
                  <text x={8} y={12} fontSize={7} className="mono" fill="#64748b">10Y-2Y curve (last 5y proxy, now {data.traditional?.yield_curve?.toFixed(2)}%)</text>
                  <line x1={20} y1={30} x2={280} y2={30} stroke="#e2e8f0" />
                  <line x1={150} y1={20} x2={150} y2={40} stroke="#10b981" strokeDasharray="3 3" />
                  <text x={150} y={50} textAnchor="middle" fontSize={6} className="mono" fill="#10b981">today {data.traditional?.yield_curve>0?'+':''}{data.traditional?.yield_curve?.toFixed(2)}%</text>
                  <circle cx={150 + (data.traditional?.yield_curve*40)} cy={30} r={4} fill={data.traditional?.yield_curve>0?'#10b981':'#ef4444'} />
                </svg>
              </div>
              <div style={{ background:'#0f172a', color:'#e2e8f0', borderRadius:14, padding:16 }}>
                <div className="mono" style={{ fontSize:11, color:'#22d3ee' }}>ML TOTAL EVALUATION</div>
                <div style={{ display:'flex', gap:12, marginTop:8 }}>
                  <div><div className="mono" style={{ fontSize:10, color:'#94a3b8' }}>SPY</div><div style={{ fontSize:20, fontWeight:800 }}>${data.pred_px_spy?.toFixed(2)} <span style={{ fontSize:11, color: data.pred_ret_spy>0?'#34d399':'#f87171' }}>{(data.pred_ret_spy*100).toFixed(2)}%</span></div></div>
                  <div><div className="mono" style={{ fontSize:10, color:'#94a3b8' }}>NVDA</div><div style={{ fontSize:20, fontWeight:800 }}>${data.pred_px_nvda?.toFixed(2)} <span style={{ fontSize:11, color: data.pred_ret_nvda>0?'#34d399':'#f87171' }}>{(data.pred_ret_nvda*100).toFixed(2)}%</span></div></div>
                </div>
                <div className="mono" style={{ fontSize:10, marginTop:8, color: data.hold?'#34d399':'#f87171' }}>{data.hold?'✓ HOLD — MAE ok, toy signal':'✗ HOLD FAILED — MAE too high, toy only (not trading)'} · MAE SPY {(data.mae_spy*100).toFixed(1)}% NVDA {(data.mae_nvda*100).toFixed(1)}%</div>
                <div className="mono" style={{ fontSize:10, marginTop:6, opacity:0.6 }}>close SPY {data.last_close_spy?.toFixed(2)} / NVDA {data.last_close_nvda?.toFixed(2)} · {data.n_train} train / {data.n_test} test · {data.pred_date}</div>
              </div>
            </div>
            <div className="mono" style={{ fontSize:10, marginTop:10, color:'#64748b' }}>Traditional said: curve {data.traditional?.yield_curve>0?'steep':'flat/inverted'}, P/E {data.traditional?.pe_spy?.toFixed(1)} — ML blends all 17 feats (treasury, P/E, DXY, gold… ) into one number above. Backtest must be green before this becomes more than a toy.</div>
            </>
          ) : <div className="mono" style={{ fontSize:12, color:'#64748b', marginTop:12 }}>Loading ml/validate.json…</div>}
          <div style={{ marginTop:16, fontSize:12, color:'#475569' }}>
            Full feature list in <code>ml/meta.json</code> — includes yield curve, monetary supply (M2 proxy via SHV), DXY, oil, gold, silver, GSR, real estate (VNQ), repo (SHV), VOO/SPY vs 200MA. Add more via <code>TICKERS</code> in <code>ml/train.py</code>.
          </div>
        </div>
      </div>
    </Layout>
  )
}
