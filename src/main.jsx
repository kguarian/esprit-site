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
  const petals = 9
  const [picked, setPicked] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const lovesMe = picked % 2 === 1 // odd = loves me
  const remaining = petals - picked
  const phrase = picked === 0 ? 'pick a petal…' : picked < petals ? (lovesMe ? 'she loves me ♡' : 'she loves me not…') : (lovesMe ? 'she loves me! ♡' : 'she loves me not…')
  function pick(i) {
    if (done || i < picked) return
    const n = picked + 1
    setPicked(n)
    if (n >= petals) setDone(true)
  }
  function reset() { setPicked(0); setDone(false) }
  return (
    <Layout title="Avery — She loves me, she loves me not">
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontStyle: 'italic', minHeight: '1.5em', fontSize: 18, transition: 'all 0.3s' }}>{phrase}</p>
        <div style={{ position: 'relative', width: 220, height: 220, margin: '0 auto' }}>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 54, opacity: done ? 1 : 0.15, transition: 'opacity 0.5s'
          }}>{lovesMe ? '🐱💖' : '🐱🥀'}</div>
          <svg width={220} height={220} viewBox="0 0 200 200" style={{ position: 'relative' }}>
            <circle cx={100} cy={100} r={18} fill="#facc15" stroke="#a16207" strokeWidth={2} />
            {Array.from({ length: petals }).map((_, i) => {
              const angle = (i / petals) * 360 - 90
              const isPicked = i < picked
              const isNext = i === picked
              return (
                <g key={i} onClick={() => pick(i)} style={{ cursor: isPicked ? 'default' : 'pointer' }}
                   role="button" tabIndex={isPicked ? -1 : 0}
                   onKeyDown={e => e.key === 'Enter' && pick(i)}>
                  <ellipse
                    cx={100 + Math.cos(angle * Math.PI / 180) * 55}
                    cy={100 + Math.sin(angle * Math.PI / 180) * 55}
                    rx={22} ry={36} fill={isPicked ? '#e5e7eb' : isNext ? '#f472b6' : '#f9a8d4'}
                    stroke="#be185d" strokeWidth={isNext ? 2.5 : 1.2}
                    opacity={isPicked ? 0.25 : 1}
                    transform={`rotate(${angle + 90} ${100 + Math.cos(angle * Math.PI / 180) * 55} ${100 + Math.sin(angle * Math.PI / 180) * 55})`}
                    style={{ transition: 'all 0.35s', filter: isPicked ? 'grayscale(0.8)' : isNext ? 'drop-shadow(0 0 6px #f472b6)' : '' }}
                  />
                  {isPicked && (
                    <text x={100 + Math.cos(angle * Math.PI / 180) * 55} y={100 + Math.sin(angle * Math.PI / 180) * 55}
                      textAnchor="middle" dominantBaseline="middle" fontSize={10} fill="#9ca3af">✕</text>
                  )}
                </g>
              )
            })}
          </svg>
          {remaining > 0 && !done && <div style={{ fontSize: 11, opacity: 0.6 }}>{remaining} petals left — click the highlighted one</div>}
        </div>
        {done && (
          <div style={{ marginTop: 14, animation: 'pop 0.4s ease' }}>
            <div style={{ fontSize: 28 }}>{lovesMe ? 'She loves me ♡' : 'She loves me not…'}</div>
            <div style={{ fontSize: 13, opacity: 0.7 }}>{lovesMe ? 'Schrödinger would approve. The cat is definitely alive.' : 'Try again? The universe is probabilistic.'}</div>
            <button onClick={reset} style={{ marginTop: 10, padding: '6px 14px', borderRadius: 20, border: '1px solid #333', background: '#fff', cursor: 'pointer' }}>↺ new daisy</button>
          </div>
        )}
        {!done && picked > 0 && <button onClick={reset} style={{ marginTop: 10, fontSize: 12, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer', opacity: 0.6 }}>reset</button>}
      </div>
      <style>{`@keyframes pop { from{transform:scale(0.8);opacity:0} to{transform:scale(1);opacity:1} }`}</style>
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
