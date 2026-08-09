import React from 'react'
export function Home() {
  const PALETTE = { sepia:'#9A8E7A', sepiaDark:'#6B6254', sepiaLight:'#C2B8A3', blueSepia:'#7E8FA3', sea:'#8E9EAC', paper:'#E8E0C8', ink:'#0A0A0B' }
  const WORLD = { w: 2400, h: 1600 }
  const LOCS = [
    { id:'kenton', label:'CABIN', sub:'KENTON', href:'/kenton', x:420, y:520, w:148, h:112, lore:'Where Kenton keeps the signal logs. The heater still ticks.' },
    { id:'store', label:'STORE', sub:'LINKS', href:'/links', x:760, y:420, w:132, h:108, lore:'A general store that sells other peoples websites.' },
    { id:'theatre', label:'THEATRE', sub:'ML LAB', href:'/ml', x:1080, y:560, w:152, h:118, lore:'The prediction theatre — curtains, yields, and P/E ratios.' },
    { id:'code', label:'MILL', sub:'CODE', href:'/code', x:620, y:780, w:136, h:102, lore:'The code mill — sawdust and shipped features.' },
    { id:'contact', label:'POST', sub:'CONTACT', href:'/contact', x:980, y:820, w:110, h:82, lore:'Post office. Write a letter, it might arrive.' },
    { id:'more', label:'SHED', sub:'MORE', href:'/more', x:1450, y:620, w:96, h:78, lore:'A shed that is bigger inside.' },
    { id:'hook_north', label:'NORTH LOT', sub:'HOOK_NORTH', href:null, x:520, y:220, w:110, h:80, hook:true, lore:'Reserved — Codex: add a lighthouse / observatory here.' },
    { id:'hook_east', label:'EAST LOT', sub:'HOOK_EAST', href:null, x:1750, y:740, w:120, h:90, hook:true, lore:'Reserved — Codex: add a dock / fishing game here.' },
    { id:'hook_south', label:'SOUTH LOT', sub:'HOOK_SOUTH', href:null, x:900, y:1180, w:130, h:90, hook:true, lore:'Reserved — Codex: add a cave / archive here.' },
    { id:'hook_west', label:'WEST LOT', sub:'HOOK_WEST', href:null, x:220, y:900, w:110, h:86, hook:true, lore:'Reserved — Codex: add a grove / shrine here.' },
  ]
  const [pos,setPos]=React.useState({x:700,y:400})
  const [active,setActive]=React.useState(null)
  const [cam,setCam]=React.useState({x:700,y:400})
  const [edge,setEdge]=React.useState(false)
  // smooth camera follow
  React.useEffect(()=>{
    let raf
    const tick=()=>{ setCam(c=>({x: c.x + (pos.x-c.x)*0.08, y: c.y + (pos.y-c.y)*0.08})); raf=requestAnimationFrame(tick)}
    raf=requestAnimationFrame(tick); return()=>cancelAnimationFrame(raf)
  },[pos])
  React.useEffect(()=>{
    const speed=9
    const keys=new Set()
    const onD=e=>{ if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key.toLowerCase())){e.preventDefault(); keys.add(e.key.toLowerCase())}}
    const onU=e=>keys.delete(e.key.toLowerCase())
    window.addEventListener('keydown',onD); window.addEventListener('keyup',onU)
    let raf
    const loop=()=>{
      let dx=0,dy=0
      if(keys.has('arrowleft')||keys.has('a')) dx-=speed
      if(keys.has('arrowright')||keys.has('d')) dx+=speed
      if(keys.has('arrowup')||keys.has('w')) dy-=speed
      if(keys.has('arrowdown')||keys.has('s')) dy+=speed
      if(dx||dy) setPos(p=>{
        let nx=Math.max(24,Math.min(WORLD.w-24,p.x+dx)), ny=Math.max(24,Math.min(WORLD.h-24,p.y+dy))
        if(nx<=28||nx>=WORLD.w-28||ny<=28||ny>=WORLD.h-28){ setEdge(true); setTimeout(()=> window.location.href='/avery', 260) }
        return {x:nx,y:ny}
      })
      raf=requestAnimationFrame(loop)
    }
    raf=requestAnimationFrame(loop)
    return()=>{ cancelAnimationFrame(raf); window.removeEventListener('keydown',onD); window.removeEventListener('keyup',onU)}
  },[])
  React.useEffect(()=>{
    const h=LOCS.find(l=> !l.hook && pos.x>l.x-22 && pos.x<l.x+l.w+22 && pos.y>l.y-22 && pos.y<l.y+l.h+22)
    setActive(h?.id||null)
  },[pos])
  const vbW=1000, vbH=650
  const viewX=Math.max(0,Math.min(WORLD.w-vbW, cam.x - vbW/2))
  const viewY=Math.max(0,Math.min(WORLD.h-vbH, cam.y - vbH/2))
  const toWorld=(clientX,clientY,rect)=> {
    const sx=(clientX-rect.left)/rect.width, sy=(clientY-rect.top)/rect.height
    return { x: viewX + sx*vbW, y: viewY + sy*vbH }
  }
  const wrapRef = React.useRef(null)
  React.useEffect(()=>{
    const el = wrapRef.current
    if(!el) return
    const prevent = e => { if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','Space'].includes(e.key) || e.key.startsWith('Arrow')) e.preventDefault() }
    const onWheel = e => e.preventDefault()
    const prevOverflow = document.body.style.overflow
    const prevOverscroll = document.documentElement.style.overscrollBehavior
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    window.addEventListener('keydown', prevent, {passive:false})
    window.addEventListener('wheel', onWheel, {passive:false})
    window.addEventListener('touchmove', onWheel, {passive:false})
    el.focus()
    return ()=>{
      document.body.style.overflow = prevOverflow
      document.documentElement.style.overscrollBehavior = prevOverscroll
      window.removeEventListener('keydown', prevent)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchmove', onWheel)
    }
  },[])
  return (
    <div ref={wrapRef} tabIndex={0} onKeyDown={e=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); const h=LOCS.find(l=>l.id===active); if(h?.href) window.location.href=h.href } }} style={{margin:'-24px -24px 0', background:PALETTE.paper, color:PALETTE.ink, height:'100dvh', minHeight:'100dvh', position:'relative', overflow:'hidden', filter:'sepia(0.38) saturate(0.82)', outline:'none'}} onWheel={e=>e.preventDefault()}>
      <style>{`html,body{overscroll-behavior:none} @keyframes drift{from{transform:translateX(-240px)}to{transform:translateX(2640px)}} @keyframes flash{0%,49%{fill:#9A8E7A}50%,100%{fill:#7E8FA3}} .flash{animation:flash 0.28s steps(1) infinite} .ink{stroke:#0A0A0B; stroke-linecap:round; stroke-linejoin:round} @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}`}</style>
      {edge && <div style={{position:'absolute', inset:0, zIndex:20, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(10,10,11,0.78)', color:'#F5EED8', fontFamily:'JetBrains Mono,monospace', fontSize:20, letterSpacing:5}}>EDGE → AVERY…</div>}
      <svg viewBox={`${viewX} ${viewY} ${vbW} ${vbH}`} style={{width:'100%', height:'100dvh', display:'block'}} onClick={e=>{
        const r=e.currentTarget.getBoundingClientRect()
        const w=toWorld(e.clientX,e.clientY,r)
        setPos({x:Math.max(24,Math.min(WORLD.w-24,w.x)), y:Math.max(24,Math.min(WORLD.h-24,w.y))})
      }}>
        <rect x="0" y="0" width={WORLD.w} height={WORLD.h} fill="#E8E0C8" />
        {/* sea texture */}
        <rect x="0" y="0" width={WORLD.w} height={WORLD.h} fill="none" stroke="#0A0A0B" strokeWidth="4" />
        {/* story: faint contour islands */}
        <ellipse cx="900" cy="620" rx="720" ry="420" fill="#C2B8A3" className="ink" strokeWidth="3.5" />
        <ellipse cx="900" cy="600" rx="680" ry="390" fill="#D9D0B6" stroke="#0A0A0B" strokeWidth="2.2" />
        <ellipse cx="900" cy="600" rx="640" ry="360" fill="none" stroke="#0A0A0B" strokeWidth="1" strokeDasharray="6 8" opacity="0.35" />
        {/* sea around */}
        <g stroke="#0A0A0B" strokeWidth="1.4" opacity="0.9" fill="none">
          {Array.from({length:18}).map((_,i)=><path key={i} d={`M ${-60+i*140} ${1320+i%3*18} q 28 -9 56 0 t 56 0 t 56 0`} />)}
          {Array.from({length:14}).map((_,i)=><path key={i} d={`M ${-40+i*170} ${120} q 26 -8 52 0 t 52 0`} />)}
        </g>
        {/* clouds */}
        <g opacity="0.96">
          <g style={{animation:'drift 32s linear infinite'}}><ellipse cx="320" cy="140" rx="70" ry="26" fill="#F5EED8" className="ink" strokeWidth="2.6"/><ellipse cx="360" cy="128" rx="44" ry="20" fill="#F5EED8" className="ink" strokeWidth="2.6"/><ellipse cx="280" cy="150" rx="36" ry="16" fill="#F5EED8" className="ink" strokeWidth="2.6"/></g>
          <g style={{animation:'drift 46s linear infinite'}}><ellipse cx="980" cy="110" rx="80" ry="28" fill="#F5EED8" className="ink" strokeWidth="2.6"/><ellipse cx="1030" cy="98" rx="48" ry="18" fill="#F5EED8" className="ink" strokeWidth="2.6"/></g>
          <g style={{animation:'drift 38s linear infinite', animationDelay:'-10s'}}><ellipse cx="1500" cy="160" rx="60" ry="22" fill="#F5EED8" className="ink" strokeWidth="2.6"/><ellipse cx="1540" cy="148" rx="38" ry="16" fill="#F5EED8" className="ink" strokeWidth="2.6"/></g>
        </g>
        {/* trees scatter */}
        {Array.from({length:28}).map((_,i)=>{
          const s= 999 + i*  137; const x= 180 + (s*  73 % 2100), y= 260 + (s*  41 % 900)
          const inIsland = Math.pow((x-900)/680,2)+Math.pow((y-600)/390,2) < 1
          if(!inIsland) return null
            if(LOCS.some(l=> Math.hypot(x-(l.x+l.w/2), y-(l.y+l.h/2))<90)) return null
          return <g key={i}><rect x={x-4} y={y} width="7" height="16" fill="#6B6254" className="ink" strokeWidth="1.7"/><circle cx={x} cy={y-8} r="16" fill="#9A8E7A" className="ink" strokeWidth="2"/><circle cx={x-7} cy={y-2} r="10" fill="#C2B8A3" className="ink" strokeWidth="1.6"/></g>
        })}
        {/* paths - dotted */}
        <g stroke="#0A0A0B" strokeWidth="1.6" strokeDasharray="8 10" opacity="0.45" fill="none">
          <path d="M 480 580 Q 620 520 780 480 T 1150 620" />
          <path d="M 680 840 Q 830 860 1030 860" />
        </g>
        {/* buildings */}
        {LOCS.map(l=>{
          const isActive=active===l.id
          const isHook=l.hook
          return (
            <g key={l.id} onClick={()=> l.href && (window.location.href=l.href)} style={{cursor: l.href?'pointer':'default'}} opacity={isHook?0.55:1}>
              <rect x={l.x} y={l.y} width={l.w} height={l.h} rx="11" fill={isHook? 'none' : isActive? '#9A8E7A':'#F5EED8'} className={isActive? 'flash ink':'ink'} strokeWidth={isHook?1.8:3} strokeDasharray={isHook?'8 6':''} />
              {!isHook && <rect x={l.x+12} y={l.y+16} width={l.w-24} height="14" rx="4" fill="#0A0A0B" />}
              <text x={l.x+l.w/2} y={l.y+26} textAnchor="middle" fontSize="8.5" fontFamily="JetBrains Mono,monospace" fill={isHook?'#0A0A0B':'#F5EED8'} fontWeight="800">{l.label}</text>
              {!isHook && <text x={l.x+l.w/2} y={l.y+l.h-16} textAnchor="middle" fontSize="7" fontFamily="JetBrains Mono,monospace" fill="#0A0A0B" fontWeight="700">{l.sub}</text>}
              {isHook && <text x={l.x+l.w/2} y={l.y+l.h-14} textAnchor="middle" fontSize="6.5" fontFamily="JetBrains Mono,monospace" fill="#0A0A0B">{l.sub}</text>}
              {!isHook && <rect x={l.x+l.w/2-15} y={l.y+l.h-30} width="30" height="22" rx="3" fill="#C2B8A3" className="ink" strokeWidth="2" />}
              {isActive && <text x={l.x+l.w/2} y={l.y-12} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono,monospace" fill="#0A0A0B" fontWeight="800">▶ ENTER [↵]</text>}
              {isHook && <text x={l.x+l.w/2} y={l.y+l.h/2+4} textAnchor="middle" fontSize="10" opacity="0.7">◇</text>}
            </g>
          )
        })}
        {/* player */}
        <g transform={`translate(${pos.x},${pos.y})`} style={{animation:'bob 0.9s ease-in-out infinite'}}>
          <ellipse cx="0" cy="16" rx="11" ry="4.5" fill="rgba(0,0,0,0.22)" />
          <rect x="-10" y="-16" width="20" height="20" rx="7" fill="#0A0A0B" stroke="#F5EED8" strokeWidth="1.3" />
          <circle cx="0" cy="-7" r="5.5" fill="#F5EED8" stroke="#0A0A0B" strokeWidth="1.7" />
          <text x="0" y="-4.5" textAnchor="middle" fontSize="7.5">◉</text>
        </g>
        {/* world border hint */}
        <g opacity="0.42" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#0A0A0B" textAnchor="middle">
          <text x={WORLD.w/2} y="22">— NORTH EDGE → AVERY —</text><text x={WORLD.w/2} y={WORLD.h-14}>— SOUTH EDGE → AVERY —</text>
          <text x="18" y={WORLD.h/2} transform={`rotate(-90 18 ${WORLD.h/2})`}>WEST EDGE → AVERY</text><text x={WORLD.w-18} y={WORLD.h/2} transform={`rotate(90 ${WORLD.w-18} ${WORLD.h/2})`}>EAST EDGE → AVERY</text>
        </g>
      </svg>
      {/* HUD - no banner, just controls + lore */}
      <div style={{position:'absolute', bottom:10, left:10, right:10, display:'flex', gap:8, flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', fontFamily:'JetBrains Mono,monospace', fontSize:10, zIndex:6}}>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
          <span style={{background:'#0A0A0B', color:'#F5EED8', padding:'7px 11px', borderRadius:999}}>WASD / ARROWS · CLICK to walk · ENTER to enter</span>
          {active && <span style={{background:'#F5EED8', border:'2px solid #0A0A0B', padding:'6px 10px', borderRadius:999, maxWidth:420, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{LOCS.find(l=>l.id===active)?.lore}</span>}
        </div>
        <div style={{background:'rgba(245,238,216,0.92)', border:'2.5px solid #0A0A0B', borderRadius:10, padding:'6px 10px', maxWidth:360, lineHeight:1.4}}>
          <b>THE ESPRIT ARCHIPELAGO</b> — a faded map. Walk far; the world is 2400×1600. Dashed lots (HOOK_*) are for Codex to build on — wire `data-hook` or add SVG groups with id `hook_*` and they’ll flash + link. No banner.
        </div>
      </div>
    </div>
  )
}
