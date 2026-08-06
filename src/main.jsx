import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './styles.css'

function Layout({ title, children }) {
  return (
    <div className="page">
      <header>
        <h1>🎉 Happy 25th Birthday 🎉</h1>
        <p>Personal site scaffold for a data analyst.</p>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/kenton">Kenton</Link>
        <Link to="/avery">Avery</Link>
        <Link to="/ml">ML</Link>
        <Link to="/code">Code</Link>
        <Link to="/links">Links</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/more">More</Link>
      </nav>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </div>
  )
}

function Home() {
  return (
    <Layout title="Home">
      <p>Welcome. This is the starter React scaffold.</p>
    </Layout>
  )
}

function Kenton() {
  return (
    <Layout title="Kenton — Work">
      <p>Projects and work index — curated list of builds, research, and shipped work.</p>
      <ul>
        <li><strong>Signal research</strong> — data · modeling · evaluation</li>
        <li><strong>Software</strong> — tools and internal systems</li>
        <li><strong>Writing</strong> — notes and longer-form work</li>
      </ul>
    </Layout>
  )
}

function Avery() {
  const [state, setState] = React.useState('superposed') // superposed | measuring | collapsed
  const [outcome, setOutcome] = React.useState(null) // alive | dead
  const [stats, setStats] = React.useState({ alive: 0, dead: 0 })
  const total = stats.alive + stats.dead
  function measure() {
    if (state !== 'superposed') return
    setState('measuring')
    setTimeout(() => {
      const alive = Math.random() < 0.5
      setOutcome(alive ? 'alive' : 'dead')
      setState('collapsed')
      setStats(s => ({ alive: s.alive + (alive ? 1 : 0), dead: s.dead + (alive ? 0 : 1) }))
    }, 900)
  }
  function reset() { setState('superposed'); setOutcome(null) }
  return (
    <Layout title="Avery — Schrödinger's Cat Lab">
      <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
        <p style={{ fontStyle: 'italic', opacity: 0.7, fontSize: 13 }}>
          A sealed box, a decaying atom, a cat. Until you measure, both outcomes exist in superposition.
          <br /><code style={{ fontSize: 11 }}>|ψ⟩ = (|alive⟩ + |dead⟩)/√2</code>
        </p>

        <div
          onClick={measure}
          role="button" tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && measure()}
          style={{
            margin: '1rem auto', width: 260, height: 220, borderRadius: 16, border: '3px solid #1f2937',
            background: state === 'superposed' ? 'linear-gradient(135deg,#1f2937 0%,#334155 100%)' : state === 'measuring' ? '#fef9c3' : outcome === 'alive' ? '#ecfdf5' : '#fef2f2',
            color: state === 'superposed' ? '#fff' : '#111', cursor: state === 'superposed' ? 'pointer' : 'default',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden', transition: 'background 0.4s', userSelect: 'none'
          }}
        >
          {state === 'superposed' && (
            <>
              <div style={{ fontSize: 56, animation: 'flicker 0.35s infinite alternate' }}>📦</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>BOX CLOSED — superposed</div>
              <div style={{ fontSize: 22, letterSpacing: 4, opacity: 0.9 }}>🐱 = 😺/💀 ?</div>
              <div style={{ position: 'absolute', bottom: 8, fontSize: 11, opacity: 0.6 }}>click to measure → collapse wavefunction</div>
            </>
          )}
          {state === 'measuring' && (
            <>
              <div style={{ fontSize: 40, animation: 'spin 0.5s linear infinite' }}>⚛️</div>
              <div style={{ fontSize: 13 }}>measuring…</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>Geiger click · poison vial · decoherence</div>
            </>
          )}
          {state === 'collapsed' && outcome === 'alive' && (
            <>
              <div style={{ fontSize: 72, animation: 'pop 0.4s ease' }}>😸</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#065f46' }}>ALIVE ✓</div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>atom did not decay — vial intact</div>
            </>
          )}
          {state === 'collapsed' && outcome === 'dead' && (
            <>
              <div style={{ fontSize: 72 }}>💀</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#991b1b' }}>DEAD ✕</div>
              <div style={{ fontSize: 11, opacity: 0.7 }}>atom decayed — vial released</div>
            </>
          )}
        </div>

        <div style={{ fontSize: 13, minHeight: '1.4em' }}>
          {state === 'superposed' && <span>Both outcomes possible — <strong>P(alive)=P(dead)=50%</strong> until observation.</span>}
          {state === 'measuring' && <span style={{ opacity: 0.7 }}>Collapsing…</span>}
          {state === 'collapsed' && <span>Result: <strong>{outcome}</strong> — wavefunction collapsed. Run again — truly random (Math.random()).</span>}
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center' }}>
          {state === 'collapsed' ? (
            <button onClick={reset} style={{ padding: '8px 16px', borderRadius: 20, border: '2px solid #1f2937', background: '#fff', cursor: 'pointer', fontWeight: 600 }}>↺ New experiment</button>
          ) : (
            <button onClick={measure} disabled={state !== 'superposed'} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', background: state === 'superposed' ? '#1f2937' : '#9ca3af', color: '#fff', cursor: state === 'superposed' ? 'pointer' : 'default', fontWeight: 600 }}>
              {state === 'measuring' ? 'Measuring…' : 'Measure (open box)'}
            </button>
          )}
          {total > 0 && <button onClick={() => setStats({ alive: 0, dead: 0 })} style={{ padding: '8px 12px', borderRadius: 20, border: '1px solid #d1d5db', background: '#fff', cursor: 'pointer', fontSize: 12 }}>Reset stats</button>}
        </div>

        {total > 0 && (
          <div style={{ marginTop: 16, fontSize: 12, textAlign: 'left', maxWidth: 360, marginLeft: 'auto', marginRight: 'auto', background: '#f9fafb', borderRadius: 10, padding: '10px 14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}><span>Trials: {total}</span><span>Alive {stats.alive} · Dead {stats.dead}</span></div>
            <div style={{ display: 'flex', gap: 4, marginTop: 6, height: 12, borderRadius: 6, overflow: 'hidden', background: '#e5e7eb' }}>
              <div style={{ width: `${total ? (stats.alive / total) * 100 : 50}%`, background: '#10b981', transition: 'width 0.4s' }} />
              <div style={{ flex: 1, background: '#ef4444', transition: 'width 0.4s' }} />
            </div>
            <div style={{ marginTop: 4, opacity: 0.6, fontSize: 11 }}>Expect ~50/50 — law of large numbers. Each collapse is independent.</div>
          </div>
        )}
      </div>
      <style>{`@keyframes flicker{from{opacity:0.9;transform:scale(1)}to{opacity:1;transform:scale(1.02)}} @keyframes spin{to{transform:rotate(360deg)}} @keyframes pop{from{transform:scale(0.7)}to{transform:scale(1)}}`}</style>
    </Layout>
  )
}

function ML() {
  return (
    <Layout title="ML — Algo Trading & Machine Learning">
      <p>Distinct from <Link to="/code">Code</Link> — focused on models that trade.</p>
      <ul>
        <li><strong>Algo trading</strong> — strategies, backtests, execution, risk</li>
        <li><strong>ML research</strong> — features, labeling, validation, regimes</li>
        <li><strong>Infra</strong> — data pipelines, evaluation harnesses</li>
      </ul>
      <p style={{ fontSize: 13, opacity: 0.7 }}>Coming soon — papers, notebooks, and live results.</p>
    </Layout>
  )
}

function Contact() {
  return (
    <Layout title="Contact">
      <p>Contact page scaffold.</p>
    </Layout>
  )
}

function Links() {
  return (
    <Layout title="Links">
      <p>Links page scaffold.</p>
    </Layout>
  )
}

function Code() {
  return (
    <Layout title="Code">
      <p>Code/projects page scaffold.</p>
    </Layout>
  )
}

function More() {
  return (
    <Layout title="More">
      <p>Extra page scaffold.</p>
    </Layout>
  )
}

function NotFound() {
  return (
    <Layout title="Not Found">
      <p>That page does not exist.</p>
    </Layout>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kenton" element={<Kenton />} />
        <Route path="/avery" element={<Avery />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
        <Route path="/code" element={<Code />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
