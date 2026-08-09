import React from 'react'
import { DetailSection, InteractiveMap } from '../components/InteractiveMap.jsx'

function PhysicsDetail({ phase, stats }) {
  const vector = phase === 'alive'
    ? '|not decayed⟩ |alive⟩'
    : phase === 'dead'
      ? '|decayed⟩ |dead⟩'
      : 'α|not decayed, alive⟩ + β|decayed, dead⟩'
  return <>
    <DetailSection heading="STATE VECTOR">
      <p className="hollow-vector">|ψ⟩ = {vector}</p>
      <p>{phase === 'sealed' ? 'The box is sealed. Before measurement, the atom, apparatus, and cat are modeled as one entangled system.' : phase === 'measuring' ? 'Measurement is coupling the apparatus to an external record; the simulator is resolving one outcome.' : phase === 'alive' ? 'One observed run: no decay record, cat alive.' : phase === 'dead' ? 'One observed run: decay record, relay triggered, cat dead.' : 'Prepare a deliberately tuned 50/50 simulation interval, then measure once.'}</p>
    </DetailSection>
    <DetailSection heading="RUN COUNTER"><p>alive {stats.alive} · dead {stats.dead} · total {stats.alive + stats.dead}</p></DetailSection>
  </>
}

export function Avery() {
  const [phase, setPhase] = React.useState('ready')
  const [stats, setStats] = React.useState({ alive: 0, dead: 0 })
  const timeoutRef = React.useRef(null)

  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const arm = React.useCallback(() => {
    window.clearTimeout(timeoutRef.current)
    setPhase('sealed')
  }, [])

  const measure = React.useCallback(() => {
    if (phase !== 'sealed') return
    setPhase('measuring')
    timeoutRef.current = window.setTimeout(() => {
      const result = Math.random() < .5 ? 'alive' : 'dead'
      setPhase(result)
      setStats(current => ({ ...current, [result]: current[result] + 1 }))
    }, 560)
  }, [phase])

  const reset = React.useCallback(() => {
    window.clearTimeout(timeoutRef.current)
    setPhase('ready')
  }, [])

  const common = React.useMemo(() => ({ phase, stats }), [phase, stats])
  const locations = React.useMemo(() => [
    {
      id: 'home', hook: 'hollow-home', home: true, to: '/', glyph: 'home', x: 342, y: 445, w: 180, h: 150,
      label: 'HOME', sub: '← ARCHIPELAGO', lore: 'Return to the field map. This laboratory is intentionally not marked there.', detail: <DetailSection heading="PORTAL"><p>The archipelago does not advertise this hollow. The route back is nevertheless always open.</p></DetailSection>,
    },
    {
      id: 'atom', hook: 'hollow-atom', glyph: 'atom', x: 835, y: 500, w: 330, h: 182,
      label: 'SOURCE', sub: phase === 'ready' ? 'UNPREPARED' : phase === 'sealed' ? '50 / 50 INTERVAL' : phase === 'dead' ? 'DECAY RECORDED' : 'NO DECAY RECORD', lore: 'An unstable-source simulator represents the quantum event that begins the chain.',
      detail: <><DetailSection heading="SOURCE CHAMBER"><p>This is a pedagogical 50/50 simulation interval, not a claim that a real isotope has a one-second half-life. The quantum state evolves until a measurement produces a recorded outcome.</p></DetailSection><PhysicsDetail {...common} /></>,
      action: phase === 'ready' ? arm : undefined, actionLabel: 'SEAL BOX / PREPARE 50–50 RUN →',
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
      detail: <><DetailSection heading="MEASUREMENT STATION"><p>In this simulator, opening the box is the measurement event. Every prepared run has equal simulated probability of decay or no decay.</p></DetailSection><PhysicsDetail {...common} /></>,
      action: phase === 'sealed' ? measure : phase === 'alive' || phase === 'dead' ? reset : undefined,
      actionLabel: phase === 'sealed' ? 'MEASURE / OPEN THE BOX →' : phase === 'alive' || phase === 'dead' ? 'RESET / NEW RUN →' : undefined,
    },
  ], [arm, common, measure, phase, reset])

  return <>
    <style>{`
      .hollow-vector{font:800 10px/1.55 "JetBrains Mono",ui-monospace,monospace!important;letter-spacing:.02em}.hollow-state{position:absolute;z-index:4;left:50%;top:17%;transform:translateX(-50%);padding:8px 12px;border:2px solid #0A0A0B;background:rgba(232,224,200,.9);font:800 10px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.13em;white-space:nowrap}.hollow-ash{position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(ellipse at 65% 72%,rgba(122,76,49,.52),transparent 33%),linear-gradient(180deg,rgba(59,45,36,.1),rgba(24,17,14,.32));mix-blend-mode:multiply}.hollow-ash:after{content:"";position:absolute;inset:0;background-image:radial-gradient(#0A0A0B 1px,transparent 1.3px);background-size:17px 17px;opacity:.27}@media(max-width:720px){.hollow-state{top:16%;font-size:8px}}
    `}</style>
    <InteractiveMap
      id="hollow"
      eyebrow="THE HOLLOW / SCHRÖDINGER LAB"
      title="The Closed Box"
      subtitle="A map of the thought experiment: source, detector, relay, vial, and cat. Walk to a station, prepare a simulated 50/50 run, then make one measurement."
      locations={locations}
      footer={phase === 'ready' ? 'SOURCE UNPREPARED · SELECT SOURCE TO SEAL THE BOX' : phase === 'sealed' ? 'BOX SEALED · SELECT CAT TO MEASURE' : phase === 'measuring' ? 'MEASUREMENT IN PROGRESS…' : `OBSERVED: ${phase.toUpperCase()} · SELECT CAT TO RESET`}
    >
      {phase === 'dead' && <div className="hollow-ash" aria-hidden="true" />}
      <div className="hollow-state" aria-live="polite">STATE: {phase.toUpperCase()} · RUNS {stats.alive + stats.dead}</div>
    </InteractiveMap>
  </>
}
