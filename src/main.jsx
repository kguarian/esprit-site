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

function OneOverF() {
  const [exp, setExp] = React.useState(1.4)
  const [amp, setAmp] = React.useState(1)
  const peaks = [{f:8, w:1.5, h:1.8}, {f:22, w:2, h:0.9}]
  return (
    <div style={{ height:320, position:'relative', background:'#020617', overflow:'hidden' }}>
      <svg viewBox="0 0 400 200" style={{ width:'100%', height:'100%', display:'block' }}>
        <rect width={400} height={200} fill="#020617" />
        <text x={12} y={18} fill="#22d3ee" fontSize={8} className="mono">PSD(f) = A / f^χ · x·y + Σ peaks</text>
        <text x={12} y={192} fill="#64748b" fontSize={6} className="mono">f (Hz) log — 1 ─── 10 ─── 100</text>
        {/* 1/f aperiodic */}
        <path d={`M ${Array.from({length:80}, (_,i)=>{ const f=1+ (99*i/79); const x=30+ Math.log10(f)/2*340; const y=170 - (60*amp / Math.pow(f,exp) * 40) - (peaks.reduce((s,p)=> s + p.h*Math.exp(-Math.pow(Math.log10(f)-Math.log10(p.f),2)/(2*Math.pow(p.w/10,2))),0)*30); return `${i===0?'M':'L'} ${x.toFixed(1)} ${y.toFixed(1)}`}).join(' ')}`} fill="none" stroke="#f472b6" strokeWidth={1.6} opacity={0.95} />
        <path d={`M ${Array.from({length:80}, (_,i)=>{ const f=1+ (99*i/79); const x=30+ Math.log10(f)/2*340; const y=170 - (60*amp / Math.pow(f,exp) * 40); return `${i===0?'M':'L'} ${x.toFixed(1)} ${y.toFixed(1)}`}).join(' ')}`} fill="none" stroke="#22d3ee" strokeWidth={1} opacity={0.35} strokeDasharray="4 4" />
        {peaks.map((p,i)=>{ const x=30+ Math.log10(p.f)/2*340; return <g key={i}><line x1={x} y1={40} x2={x} y2={170} stroke="rgba(99,102,241,0.18)" strokeWidth={1} /><text x={x} y={36} textAnchor="middle" fill="#a78bfa" fontSize={6} className="mono">{p.f}Hz</text></g>})}
        <text x={320} y={28} fill="#f472b6" fontSize={7} className="mono">χ={exp.toFixed(2)}</text>
        <text x={320} y={38} fill="#22d3ee" fontSize={7} className="mono">A·x·y={amp.toFixed(2)}</text>
      </svg>
      <div style={{ position:'absolute', bottom:42, left:12, right:12, display:'flex', gap:12, alignItems:'center' }}>
        <label className="mono" style={{ fontSize:10, color:'#e2e8f0', display:'flex', gap:6, alignItems:'center' }}>χ <input type="range" min={0.5} max={2.5} step={0.05} value={exp} onChange={e=>setExp(parseFloat(e.target.value))} style={{ width:90 }} /></label>
        <label className="mono" style={{ fontSize:10, color:'#e2e8f0', display:'flex', gap:6, alignItems:'center' }}>A <input type="range" min={0.4} max={1.8} step={0.05} value={amp} onChange={e=>setAmp(parseFloat(e.target.value))} style={{ width:90 }} /></label>
        <span className="mono" style={{ fontSize:9, color:'#94a3b8', marginLeft:'auto' }}>x·y = lateral · anterior — aperiodic × space</span>
      </div>
    </div>
  )
}

function Home() { return <Layout title="Home"><p>Welcome. This is the starter React scaffold.</p></Layout> }
function Kenton() {
  return (
    <Layout title="">
      <style>{`
        .kenton-wrap{margin:0 -24px; padding:0; background:#f8fafc}
        .kenton-hero{position:relative; overflow:hidden; background:
          radial-gradient(900px 520px at 12% 0%, rgba(99,102,241,0.16), transparent 62%),
          radial-gradient(760px 520px at 96% 18%, rgba(14,165,233,0.14), transparent 62%),
          linear-gradient(180deg,#ffffff 0%, #f1f5f9 100%); border-bottom:1px solid #e2e8f0}
        .kenton-shell{max-width:1180px; margin:0 auto; padding:32px 24px 0; position:relative}
        .kenton-grid{max-width:1180px; margin:0 auto; padding:20px 24px 32px; display:grid; grid-template-columns: 1.15fr 0.85fr; gap:18px}
        .kglass{-webkit-backdrop-filter:blur(14px) saturate(1.2); backdrop-filter:blur(14px) saturate(1.2); background:rgba(255,255,255,0.94); border:1px solid rgba(15,23,42,0.07); box-shadow:0 8px 28px rgba(15,23,42,0.07)}
        .mono{font-family:'JetBrains Mono',ui-monospace,monospace}
        @media(max-width:900px){ .kenton-grid{grid-template-columns:1fr} }
      `}</style>
      <div className="kenton-wrap">
        <div className="kenton-hero">
          <div className="kenton-shell">
            <div style={{ display:'grid', gridTemplateColumns:'1.15fr 0.85fr', gap:28, alignItems:'center', padding:'8px 0 28px' }}>
              <div>
                <div className="mono" style={{ fontSize:11, letterSpacing:3, color:'#6366f1', fontWeight:700 }}>KENTON GUARIAN — SAN DIEGO · UCSD MATH-CS</div>
                <div style={{ fontSize:'clamp(30px,3.6vw,42px)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:1.05, marginTop:8, color:'#0f172a' }}>
                  Data · software ·<br /><span style={{ background:'linear-gradient(90deg,#6366f1,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>signal research.</span>
                </div>
                <p style={{ fontSize:15, color:'#475569', lineHeight:1.65, marginTop:14, maxWidth:560 }}>
                  Mathematics-Computer Science, UC San Diego (Dec 2023) — Voytek Lab alum, Machine Learning Engineer in Cognitive Science. Built deep nets for brain signals at <strong>98% accuracy</strong>, patent-pending heart-signal parametrization (<strong>1000× faster</strong>), and secure data platforms that lifted research efficiency 30%. Published: <em>Sleep breathing patterns and neurocognitive function in a diverse Hispanic/Latino cohort</em> — <em>Alzheimer's & Dementia</em> (2023) <a href="https://doi.org/10.1002/alz.074342" target="_blank" rel="noreferrer" style={{color:"#6366f1"}}>doi:10.1002/alz.074342 ↗</a>.
                </p>
                <div style={{ display:'flex', gap:10, marginTop:16, flexWrap:'wrap' }}>
                  <a href="mailto:Kenton.Guarian@gmail.com" className="mono" style={{ padding:'11px 16px', borderRadius:999, textDecoration:'none', fontWeight:700, fontSize:13, background:'#0f172a', color:'#fff' }}>Kenton.Guarian@gmail.com</a>
                  <a href="https://www.linkedin.com/in/kguarian/" target="_blank" rel="noreferrer" className="mono" style={{ fontSize:11, alignSelf:'center', color:'#0a66c2', background:'#fff', border:'1px solid #e2e8f0', padding:'6px 10px', borderRadius:999, textDecoration:'none' }}>in · kguarian ↗</a>
                  <a href="https://github.com/kguarian" target="_blank" rel="noreferrer" className="mono" style={{ fontSize:11, alignSelf:'center', color:'#0f172a', background:'#fff', border:'1px solid #e2e8f0', padding:'6px 10px', borderRadius:999, textDecoration:'none' }}>GitHub · 34 repos ↗</a>
                  <a href="https://voyteklab.com/members" target="_blank" rel="noreferrer" className="mono" style={{ fontSize:11, alignSelf:'center', color:'#6366f1' }}>Voytek Lab ↗</a>
                </div>
              </div>
              <div style={{ position:'relative' }}>
                <div className="kglass" style={{ borderRadius:20, overflow:'hidden', position:'relative', background:'#0f172a' }}>
                  <OneOverF />
                  <div style={{ position:'absolute', bottom:10, left:10, right:10, display:'flex', gap:8, flexWrap:'wrap' }}>
                    <span className="kglass mono" style={{ fontSize:10, padding:'6px 10px', borderRadius:999 }}>NEURAL OSCILLATIONS</span>
                    <span className="kglass mono" style={{ fontSize:10, padding:'6px 10px', borderRadius:999 }}>1/f · aperiodic</span>
                  </div>
                </div>
                <div className="kglass" style={{ position:'absolute', bottom:-16, left:-8, borderRadius:14, padding:'10px 12px', display:'flex', gap:10, alignItems:'center', maxWidth:280 }}>
                  <div style={{ width:54, height:54, borderRadius:10, background:'linear-gradient(135deg,#6366f1,#06b6d4)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12 }}>UCSD</div>
                  <div><div style={{ fontWeight:700, fontSize:13 }}>UC San Diego</div><div className="mono" style={{ fontSize:10, color:'#64748b' }}>B.S. Math-CS · Provost Honors · PATHS/Golden Pyramid</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="kenton-grid">
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div className="kglass" style={{ borderRadius:16, padding:16 }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:2, color:'#6366f1' }}>EXPERIENCE</div>
              <div style={{ marginTop:12, borderLeft:'2px solid #e2e8f0', paddingLeft:14, display:'flex', flexDirection:'column', gap:14 }}>
                <div>
                  <div style={{ fontWeight:700 }}>Machine Learning Engineer — UC San Diego, CogSci (Voytek Lab)</div>
                  <div className="mono" style={{ fontSize:11, color:'#64748b' }}>Mar 2021 – Present · La Jolla</div>
                  <ul style={{ margin:'6px 0 0', paddingLeft:16, fontSize:13, color:'#334155', lineHeight:1.6 }}>
                    <li>Deep net for brain signals — <strong>98% accuracy</strong>, new benchmark</li>
                    <li>Patent-pending heart-signal parametrization — <strong>1000×</strong> speedup</li>
                    <li>Secure data collection platform — +30% research efficiency</li>
                    <li><em>Alzheimer's & Dementia</em> 2023 — Sleep breathing patterns (co-author) — <a href="https://doi.org/10.1002/alz.074342" target="_blank" rel="noreferrer" style={{color:"#6366f1"}}>doi:10.1002/alz.074342</a></li>
                  </ul>
                </div>
                <div>
                  <div style={{ fontWeight:700 }}>Software Engineer — Mechanical Music Digest</div>
                  <div className="mono" style={{ fontSize:11, color:'#64748b' }}>Oct 2020 – Mar 2021 · San Diego</div>
                  <ul style={{ margin:'6px 0 0', paddingLeft:16, fontSize:13, color:'#334155', lineHeight:1.6 }}>
                    <li>AI behavioral monitoring, automated compliance, newsletter distribution, VirtualDJ extensions</li>
                  </ul>
                </div>
                <div>
                  <div style={{ fontWeight:700 }}>Front-End Developer — UC San Diego, CSE</div>
                  <div className="mono" style={{ fontSize:11, color:'#64748b' }}>Jun – Sep 2021</div>
                  <ul style={{ margin:'6px 0 0', paddingLeft:16, fontSize:13, color:'#334155' }}><li>Serverless code execution — zero-infra, instant scale</li></ul>
                </div>
              </div>
            </div>
            <div className="kglass" style={{ borderRadius:16, padding:16 }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:2, color:'#6366f1' }}>TECHNICAL SKILLS</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:10 }}>
                {['Python','SQL','JavaScript','Go','Java','C++','PyTorch','NumPy','Pandas','Scikit-Learn','Jupyter','DNNs','DSP','Systems Programming','API Design'].map(s=>(
                  <span key={s} className="mono" style={{ fontSize:11, padding:'6px 10px', borderRadius:999, background:'#f1f5f9', border:'1px solid #e2e8f0' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div className="kglass" style={{ borderRadius:16, overflow:'hidden' }}>
              <div style={{ width:'100%', height:36, background:'linear-gradient(90deg,#f1f5f9,#e0e7ff)' }} />
              <div style={{ padding:14 }}>
                <div style={{ fontWeight:700 }}>Selected Projects</div>
                <ul style={{ margin:'6px 0 0', paddingLeft:16, fontSize:13, color:'#475569', lineHeight:1.6 }}>
                  <li>Brain Monitoring — ML predicts mental exercise</li>
                  <li>CS Education — browser code execution platform</li>
                  <li>Optimized Stock Portfolio — linear algebra</li>
                  <li>Music Analytics — listening records & analytics</li>
                </ul>
              </div>
            </div>
            <div className="kglass" style={{ borderRadius:16, overflow:'hidden' }}>
              <div style={{ width:'100%', height:36, background:'linear-gradient(90deg,#ecfeff,#f0f9ff)' }} />
              <div style={{ padding:12 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>San Diego · La Jolla</div>
                <div style={{ fontSize:12, color:'#64748b' }}>UC San Diego Math-CS — Data Science, Neural Data Science, Stats, Algorithms</div>
                <div style={{ marginTop:8, display:'flex', gap:8 }}>
                  <a href="/ml" style={{ fontSize:12, fontWeight:700, color:'#6366f1', textDecoration:'none' }}>ML →</a>
                  <a href="/code" style={{ fontSize:12, color:'#475569', textDecoration:'none' }}>Code →</a>
                  <a href="https://doi.org/10.1002/alz.074342" target="_blank" rel="noreferrer" style={{ fontSize:11, color:'#94a3b8' }}>Alzheimer's & Dementia (2023) ↗</a>
                </div>
              </div>
            </div>
            <div className="kglass mono" style={{ borderRadius:16, padding:12, fontSize:11, color:'#64748b', display:'flex', gap:8, flexWrap:'wrap' }}>
              <span>📄 Resumes in repo root</span><span>·</span><span>Highly recommended by Prof. Brad Voytek (voytek@ucsd.edu)</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Avery() {
  const [phase, setPhase] = React.useState('ready') // ready | arming | superposed | measuring | alive | dead
  const [halfLife] = React.useState(1) // s, for display
  const [stats, setStats] = React.useState({ alive: 0, dead: 0 })
  const [pulse, setPulse] = React.useState(0)
  const total = stats.alive + stats.dead
  const waveRef = React.useRef(null)

  // arming animation then superposed
  function arm() {
    if (phase !== 'ready') return
    setPhase('arming')
    setTimeout(() => setPhase('superposed'), 1200)
  }
  function measure() {
    if (phase !== 'superposed') return
    setPhase('measuring')
    let ticks = 0
    const id = setInterval(() => { setPulse(p => p + 1); ticks++; if (ticks > 6) clearInterval(id) }, 120)
    setTimeout(() => {
      const alive = Math.random() < 0.5
      setPhase(alive ? 'alive' : 'dead')
      setStats(s => ({ alive: s.alive + (alive ? 1 : 0), dead: s.dead + (alive ? 0 : 1) }))
    }, 1100)
  }
  function reset() { setPhase('ready'); setPulse(0) }

  return (
    <Layout title="">
      <style>{`
        .avery-root{font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',system-ui,sans-serif; color:#e2e8f0; margin:0; padding:28px 0 32px; overflow:hidden; border-radius:0; background:#020617; position:relative; font-size:16px; line-height:1.55; min-height: calc(100vh - 140px)}
        .avery-bg{position:absolute; top:0; left:0; right:0; bottom:0; background:
          radial-gradient(700px 420px at 18% 8%, rgba(236,72,153,0.30), transparent 62%),
          radial-gradient(720px 480px at 88% 92%, rgba(6,182,212,0.24), transparent 62%),
          radial-gradient(560px 520px at 52% 48%, rgba(139,92,246,0.16), transparent 72%),
          linear-gradient(180deg,#020617 0%, #0b1220 100%); z-index:0}
        .avery-grid{position:absolute; top:0; left:0; right:0; bottom:0; opacity:0.06; background-image: linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px); background-size:36px 36px; z-index:0}
        .glass{-webkit-backdrop-filter:blur(18px) saturate(1.35); backdrop-filter:blur(18px) saturate(1.35); background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.10); box-shadow: 0 10px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)}
        @supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) { .glass{ background:rgba(15,23,42,0.88) } }
        .neon{box-shadow: 0 0 14px rgba(236,72,153,0.55), 0 0 36px rgba(6,182,212,0.32), inset 0 0 14px rgba(255,255,255,0.06)}
        .mono{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace; letter-spacing:0.02em}
        .burn{position:absolute; top:0; left:0; right:0; bottom:0; pointer-events:none; z-index:5; background: radial-gradient(600px 400px at 50% 100%, rgba(239,68,68,0.9), transparent 70%), linear-gradient(180deg, transparent 40%, rgba(239,68,68,0.35) 100%); animation: burnIn 0.6s ease}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes wave{0%{stroke-dashoffset:0}100%{stroke-dashoffset:40}}
        @keyframes glowPulse{0%{filter:drop-shadow(0 0 6px #ec4899)}50%{filter:drop-shadow(0 0 16px #06b6d4)}100%{filter:drop-shadow(0 0 6px #ec4899)}}
        @keyframes decayFlash{0%{opacity:0}15%{opacity:1}30%{opacity:0}100%{opacity:0}}
        @keyframes burnIn{from{opacity:0}to{opacity:1}}
        @keyframes flickerWorld{0%,100%{opacity:0.9}50%{opacity:1}}
        .avery-shell{max-width:1280px; margin:0 auto; position:relative; z-index:2; padding:0 20px}
        .avery-main{display:grid; grid-template-columns: 1.45fr 0.9fr; gap:20px; padding:20px 0 0}
        .avery-title{font-size: clamp(22px, 2.6vw, 30px); font-weight:800; letter-spacing:-0.04em; line-height:1.05}
        .avery-btn{min-height:44px; padding:0 18px; border-radius:999px; font-weight:700; font-size:13.5px; cursor:pointer; transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s; display:inline-flex; align-items:center; gap:8px}
        .avery-btn:active{transform:scale(0.98)}
        .avery-btn-primary{color:#fff; background:linear-gradient(90deg,#ec4899,#7c3aed); border:none; box-shadow: 0 6px 20px rgba(236,72,153,0.45)}
        .avery-btn-primary:hover{box-shadow: 0 8px 28px rgba(236,72,153,0.6), 0 0 0 3px rgba(236,72,153,0.18)}
        .avery-btn-ghost{color:#e2e8f0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12)}
        .avery-btn-ghost:hover{background:rgba(255,255,255,0.10)}
        @media (max-width: 960px){ .avery-main{grid-template-columns:1fr} .avery-shell{max-width:720px} }
        @media (max-width: 640px){ .avery-root{border-radius:12px; margin:-0.75rem -0.75rem 0} .avery-title{font-size:22px} }
      `}</style>
      <div className="avery-root">
        <div className="avery-bg" /><div className="avery-grid" />{phase==='dead' && <div className="burn" />}
        <div className="avery-shell">
        {/* header */}
        <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 3, opacity: 0.7, color: '#22d3ee' }}>AVERY LAB // SCHRÖDINGER PROTOCOL</div>
            <div className="avery-title" style={{ background: 'linear-gradient(90deg,#f472b6,#22d3ee,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Cat Experiment</div>
            <div style={{ fontSize: 12, opacity: 0.75 }}>Physically accurate · sealed box · single ²¹⁰Po atom · Geiger + hammer + HCN vial · unitary evolution until measurement</div>
          </div>
          <div className="glass" style={{ borderRadius: 12, padding: '10px 14px', minWidth: 160 }}>
            <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>STATE VECTOR</div>
            <div className="mono" style={{ fontSize: 13 }}>
              |ψ⟩ = <span style={{ color: phase === 'alive' ? '#10b981' : phase === 'dead' ? '#ef4444' : '#f472b6' }}>
                {phase === 'alive' ? '1|alive⟩' : phase === 'dead' ? '1|dead⟩' : phase === 'superposed' || phase === 'measuring' ? '(|alive⟩+|dead⟩)/√2' : '—'}
              </span>
            </div>
            <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>P(alive)=P(dead)=50% · t½={halfLife}s · HFS</div>
          </div>
        </div>

        {/* main lab */}
        <div className="avery-main">
          {/* left: apparatus */}
          <div className="glass neon" style={{ borderRadius: 16, padding: 14, position: 'relative', overflow: 'hidden' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7, marginBottom: 8 }}>APPARATUS — CROSS SECTION</div>

            {/* SVG apparatus */}
            <div style={{ background: 'rgba(0,0,0,0.35)', borderRadius: 12, padding: 8, border: '1px solid rgba(255,255,255,0.08)' }}>
              <svg viewBox="0 0 640 360" width="100%" style={{ display: 'block', maxHeight: 360 }}>
                {/* lead box enclosure */}
                <rect x={12} y={12} width={616} height={336} rx={18} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.2} />
                <text x={22} y={28} fill="#94a3b8" fontSize={8} className="mono">LEAD SHIELD · 5cm · THERMALLY ISOLATED</text>

                {/* atom chamber */}
                <g>
                  <rect x={28} y={48} width={160} height={120} rx={12} fill="rgba(139,92,246,0.12)" stroke="#a78bfa" strokeWidth={1.2} />
                  <text x={36} y={64} fill="#c4b5fd" fontSize={9} className="mono">ATOM CHAMBER</text>
                  <text x={36} y={76} fill="#c4b5fd" fontSize={7} className="mono">single ²¹⁰Po · α-decay · t½=1s</text>
                  {/* nucleus */}
                  <circle cx={108} cy={112} r={18} fill="#7c3aed" stroke="#ddd6fe" strokeWidth={1} opacity={phase==='superposed' ? 0.95 : 0.7} style={{ animation: phase==='superposed' ? 'glowPulse 1.2s infinite' : '' }} />
                  <circle cx={108} cy={112} r={4} fill="#fde68a" />
                  {/* orbitals */}
                  <ellipse cx={108} cy={112} rx={38} ry={18} fill="none" stroke="#22d3ee" strokeWidth={0.9} opacity={0.5} />
                  <ellipse cx={108} cy={112} rx={18} ry={38} fill="none" stroke="#ec4899" strokeWidth={0.9} opacity={0.5} />
                  <circle cx={108+38} cy={112} r={3} fill="#22d3ee" style={{ animation: phase!=='ready' ? 'spin 1s linear infinite' : '' }} />
                  {/* wave */}
                  <path d="M 28 148 Q 60 132 92 148 T 156 148 T 188 148" fill="none" stroke="#f472b6" strokeWidth={1.2} strokeDasharray="6 4" style={{ animation: 'wave 1s linear infinite', opacity: phase==='superposed' ? 1 : 0.25 }} />
                  {/* decay indicator */}
                  {(phase==='alive' || phase==='dead') && <text x={108} y={134} textAnchor="middle" fill={phase==='dead' ? '#f87171' : '#34d399'} fontSize={7} className="mono">{phase==='dead' ? 'DECAYED → α' : 'NOT DECAYED'}</text>}
                </g>

                {/* Geiger tube */}
                <g>
                  <rect x={200} y={78} width={110} height={52} rx={10} fill="rgba(6,182,212,0.14)" stroke="#22d3ee" strokeWidth={1.2} />
                  <text x={208} y={94} fill="#67e8f9" fontSize={8} className="mono">GEIGER-MÜLLER</text>
                  <rect x={214} y={102} width={82} height={10} rx={5} fill={phase==='measuring' || phase==='dead' ? '#22d3ee' : '#334155'} />
                  <rect x={214} y={102} width={(phase==='measuring' ? (pulse%4)*20+10 : phase==='dead' ? 82 : 8)} height={10} rx={5} fill="#f472b6" style={{ transition: 'width 0.15s' }} />
                  <circle cx={304} cy={107} r={4} fill={phase==='measuring' ? '#fde68a' : '#64748b'} style={{ animation: phase==='measuring' ? 'decayFlash 0.25s infinite' : '' }} />
                  <text x={208} y={124} fill="#94a3b8" fontSize={6} className="mono">Ar + HV · avalanche</text>
                  {/* wire */}
                  <path d="M188 112 H200" stroke="#67e8f9" strokeWidth={1.2} />
                </g>

                {/* relay + hammer */}
                <g>
                  <rect x={328} y={66} width={86} height={74} rx={10} fill="rgba(251,146,60,0.12)" stroke="#fb923c" strokeWidth={1.2} />
                  <text x={336} y={82} fill="#fed7aa" fontSize={8} className="mono">HAMMER RELAY</text>
                  <rect x={348} y={90} width={46} height={28} rx={6} fill={phase==='dead' ? '#fb923c' : '#1f2937'} stroke="#fdba74" />
                  <line x1={371} y1={118} x2={371} y2={148} stroke="#fdba74" strokeWidth={3} strokeLinecap="round" style={{ transform: phase==='dead' ? 'rotate(42deg)' : 'rotate(0deg)', transformOrigin: '371px 118px', transition: 'transform 0.4s' }} />
                  <text x={336} y={134} fill="#94a3b8" fontSize={6} className="mono">{phase==='dead' ? 'TRIGGERED' : 'ARMED'}</text>
                  <path d="M310 107 H328" stroke="#fb923c" strokeWidth={1.2} />
                </g>

                {/* vial */}
                <g>
                  <rect x={434} y={88} width={44} height={56} rx={8} fill={phase==='dead' ? 'rgba(239,68,68,0.28)' : 'rgba(16,185,129,0.14)'} stroke={phase==='dead' ? '#ef4444' : '#10b981'} strokeWidth={1.2} />
                  <text x={438} y={104} fill={phase==='dead' ? '#fecaca' : '#6ee7b7'} fontSize={6} className="mono">HCN</text>
                  <text x={438} y={112} fill={phase==='dead' ? '#fecaca' : '#6ee7b7'} fontSize={6} className="mono">VIAL</text>
                  <path d="M 442 122 Q 456 130 470 122" stroke={phase==='dead' ? '#fecaca' : '#6ee7b7'} strokeWidth={1} fill="none" opacity={phase==='dead' ? 0.9 : 0.4} style={{ strokeDasharray: phase==='dead' ? '0' : '2 3' }} />
                  {phase==='dead' && <text x={456} y={138} textAnchor="middle" fill="#fecaca" fontSize={6} className="mono">SHATTERED</text>}
                  <path d="M414 107 H434" stroke="#fb923c" strokeWidth={1.2} />
                </g>

                {/* cat chamber */}
                <g>
                  <rect x={28} y={190} width={450} height={148} rx={16} fill={phase==='superposed' ? 'rgba(255,255,255,0.04)' : phase==='alive' ? 'rgba(16,185,129,0.10)' : phase==='dead' ? 'rgba(239,68,68,0.10)' : 'rgba(15,23,42,0.5)'} stroke={phase==='alive' ? '#10b981' : phase==='dead' ? '#ef4444' : 'rgba(255,255,255,0.14)'} strokeWidth={1.4} />
                  <text x={36} y={206} fill="#e2e8f0" fontSize={9} className="mono">CAT CHAMBER · SEALED · NO DECOHERENCE UNTIL MEASURED</text>
                  {/* cat */}
                  <text x={248} y={278} textAnchor="middle" fontSize={phase==='superposed' ? 56 : 68} style={{ filter: phase==='superposed' ? 'blur(0.3px) brightness(1.1)' : '', opacity: phase==='superposed' ? 0.92 : 1, transition: 'all 0.4s' }}>
                    {phase==='superposed' ? '🐱' : phase==='alive' ? '😸' : phase==='dead' ? '😵' : '📦'}
                  </text>
                  {phase==='superposed' && (
                    <>
                      <text x={248} y={300} textAnchor="middle" fill="#f472b6" fontSize={8} className="mono">|ψ_cat⟩ = (|alive⟩ + |dead⟩)/√2</text>
                      <g opacity={0.75}>
                        <text x={180} y={250} fill="#22d3ee" fontSize={10}>😺</text>
                        <text x={300} y={250} fill="#f87171" fontSize={10}>💀</text>
                        <path d="M200 255 Q248 235 296 255" fill="none" stroke="url(#grad)" strokeWidth={1.2} strokeDasharray="4 3" />
                      </g>
                    </>
                  )}
                  {phase==='measuring' && <text x={248} y={300} textAnchor="middle" fill="#fde68a" fontSize={9} className="mono">DECOHERING… ENTANGLING WITH APPARATUS</text>}
                  {phase==='alive' && <text x={248} y={302} textAnchor="middle" fill="#6ee7b7" fontSize={9} className="mono">COLLAPSED → |alive⟩ · NO DECAY OBSERVED</text>}
                  {phase==='dead' && <text x={248} y={302} textAnchor="middle" fill="#fecaca" fontSize={9} className="mono">COLLAPSED → |dead⟩ · WORLD BURNS 🔥</text>}
                  {/* coupling */}
                  <path d="M108 168 V190" stroke="#a78bfa" strokeWidth={1} strokeDasharray="5 4" opacity={0.6} />
                  <path d="M456 144 V190" stroke={phase==='dead' ? '#ef4444' : '#10b981'} strokeWidth={1} strokeDasharray="5 4" opacity={0.65} />
                </g>

                {/* right: legend */}
                <g>
                  <rect x={496} y={48} width={132} height={290} rx={12} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
                  <text x={506} y={66} fill="#e2e8f0" fontSize={8} className="mono">PHYSICS</text>
                  <text x={506} y={80} fill="#94a3b8" fontSize={6} className="mono">U(t)=exp(-iHt/ħ) · unitary</text>
                  <text x={506} y={92} fill="#94a3b8" fontSize={6} className="mono">measurement = projection</text>
                  <text x={506} y={108} fill="#f472b6" fontSize={7} className="mono">Born rule: |α|²=|β|²=½</text>
                  <text x={506} y={124} fill="#22d3ee" fontSize={7} className="mono">atom → Geiger entangled</text>
                  <text x={506} y={136} fill="#a78bfa" fontSize={7} className="mono">cat entangled → macro</text>
                  <text x={506} y={152} fill="#fde68a" fontSize={7} className="mono">observer collapses</text>
                  <line x1={506} y1={162} x2={618} y2={162} stroke="rgba(255,255,255,0.08)" />
                  <text x={506} y={176} fill="#94a3b8" fontSize={6} className="mono">TRIAL STATS</text>
                  <text x={506} y={190} fill="#6ee7b7" fontSize={9} className="mono">ALIVE {stats.alive}</text>
                  <text x={566} y={190} fill="#f87171" fontSize={9} className="mono">DEAD {stats.dead}</text>
                  <text x={506} y={204} fill="#cbd5e1" fontSize={7} className="mono">N={total} · expect 50/50</text>
                </g>

                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#f472b6" /></linearGradient>
                </defs>
              </svg>
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              {phase === 'ready' && <button onClick={arm} className="avery-btn avery-btn-primary">⚡ Arm atom — seal box</button>}
              {phase === 'arming' && <span className="mono" style={{ fontSize: 12, padding: '10px 0', color: '#fde68a' }}>Sealing… evacuating decoherence…</span>}
              {phase === 'superposed' && <button onClick={measure} className="avery-btn avery-btn-primary">👁️ Measure — open box</button>}
              {phase === 'measuring' && <span className="mono" style={{ fontSize: 12, padding: '10px 0', color: '#fde68a' }}>Collapsing wavefunction…</span>}
              {(phase === 'alive' || phase === 'dead') && <button onClick={reset} className="avery-btn avery-btn-ghost">↺ New run — re-prepare |ψ⟩</button>}
              {total > 0 && <button onClick={() => setStats({ alive: 0, dead: 0 })} className="avery-btn" style={{ background: 'transparent', color: '#94a3b8', border: '1px solid rgba(148,163,184,0.25)' }}>Reset stats</button>}
            </div>
          </div>

          {/* right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="glass" style={{ borderRadius: 16, padding: 14 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7 }}>WAVEFUNCTION</div>
              <div className="mono" style={{ fontSize: 11, marginTop: 6, lineHeight: 1.6 }}>
                <span style={{ color: '#f472b6' }}>|ψ(t)⟩</span> = α(t)|not decayed⟩|alive⟩ + β(t)|decayed⟩|dead⟩<br />
                <span style={{ opacity: 0.6 }}>α = e<sup>-λt/2</sup>, |α|² = e<sup>-λt</sup>, |β|² = 1-e<sup>-λt</sup></span><br />
                <span style={{ opacity: 0.6 }}>Half-life 1s ⇒ λ=ln2≈0.693 s⁻¹. At t=1s, P=½.</span>
              </div>
              <div style={{ marginTop: 10, height: 54, background: 'rgba(0,0,0,0.35)', borderRadius: 10, padding: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ flex: 1, height: 8, borderRadius: 6, background: '#0f172a', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: `${phase === 'alive' ? 100 : phase === 'dead' ? 0 : 50}%`, background: 'linear-gradient(90deg,#10b981,#22d3ee)', transition: 'width 0.6s' }} />
                  <div style={{ flex: 1, background: 'linear-gradient(90deg,#ef4444,#f472b6)', transition: 'width 0.6s', opacity: phase === 'superposed' ? 0.9 : phase === 'alive' ? 0.15 : phase === 'dead' ? 1 : 0.9 }} />
                </div>
                <div className="mono" style={{ fontSize: 10, minWidth: 64, textAlign: 'right' }}>
                  <span style={{ color: '#34d399' }}>{phase === 'alive' ? '100%' : phase === 'dead' ? '0%' : '50%'}</span>
                  <span style={{ opacity: 0.5 }}> / </span>
                  <span style={{ color: '#f87171' }}>{phase === 'dead' ? '100%' : phase === 'alive' ? '0%' : '50%'}</span>
                </div>
              </div>
              <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
                <span className="mono" style={{ fontSize: 10, padding: '4px 8px', borderRadius: 20, background: 'rgba(16,185,129,0.14)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>alive {stats.alive}</span>
                <span className="mono" style={{ fontSize: 10, padding: '4px 8px', borderRadius: 20, background: 'rgba(239,68,68,0.14)', color: '#fecaca', border: '1px solid rgba(239,68,68,0.3)' }}>dead {stats.dead}</span>
                <span className="mono" style={{ fontSize: 10, padding: '4px 8px', borderRadius: 20, background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>N={total}</span>
              </div>
            </div>

            <div className="glass" style={{ borderRadius: 16, padding: 14 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7 }}>WHAT YOU'RE SEEING</div>
              <ul style={{ margin: '8px 0 0', paddingLeft: 16, fontSize: 12, lineHeight: 1.5, opacity: 0.85 }}>
                <li><strong>Atom chamber:</strong> single ²¹⁰Po nucleus. α-decay is quantum tunneling — truly random, no hidden variable. Orbitals shimmer while superposed.</li>
                <li><strong>Geiger + relay + vial:</strong> decay → avalanche → hammer shatters HCN. Chain is unitary until you look.</li>
                <li><strong>Cat:</strong> entangled with atom. Not “unknown” — <em>undetermined</em>. Measurement projects to |alive⟩ or |dead⟩ with Born probabilities.</li>
                <li><strong>Repeat:</strong> each run re-prepares |ψ⟩. Over many trials, ~50/50. No memory.</li>
              </ul>
            </div>

            <div className="glass" style={{ borderRadius: 16, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>Avery’s lab • punk-rock liquid glass • neon cyber-physics</div>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: phase === 'superposed' ? '#f472b6' : phase === 'alive' ? '#10b981' : phase === 'dead' ? '#ef4444' : '#334155', boxShadow: `0 0 10px ${phase === 'superposed' ? '#ec4899' : phase === 'alive' ? '#10b981' : phase === 'dead' ? '#ef4444' : 'transparent'}`, animation: phase !== 'ready' ? 'glowPulse 1s infinite' : '' }} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

function ML() {
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
function Contact() { return <Layout title="Contact"><p>Contact page scaffold.</p></Layout> }
function Links() { return <Layout title="Links"><p>Links page scaffold.</p></Layout> }
function Code() { return <Layout title="Code"><p>Code/projects page scaffold.</p></Layout> }
function More() { return <Layout title="More"><p>Extra page scaffold.</p></Layout> }
function NotFound() { return <Layout title="Not Found"><p>That page does not exist.</p></Layout> }

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
