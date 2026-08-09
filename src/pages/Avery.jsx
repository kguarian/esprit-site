import React from 'react'
import { DetailSection, InteractiveMap } from '../components/InteractiveMap.jsx'

const ISOTOPE = {
  name: 'Radon-220',
  symbol: '²²⁰Rn',
  commonName: 'thoron',
  halfLifeSeconds: 55.6,
}

const EXPOSURE_SECONDS = [15, 45, 90, 180]

function decayProbability(seconds) {
  return 1 - 2 ** (-seconds / ISOTOPE.halfLifeSeconds)
}

function PhysicsDetail({ phase, stats, exposureSeconds, probability }) {
  const vector = phase === 'alive'
    ? '|not decayed⟩ |alive⟩'
    : phase === 'dead'
      ? '|decayed⟩ |dead⟩'
      : 'α|not decayed, alive⟩ + β|decayed, dead⟩'
  return <>
    <DetailSection heading="STATE VECTOR">
      <p className="hollow-vector">|ψ⟩ = {vector}</p>
      <p>{phase === 'sealed' ? `The box is sealed with ${ISOTOPE.symbol} ${ISOTOPE.name}. The longer it remains sealed, the more likely one nucleus has decayed.` : phase === 'measuring' ? 'Measurement is coupling the detector to an external record; the simulator is resolving one outcome.' : phase === 'alive' ? 'One observed run: no decay record, cat alive.' : phase === 'dead' ? 'One observed run: decay record, relay triggered, cat dead.' : `Choose an exposure interval for ${ISOTOPE.name}, then seal the box and measure once.`}</p>
    </DetailSection>
    <DetailSection heading="ISOTOPE">
      <p>{ISOTOPE.symbol} {ISOTOPE.name} ({ISOTOPE.commonName}) · half-life {ISOTOPE.halfLifeSeconds}s · selected exposure {exposureSeconds}s · decay chance {(probability * 100).toFixed(1)}%</p>
    </DetailSection>
    <DetailSection heading="RUN COUNTER"><p>alive {stats.alive} · dead {stats.dead} · total {stats.alive + stats.dead}</p></DetailSection>
  </>
}

export function Avery() {
  const [phase, setPhase] = React.useState('ready')
  const [stats, setStats] = React.useState({ alive: 0, dead: 0 })
  const [exposureSeconds, setExposureSeconds] = React.useState(45)
  const timeoutRef = React.useRef(null)
  const probability = decayProbability(exposureSeconds)

  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const arm = React.useCallback(() => {
    window.clearTimeout(timeoutRef.current)
    setPhase('sealed')
  }, [])

  const measure = React.useCallback(() => {
    if (phase !== 'sealed') return
    setPhase('measuring')
    timeoutRef.current = window.setTimeout(() => {
      const result = Math.random() < probability ? 'dead' : 'alive'
      setPhase(result)
      setStats(current => ({ ...current, [result]: current[result] + 1 }))
    }, 560)
  }, [phase, probability])

  const reset = React.useCallback(() => {
    window.clearTimeout(timeoutRef.current)
    setPhase('ready')
  }, [])

  const common = React.useMemo(() => ({ phase, stats, exposureSeconds, probability }), [exposureSeconds, phase, probability, stats])
  const locations = React.useMemo(() => [
    {
      id: 'home', hook: 'hollow-home', home: true, to: '/', glyph: 'home', x: 342, y: 445, w: 180, h: 150,
      label: 'HOME', sub: '← ARCHIPELAGO', lore: 'Return to the field map. This laboratory is intentionally not marked there.', detail: <DetailSection heading="PORTAL"><p>The archipelago does not advertise this hollow. The route back is nevertheless always open.</p></DetailSection>,
    },
    {
      id: 'atom', hook: 'hollow-atom', glyph: 'atom', x: 835, y: 500, w: 330, h: 182,
      label: 'SOURCE', sub: phase === 'ready' ? `${exposureSeconds}S SELECTED` : phase === 'sealed' ? `${(probability * 100).toFixed(1)}% DECAY CHANCE` : phase === 'dead' ? 'DECAY RECORDED' : 'NO DECAY RECORD', lore: `${ISOTOPE.symbol} ${ISOTOPE.name} source: actual isotope, simulated with exponential decay probability.`,
      detail: <><DetailSection heading="SOURCE CHAMBER"><p>Select an exposure interval, seal the box, then measure. Probability uses P(decay)=1−2^(-t/half-life), with {ISOTOPE.name} half-life {ISOTOPE.halfLifeSeconds}s.</p>{phase === 'ready' && <div className="hollow-choices">{EXPOSURE_SECONDS.map(seconds => <button key={seconds} type="button" className={seconds === exposureSeconds ? 'selected' : ''} onClick={() => setExposureSeconds(seconds)}>{seconds}s · {(decayProbability(seconds) * 100).toFixed(0)}%</button>)}</div>}</DetailSection><PhysicsDetail {...common} /></>,
      action: phase === 'ready' ? arm : undefined, actionLabel: `SEAL BOX WITH ${ISOTOPE.symbol} SOURCE →`,
    },
    {
      id: 'geiger', hook: 'hollow-geiger', glyph: 'geiger', x: 1515, y: 500, w: 322, h: 178,
      label: 'GEIGER', sub: phase === 'dead' ? 'COUNT RECORDED' : phase === 'measuring' ? 'COUPLING…' : 'READY', lore: 'A detector converts a decay event into a macroscopic signal.',
      detail: <><DetailSection heading="DETECTOR"><p>A Geiger–Müller tube amplifies an ionizing event. In the thought experiment it triggers a relay; in a real detector it leaves a record in its environment.</p></DetailSection><PhysicsDetail {...common} /></>,
    },
    {
      id: 'relay', hook: 'hollow-relay', glyph: 'hammer', x: 1848, y: 850, w: 292, h: 172,
      label: 'RELAY', sub: phase === 'dead' ? 'TRIGGERED' : 'ARMED', lore: 'The mechanical link between a detector signal and the vial.',
      detail: <><DetailSection heading="HAMMER RELAY"><p>The relay turns a detector record into a definite macroscopic action: a hammer either remains at rest or breaks the vial.</p></DetailSection><PhysicsDetail {...common} /></>,
    },
    {
      id: 'vial', hook: 'hollow-vial', glyph: 'vial', x: 1524, y: 1150, w: 304, h: 170,
      label: 'VIAL', sub: phase === 'dead' ? 'BROKEN' : 'SEALED', lore: 'A stylized poison-vial station: a causal step in the original thought experiment.',
      detail: <><DetailSection heading="VIAL"><p>Schrödinger’s original setup uses a lethal mechanism coupled to radioactive decay. This map depicts the causal relation, not an instruction or real apparatus.</p></DetailSection><PhysicsDetail {...common} /></>,
    },
    {
      id: 'cat', hook: 'hollow-cat', glyph: 'cat', x: 864, y: 1120, w: 346, h: 178,
      label: 'CAT', sub: phase === 'alive' ? 'ALIVE' : phase === 'dead' ? 'DEAD' : phase === 'measuring' ? 'MEASURING…' : 'SEALED BOX', lore: 'The cat is entangled with the decay chain in the simplified thought experiment.',
      detail: <><DetailSection heading="MEASUREMENT STATION"><p>Opening the box samples the selected exposure interval. Current decay chance: {(probability * 100).toFixed(1)}%. No real apparatus is implied; this is a safe conceptual simulator.</p></DetailSection><PhysicsDetail {...common} /></>,
      action: phase === 'sealed' ? measure : phase === 'alive' || phase === 'dead' ? reset : undefined,
      actionLabel: phase === 'sealed' ? 'MEASURE / OPEN THE BOX →' : phase === 'alive' || phase === 'dead' ? 'RESET / NEW RUN →' : undefined,
    },
  ], [arm, common, exposureSeconds, measure, phase, probability, reset])

  return <>
    <style>{`
      .hollow-vector{font:800 10px/1.55 "JetBrains Mono",ui-monospace,monospace!important;letter-spacing:.02em}.hollow-state{position:absolute;z-index:4;right:clamp(14px,2.8vw,44px);top:120px;padding:8px 12px;border:2px solid #0A0A0B;background:rgba(232,224,200,.9);font:800 10px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.13em;white-space:nowrap}.hollow-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-top:9px}.hollow-choices button{border:2px solid #0A0A0B;background:#E8E0C8;color:#0A0A0B;padding:7px 6px;border-radius:7px;font:800 9px/1 "JetBrains Mono",ui-monospace,monospace;cursor:pointer}.hollow-choices button.selected{background:#7E8FA3}.hollow-ash{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 65% 72%,rgba(122,76,49,.52),transparent 33%),linear-gradient(180deg,rgba(59,45,36,.1),rgba(24,17,14,.32));mix-blend-mode:multiply}.hollow-ash:after{content:"";position:absolute;inset:0;background-image:radial-gradient(#0A0A0B 1px,transparent 1.3px);background-size:17px 17px;opacity:.27}@media(max-width:720px){.hollow-state{right:12px;top:70px;font-size:8px}}
    `}</style>
    <InteractiveMap
      id="hollow"
      eyebrow="THE HOLLOW / SCHRÖDINGER LAB"
      title="The Closed Box"
      subtitle={`A playable thought-experiment map using ${ISOTOPE.symbol} ${ISOTOPE.name}. Choose exposure time, seal the box, then measure the decay chain once.`}
      locations={locations}
      footer={phase === 'ready' ? `SOURCE READY · ${exposureSeconds}S EXPOSURE · ${(probability * 100).toFixed(1)}% DECAY CHANCE` : phase === 'sealed' ? 'BOX SEALED · SELECT CAT TO MEASURE' : phase === 'measuring' ? 'MEASUREMENT IN PROGRESS…' : `OBSERVED: ${phase.toUpperCase()} · SELECT CAT TO RESET`}
    >
      {phase === 'dead' && <div className="hollow-ash" aria-hidden="true" />}
      <div className="hollow-state" aria-live="polite">STATE: {phase.toUpperCase()} · RUNS {stats.alive + stats.dead}</div>
    </InteractiveMap>
  </>
}
