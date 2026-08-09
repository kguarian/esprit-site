import React from 'react'
import { DetailSection, InteractiveMap } from '../components/InteractiveMap.jsx'

const fmt = (value, digits = 2) => Number.isFinite(value) ? value.toFixed(digits) : '—'
const pct = value => Number.isFinite(value) ? `${value >= 0 ? '+' : ''}${(value * 100).toFixed(2)}%` : '—'

function PredictionDetail({ data }) {
  const positiveSpy = (data?.pred_ret_spy ?? 0) >= 0
  const positiveNvda = (data?.pred_ret_nvda ?? 0) >= 0
  return <>
    <DetailSection heading="NEXT-DAY MLP / TOY SIGNAL">
      <div className="ml-quote-grid">
        <div><small>SPY</small><strong>${fmt(data?.pred_px_spy)}</strong><em className={positiveSpy ? 'positive' : 'negative'}>{pct(data?.pred_ret_spy)}</em></div>
        <div><small>NVDA</small><strong>${fmt(data?.pred_px_nvda)}</strong><em className={positiveNvda ? 'positive' : 'negative'}>{pct(data?.pred_ret_nvda)}</em></div>
      </div>
      <p>17-feature MLP, 32×16. Date: {data?.pred_date ?? 'awaiting validation file'}.</p>
    </DetailSection>
    <DetailSection heading="VALIDATION STATUS">
      <p><strong>{data?.hold ? 'HOLD / exploratory only' : 'HOLD FAILED / not a trading signal'}</strong> · MAE: SPY {pct(data?.mae_spy)} · NVDA {pct(data?.mae_nvda)}.</p>
    </DetailSection>
  </>
}

function CurveDetail({ data }) {
  const curve = data?.traditional?.yield_curve
  return <>
    <DetailSection heading="10Y − 2Y YIELD CURVE">
      <p><strong>{fmt(curve)}%</strong> · {data?.traditional?.curve_inv ? 'inverted: historically cautionary' : 'upward: not inverted'}.</p>
      <svg className="ml-mini-chart" viewBox="0 0 310 54" role="img" aria-label="Yield curve indicator">
        <line x1="15" y1="27" x2="295" y2="27" /><path d="M22 37 C75 38 88 21 141 26 S225 13 288 16" /><circle cx="288" cy="16" r="4" />
        <text x="15" y="50">5Y field trace</text><text x="288" y="50" textAnchor="end">today {fmt(curve)}%</text>
      </svg>
    </DetailSection>
  </>
}

function ValuationDetail({ data }) {
  const traditional = data?.traditional
  return <>
    <DetailSection heading="EQUITY VALUATION">
      <p>SPY P/E: <strong>{fmt(traditional?.pe_spy, 1)}</strong> (z {fmt(traditional?.pe_spy_z)}) · SPY vs 200MA: <strong>{pct(traditional?.spy_vs_200)}</strong>.</p>
      <p>{(traditional?.spy_vs_200 ?? 0) > .05 ? 'Price is more than 5% over its 200-day average; treat it as extended rather than explanatory.' : 'Price is near its long moving average.'}</p>
    </DetailSection>
  </>
}

function DollarDetail({ data }) {
  return <DetailSection heading="DOLLAR + MACRO">
    <p>DXY: <strong>{fmt(data?.traditional?.dxy, 1)}</strong>. The model also watches oil, gold, silver, gold/silver ratio, REITs, SHV / repo proxy, and a monetary-supply proxy.</p>
  </DetailSection>
}

export function ML() {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    let mounted = true
    fetch('/ml/validate.json')
      .then(response => {
        if (!response.ok) throw new Error(`validate.json returned ${response.status}`)
        return response.json()
      })
      .then(result => { if (mounted) setData(result) })
      .catch(reason => { if (mounted) setError(reason.message) })
    return () => { mounted = false }
  }, [])

  const locations = React.useMemo(() => [
    {
      id: 'home', hook: 'ml-home', home: true, to: '/', glyph: 'home', x: 350, y: 448, w: 180, h: 150,
      label: 'HOME', sub: '← ARCHIPELAGO', lore: 'Return to the full Esprit field map.', detail: <DetailSection heading="PORTAL"><p>The world map links profile, research, models, builds, and contact points.</p></DetailSection>,
    },
    {
      id: 'prediction', hook: 'ml-prediction', glyph: 'forecast', x: 1165, y: 490, w: 365, h: 186,
      label: 'SPY / NVDA', sub: data ? 'NEXT-DAY ESTIMATE' : 'LOADING MODEL DATA', lore: 'A validation-backed model readout for SPY and NVDA. It is educational, not financial advice.', detail: <PredictionDetail data={data} />,
    },
    {
      id: 'curve', hook: 'ml-yield-curve', glyph: 'curve', x: 726, y: 753, w: 352, h: 185,
      label: 'YIELD CURVE', sub: data ? `${fmt(data.traditional?.yield_curve)}% / 10Y−2Y` : '10Y − 2Y', lore: 'The yield-curve field: the spread between 10-year and 2-year Treasury yields.', detail: <CurveDetail data={data} />,
    },
    {
      id: 'valuation', hook: 'ml-valuation', glyph: 'valuation', x: 1612, y: 738, w: 318, h: 175,
      label: 'P / E', sub: data ? `SPY ${fmt(data.traditional?.pe_spy, 1)}` : 'VALUATION', lore: 'Valuation and moving-average context are inputs, not standalone trade calls.', detail: <ValuationDetail data={data} />,
    },
    {
      id: 'dollar', hook: 'ml-dxy', glyph: 'dollar', x: 1512, y: 1125, w: 326, h: 172,
      label: 'DXY', sub: data ? `DOLLAR ${fmt(data.traditional?.dxy, 1)}` : 'MACRO FIELD', lore: 'Dollar and cross-asset observations anchor the macro context.', detail: <DollarDetail data={data} />,
    },
    {
      id: 'features', hook: 'ml-features', glyph: 'features', x: 866, y: 1136, w: 345, h: 178,
      label: 'FEATURE SET', sub: '17 SIGNALS', lore: 'The complete set of inputs used by the MLP.', detail: <><DetailSection heading="INPUTS"><p>Yields · curve · inversion flag · SPY/NVDA P/E · DXY · oil · gold · silver · GSR · REIT · SHV · 200MA · M2 proxy · NVDA.</p></DetailSection><DetailSection heading="METHOD"><p>Train: {data?.n_train ?? '—'} sessions · test: {data?.n_test ?? '—'} sessions. The model must keep earning trust through out-of-sample checks.</p></DetailSection></>,
    },
    {
      id: 'training', hook: 'ml-training-hook', glyph: 'note', x: 1180, y: 833, w: 310, h: 160,
      label: 'TRAINING', sub: 'FUTURE HOOK', lore: 'Reserved for a future training and backtest visualization.', detail: <DetailSection heading="NEXT INSTRUMENT"><p data-hook="ml-training-visualization">A live training timeline, residual trace, and feature-importance readout can attach here without changing the map.</p></DetailSection>,
    },
  ], [data])

  return <>
    <style>{`
      .ml-quote-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}.ml-quote-grid>div{border:2px solid rgba(10,10,11,.3);border-radius:8px;padding:8px;background:rgba(126,143,163,.17)}.ml-quote-grid small,.ml-quote-grid strong,.ml-quote-grid em{display:block}.ml-quote-grid small{font:800 9px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.14em}.ml-quote-grid strong{font-size:20px;line-height:1.25}.ml-quote-grid em{font:800 11px/1 "JetBrains Mono",ui-monospace,monospace;font-style:normal}.positive{color:#315c45}.negative{color:#833a35}.ml-mini-chart{display:block;width:100%;height:60px;margin-top:8px;background:rgba(126,143,163,.14);border-radius:7px}.ml-mini-chart line{stroke:rgba(10,10,11,.25)}.ml-mini-chart path{fill:none;stroke:#0A0A0B;stroke-width:2.5}.ml-mini-chart circle{fill:#7E8FA3;stroke:#0A0A0B;stroke-width:2}.ml-mini-chart text{font:700 7px "JetBrains Mono",ui-monospace,monospace;fill:#0A0A0B}
    `}</style>
    <InteractiveMap
      id="ml"
      eyebrow="MODEL MAP / VALIDATION TERRAIN"
      title="Market Signal Lab"
      subtitle="Walk the model’s inputs: forecasts, curve shape, valuation, dollar context, and the complete feature field. Educational research only — not investment advice."
      locations={locations}
      footer={error ? `MODEL FILE UNAVAILABLE: ${error}` : data ? `VALIDATED ${data.pred_date} · ${data.n_train} TRAIN / ${data.n_test} TEST` : 'LOADING ml/validate.json…'}
    />
  </>
}
