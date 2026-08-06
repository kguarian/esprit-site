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
  const [open, setOpen] = React.useState(false)
  return (
    <Layout title="Avery — Schrödinger's Cat">
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontStyle: 'italic' }}>Tap the box to observe — alive or ...?</p>
        <div
          onClick={() => setOpen(o => !o)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
          style={{
            display: 'inline-block',
            width: 220, height: 220,
            border: '3px solid #333', borderRadius: 12,
            background: open ? '#fef9c3' : '#334155',
            color: open ? '#333' : '#fff',
            cursor: 'pointer', userSelect: 'none',
            position: 'relative', overflow: 'hidden',
            transition: 'background 0.4s',
          }}
        >
          {!open ? (
            <div style={{ fontSize: 72, lineHeight: '200px' }}>📦</div>
          ) : (
            <div style={{ paddingTop: 20 }}>
              <div style={{ fontSize: 80, animation: 'bounce 0.6s infinite alternate' }}>🐱</div>
              <div style={{ fontSize: 14 }}>alive! (and a bit smug)</div>
            </div>
          )}
          <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, fontSize: 11, opacity: 0.7 }}>
            {open ? 'observed ✓ — click to close' : 'unobserved — click to peek'}
          </div>
        </div>
        <p style={{ marginTop: 12, fontSize: 13, opacity: 0.6 }}>
          Standalone animation — no external assets, pure React + CSS.
        </p>
      </div>
      <style>{`@keyframes bounce { from{transform: translateY(0)} to{transform: translateY(-10px)} }`}</style>
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
