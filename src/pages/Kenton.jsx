import React from 'react'
import { Layout } from '../components/Layout.jsx'

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

export function Kenton() {
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
