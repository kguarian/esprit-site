import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import * as THREE from 'three'
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

function PlanetNuke() {
  const ref = React.useRef(null)
  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x030205, 0.038)
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80)
    camera.position.set(0, 0.08, 4.5)
    const world = new THREE.Group()
    world.position.y = .46
    world.rotation.z = -0.18
    scene.add(world)

    let seed = 7421
    const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
    const makeRadialTexture = (core, edge = 'rgba(0,0,0,0)') => {
      const node = document.createElement('canvas'); node.width = node.height = 128
      const ctx = node.getContext('2d')
      const gradient = ctx.createRadialGradient(64,64,0,64,64,64)
      gradient.addColorStop(0, '#fff'); gradient.addColorStop(0.08, core); gradient.addColorStop(0.34, 'rgba(255,70,12,.65)'); gradient.addColorStop(1, edge)
      ctx.fillStyle = gradient; ctx.fillRect(0,0,128,128)
      return new THREE.CanvasTexture(node)
    }

    // A hand-drawn, scorched equirectangular Earth texture keeps this scene self-contained.
    const mapCanvas = document.createElement('canvas'); mapCanvas.width = 2048; mapCanvas.height = 1024
    const map = mapCanvas.getContext('2d')
    const ocean = map.createLinearGradient(0,0,0,1024)
    ocean.addColorStop(0,'#07111d'); ocean.addColorStop(.45,'#062338'); ocean.addColorStop(1,'#04080e')
    map.fillStyle = ocean; map.fillRect(0,0,2048,1024)
    map.strokeStyle = 'rgba(109,164,180,.07)'; map.lineWidth = 1
    for(let y=84;y<1024;y+=86){ map.beginPath(); map.moveTo(0,y); map.lineTo(2048,y); map.stroke() }
    for(let x=0;x<2048;x+=128){ map.beginPath(); map.moveTo(x,0); map.lineTo(x,1024); map.stroke() }
    const continents = [
      [[95,280],[170,180],[330,152],[465,220],[520,330],[445,382],[390,465],[270,448],[198,370]],
      [[430,450],[570,455],[650,555],[625,702],[552,866],[492,776],[472,610]],
      [[790,182],[870,120],[962,145],[1008,230],[955,282],[850,270]],
      [[930,290],[1070,255],[1190,330],[1160,470],[1080,610],[1015,785],[930,690],[890,518]],
      [[1020,235],[1245,150],[1530,185],[1800,305],[1725,430],[1512,470],[1400,390],[1220,418],[1120,338]],
      [[1575,650],[1720,612],[1838,685],[1785,800],[1645,824],[1550,742]],
      [[845,850],[1200,875],[1540,842],[1800,895],[1640,950],[1050,958]]
    ]
    continents.forEach(points => {
      map.beginPath(); points.forEach(([x,y],i)=>i?map.lineTo(x,y):map.moveTo(x,y)); map.closePath()
      map.fillStyle='#19231f'; map.fill(); map.strokeStyle='rgba(226,124,67,.38)'; map.lineWidth=4; map.stroke()
    })
    const strikes = [[-118,34],[-74,40],[-46,-23],[2,48],[37,55],[31,30],[77,28],[116,39],[139,35],[151,-33],[18,-34]]
    strikes.forEach(([lon,lat], index) => {
      const x=(lon+180)/360*2048, y=(90-lat)/180*1024, radius=index%3===0?82:54
      const scar=map.createRadialGradient(x,y,0,x,y,radius)
      scar.addColorStop(0,'#fff7c2'); scar.addColorStop(.08,'#ff9a1f'); scar.addColorStop(.25,'#d52d09'); scar.addColorStop(.58,'rgba(92,15,4,.72)'); scar.addColorStop(1,'rgba(0,0,0,0)')
      map.fillStyle=scar; map.fillRect(x-radius,y-radius,radius*2,radius*2)
    })
    for(let i=0;i<210;i++){
      const x=random()*2048,y=250+random()*560
      map.fillStyle=`rgba(255,${70+Math.floor(random()*100)},25,${.18+random()*.48})`
      map.fillRect(x,y,1+random()*3,1+random()*3)
    }
    const earthTexture = new THREE.CanvasTexture(mapCanvas)
    earthTexture.colorSpace = THREE.SRGBColorSpace
    earthTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.18, 96, 96),
      new THREE.MeshStandardMaterial({ map:earthTexture, roughness:.96, metalness:.02, emissive:0x210500, emissiveIntensity:.42 })
    )
    earth.rotation.y = -1.15
    world.add(earth)

    const fireUniforms = { uTime:{value:0}, uHeat:{value:.2} }
    const fireShell = new THREE.Mesh(new THREE.SphereGeometry(1.205,96,96), new THREE.ShaderMaterial({
      uniforms:fireUniforms, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
      vertexShader:`varying vec3 vN; varying vec3 vP; void main(){vN=normalize(normalMatrix*normal);vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`uniform float uTime; uniform float uHeat; varying vec3 vN; varying vec3 vP; void main(){float bands=sin(vP.x*31.+sin(vP.y*19.)+uTime*1.8)*sin(vP.y*27.-uTime);float cracks=smoothstep(.72,.96,bands);float rim=pow(1.-abs(vN.z),3.);vec3 c=mix(vec3(1.,.055,.005),vec3(1.,.68,.12),cracks);gl_FragColor=vec4(c,(cracks*.26+rim*.19)*uHeat);}`
    }))
    fireShell.rotation.y = earth.rotation.y
    world.add(fireShell)

    const smokeCanvas=document.createElement('canvas'); smokeCanvas.width=1024; smokeCanvas.height=512
    const smoke=smokeCanvas.getContext('2d')
    for(let i=0;i<420;i++){
      const x=random()*1024,y=random()*512,r=6+random()*45
      const g=smoke.createRadialGradient(x,y,0,x,y,r)
      g.addColorStop(0,`rgba(38,20,18,${.06+random()*.13})`);g.addColorStop(1,'rgba(0,0,0,0)')
      smoke.fillStyle=g;smoke.fillRect(x-r,y-r,r*2,r*2)
    }
    const smokeTexture=new THREE.CanvasTexture(smokeCanvas)
    const smokeShell=new THREE.Mesh(new THREE.SphereGeometry(1.245,72,72),new THREE.MeshBasicMaterial({map:smokeTexture,transparent:true,opacity:.82,depthWrite:false,color:0x6d3027}))
    smokeShell.rotation.y=earth.rotation.y+.2; world.add(smokeShell)

    const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.30,72,72), new THREE.ShaderMaterial({
      transparent:true, side:THREE.BackSide, blending:THREE.AdditiveBlending, depthWrite:false,
      vertexShader:`varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`varying vec3 n;void main(){float i=pow(max(0.,.72-dot(n,vec3(0.,0.,1.))),3.2);gl_FragColor=vec4(1.,.11,.025,i*.72);}`
    }))
    world.add(atmosphere)

    const impactTexture=makeRadialTexture('#fff3b0')
    const impactSprites=[]
    const normalAxis=new THREE.Vector3(0,0,1)
    strikes.forEach(([lon,lat],index)=>{
      const phi=THREE.MathUtils.degToRad(90-lat),theta=THREE.MathUtils.degToRad(lon+180)
      const normal=new THREE.Vector3().setFromSphericalCoords(1,phi,theta)
      const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:impactTexture,color:index<3?0xfff2a6:0xff4b0b,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:0}))
      sprite.position.copy(normal).multiplyScalar(1.235);sprite.scale.setScalar(.07);sprite.userData={delay:index*.24,index};earth.add(sprite);impactSprites.push(sprite)
      const ring=new THREE.Mesh(new THREE.RingGeometry(.035,.047,32),new THREE.MeshBasicMaterial({color:0xff6a13,transparent:true,opacity:0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false}))
      ring.position.copy(normal).multiplyScalar(1.224);ring.quaternion.setFromUnitVectors(normalAxis,normal);ring.userData={delay:index*.24,index};earth.add(ring);impactSprites.push(ring)
    })

    const starPositions=new Float32Array(5400)
    for(let i=0;i<starPositions.length;i+=3){starPositions[i]=(random()-.5)*28;starPositions[i+1]=(random()-.5)*17;starPositions[i+2]=-3-random()*20}
    const starGeometry=new THREE.BufferGeometry();starGeometry.setAttribute('position',new THREE.BufferAttribute(starPositions,3))
    const stars=new THREE.Points(starGeometry,new THREE.PointsMaterial({color:0xdce9ff,size:.018,transparent:true,opacity:.7,sizeAttenuation:true}));scene.add(stars)

    const emberPositions=new Float32Array(1800)
    for(let i=0;i<emberPositions.length;i+=3){const r=1.35+random()*2.2,a=random()*Math.PI*2,z=(random()-.5)*1.4;emberPositions[i]=Math.cos(a)*r;emberPositions[i+1]=z;emberPositions[i+2]=Math.sin(a)*r}
    const emberGeometry=new THREE.BufferGeometry();emberGeometry.setAttribute('position',new THREE.BufferAttribute(emberPositions,3))
    const embers=new THREE.Points(emberGeometry,new THREE.PointsMaterial({color:0xff5a16,size:.018,transparent:true,opacity:.68,blending:THREE.AdditiveBlending,depthWrite:false}));scene.add(embers)

    const flareTexture=makeRadialTexture('#ffdf91')
    const flare=new THREE.Sprite(new THREE.SpriteMaterial({map:flareTexture,color:0xff2d08,transparent:true,opacity:.42,blending:THREE.AdditiveBlending,depthWrite:false}));flare.position.set(-3.4,1.5,-4);flare.scale.set(7,7,1);scene.add(flare)
    const shockwaves=[0,1,2].map(index=>{
      const ring=new THREE.Mesh(new THREE.RingGeometry(1.31,1.326,128),new THREE.MeshBasicMaterial({color:index===0?0xffe1a1:0xff3c0a,transparent:true,opacity:0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false}));ring.position.y=.46;ring.userData.index=index;scene.add(ring);return ring
    })

    scene.add(new THREE.HemisphereLight(0x7f8aa6,0x140100,.55))
    const dyingSun=new THREE.DirectionalLight(0xffd1a3,2.5);dyingSun.position.set(-4,2.8,5);scene.add(dyingSun)
    const burnLight=new THREE.PointLight(0xff2d00,13,8,1.7);burnLight.position.set(1,-.25,2.3);scene.add(burnLight)

    const clock=new THREE.Clock()
    const resize=()=>{const w=canvas.clientWidth||1,h=canvas.clientHeight||1;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
    resize(); window.addEventListener('resize',resize)
    let raf
    const animate=()=>{
      raf=requestAnimationFrame(animate)
      const t=clock.getElapsedTime(),motion=reduceMotion?0:.0014
      earth.rotation.y+=motion;fireShell.rotation.y+=motion*.82;smokeShell.rotation.y-=motion*.32
      fireUniforms.uTime.value=t;fireUniforms.uHeat.value=Math.min(1.35,.18+t*.22)
      smokeShell.material.opacity=Math.min(.92,.38+t*.075)
      impactSprites.forEach(item=>{const age=Math.max(0,t-item.userData.delay);if(item.isSprite){item.material.opacity=Math.min(1,age*2.4)*(.64+Math.sin(t*8+item.userData.index)*.24);item.scale.setScalar(.04+Math.min(.17,age*.045))}else{item.material.opacity=age>0?Math.max(0,.7-(age%2.1)/2.1):0;item.scale.setScalar(1+(age%2.1)*2.8)}})
      shockwaves.forEach((ring,index)=>{const age=Math.max(0,t-index*.65);const cycle=age%4.2;ring.scale.setScalar(1+cycle*.52);ring.material.opacity=age>0?Math.max(0,.44-cycle*.105):0})
      embers.rotation.z+=motion*.38;embers.rotation.y-=motion*.2
      burnLight.intensity=10+Math.sin(t*5.4)*3.5+Math.sin(t*13)*1.2
      camera.position.z=4.25+Math.min(.5,t*.035)
      if(!reduceMotion){camera.position.x=Math.sin(t*19)*Math.max(0,.018-t*.002);camera.position.y=.08+Math.sin(t*14)*Math.max(0,.011-t*.001)}
      camera.lookAt(0,0,0);renderer.render(scene,camera)
    }
    animate()
    return()=>{
      cancelAnimationFrame(raf);window.removeEventListener('resize',resize)
      scene.traverse(object=>{object.geometry?.dispose();if(Array.isArray(object.material))object.material.forEach(material=>material.dispose());else object.material?.dispose()})
      earthTexture.dispose();smokeTexture.dispose();impactTexture.dispose();flareTexture.dispose();renderer.dispose()
    }
  }, [])
  return <canvas ref={ref} aria-label="A burning Earth surrounded by global firestorms and ash" style={{ position:'absolute', inset:0, width:'100%', height:'100%', display:'block' }} />
}

function DoomsdayScene({ onReset }) {
  const [elapsed,setElapsed]=React.useState(0)
  React.useEffect(()=>{const started=Date.now();const id=setInterval(()=>setElapsed(Math.floor((Date.now()-started)/1000)),1000);return()=>clearInterval(id)},[])
  const timestamp=`T+00:${String(elapsed).padStart(2,'0')}`
  const ruins=[
    {x:0,w:9,h:43},{x:7,w:7,h:31},{x:13,w:11,h:55},{x:22,w:6,h:36},{x:27,w:10,h:63,falling:true},{x:36,w:7,h:44},
    {x:42,w:12,h:38},{x:53,w:8,h:57},{x:60,w:6,h:34},{x:65,w:12,h:69},{x:76,w:7,h:46},{x:82,w:11,h:58},{x:92,w:9,h:39}
  ]
  const flames=Array.from({length:34},(_,i)=>({x:(i*31)%101,size:22+(i*17)%58,delay:-((i*13)%24)/10}))
  const meteors=Array.from({length:9},(_,i)=>({x:5+(i*19)%92,delay:-((i*7)%31)/10,scale:.55+(i%4)*.2}))
  const ash=Array.from({length:46},(_,i)=>({x:(i*37)%101,delay:-((i*11)%53)/10,duration:3.5+(i%6)*.7}))
  return (
    <section className="doomsday" aria-live="polite">
      <PlanetNuke />
      <div className="doom-vignette" /><div className="doom-grain" /><div className="doom-scan" />
      <div className="meteor-field" aria-hidden="true">{meteors.map((meteor,i)=><i key={i} className="meteor" style={{'--x':`${meteor.x}%`,'--delay':`${meteor.delay}s`,'--scale':meteor.scale}} />)}</div>
      <div className="sky-blast sky-blast-one" aria-hidden="true" /><div className="sky-blast sky-blast-two" aria-hidden="true" />
      <div className="ash-field" aria-hidden="true">{ash.map((particle,i)=><i key={i} style={{'--x':`${particle.x}%`,'--delay':`${particle.delay}s`,'--duration':`${particle.duration}s`}} />)}</div>
      <div className="doom-topline mono">
        <div><span className="doom-live" />PLANETARY EXTINCTION</div><div>{timestamp}</div>
      </div>
      <div className="city-destruction" aria-hidden="true">
        <div className="smoke-column smoke-one" /><div className="smoke-column smoke-two" /><div className="smoke-column smoke-three" />
        <div className="ruined-skyline">{ruins.map((ruin,i)=><i key={i} className={`ruin ruin-${i%3}${ruin.falling?' ruin-falling':''}`} style={{'--x':`${ruin.x}%`,'--w':`${ruin.w}%`,'--h':`${ruin.h}%`}}><b /></i>)}</div>
        <svg className="broken-bridge" viewBox="0 0 1200 190" preserveAspectRatio="none">
          <path d="M0 136 L176 130 L315 92 L452 124 L512 143 M688 147 L756 113 L910 100 L1035 132 L1200 139" />
          <path d="M188 130 L188 35 M1008 132 L1008 38 M188 42 Q360 51 452 124 M1008 44 Q850 52 756 113" />
          <path className="bridge-cable" d="M452 124 L512 182 M756 113 L690 180" />
        </svg>
        <div className="fireline">{flames.map((flame,i)=><i key={i} className="flame" style={{'--x':`${flame.x}%`,'--size':`${flame.size}px`,'--delay':`${flame.delay}s`}} />)}</div>
      </div>
      <div className="doom-end"><strong>THE END</strong><span className="mono">NO CITIES LEFT TO NAME</span></div>
      <div className="doom-bottom">
        <button onClick={onReset} className="doom-reset mono" aria-label="Reset the experiment">REWIND <span>↺</span></button>
      </div>
    </section>
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

function Home() {
  const PALETTE = { sepia:'#9A8E7A', sepiaDark:'#6B6254', sepiaLight:'#C2B8A3', blueSepia:'#7E8FA3', sea:'#8E9EAC', paper:'#E8E0C8', ink:'#0A0A0B' }
  // Wide world — far and wide, Codex can hook HOOK_* regions later
  const WORLD = { w: 2400, h: 1600 }
  // Story: an archipelago that was once the Esprit — you wander between memory-islands
  const LOCS = [
    { id:'kenton', label:'CABIN', sub:'KENTON', href:'/kenton', x:420, y:520, w:148, h:112, lore:'Where Kenton keeps the signal logs. The heater still ticks.' },
    { id:'store', label:'STORE', sub:'LINKS', href:'/links', x:760, y:420, w:132, h:108, lore:'A general store that sells other peoples websites.' },
    { id:'theatre', label:'THEATRE', sub:'ML LAB', href:'/ml', x:1080, y:560, w:152, h:118, lore:'The prediction theatre — curtains, yields, and P/E ratios.' },
    { id:'code', label:'MILL', sub:'CODE', href:'/code', x:620, y:780, w:136, h:102, lore:'The code mill — sawdust and shipped features.' },
    { id:'contact', label:'POST', sub:'CONTACT', href:'/contact', x:980, y:820, w:110, h:82, lore:'Post office. Write a letter, it might arrive.' },
    { id:'more', label:'SHED', sub:'MORE', href:'/more', x:1450, y:620, w:96, h:78, lore:'A shed that is bigger inside.' },
    // HOOK points for Codex — empty lots with ids, liven later
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
  return (
    <div style={{margin:'-24px -24px 0', background:PALETTE.paper, color:PALETTE.ink, minHeight:'calc(100vh - 72px)', position:'relative', overflow:'hidden', filter:'sepia(0.38) saturate(0.82)'}}>
      <style>{`@keyframes drift{from{transform:translateX(-240px)}to{transform:translateX(2640px)}} @keyframes flash{0%,49%{fill:#9A8E7A}50%,100%{fill:#7E8FA3}} .flash{animation:flash 0.28s steps(1) infinite} .ink{stroke:#0A0A0B; stroke-linecap:round; stroke-linejoin:round} @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}`}</style>
      {edge && <div style={{position:'absolute', inset:0, zIndex:20, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(10,10,11,0.78)', color:'#F5EED8', fontFamily:'JetBrains Mono,monospace', fontSize:20, letterSpacing:5}}>EDGE → AVERY…</div>}
      <svg viewBox={`${viewX} ${viewY} ${vbW} ${vbH}`} style={{width:'100%', height:'calc(100vh - 72px)', display:'block'}} onClick={e=>{
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
          // skip near buildings
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
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes wave{0%{stroke-dashoffset:0}100%{stroke-dashoffset:40}}
        @keyframes glowPulse{0%{filter:drop-shadow(0 0 6px #ec4899)}50%{filter:drop-shadow(0 0 16px #06b6d4)}100%{filter:drop-shadow(0 0 6px #ec4899)}}
        @keyframes decayFlash{0%{opacity:0}15%{opacity:1}30%{opacity:0}100%{opacity:0}}
        @keyframes doomReveal{from{opacity:0;filter:brightness(3) saturate(0)}to{opacity:1;filter:brightness(1) saturate(1)}}
        @keyframes doomFlash{0%{opacity:.9}5%{opacity:.06}10%{opacity:.32}16%,100%{opacity:0}}
        @keyframes grainWalk{0%,100%{transform:translate(0,0)}25%{transform:translate(2%,-3%)}50%{transform:translate(-3%,1%)}75%{transform:translate(1%,3%)}}
        @keyframes scanFall{from{transform:translateY(-12vh)}to{transform:translateY(112vh)}}
        @keyframes liveBlink{50%{opacity:.28;box-shadow:0 0 2px #ff3b17}}
        @keyframes signalDie{from{stroke-dashoffset:0}to{stroke-dashoffset:-110}}
        @keyframes meteorFall{0%{transform:translate3d(0,-35vh,0) rotate(-32deg) scaleY(var(--scale));opacity:0}8%{opacity:1}72%,100%{transform:translate3d(-48vw,112vh,0) rotate(-32deg) scaleY(var(--scale));opacity:0}}
        @keyframes blastPulse{0%,100%{transform:scale(.72);opacity:.4}50%{transform:scale(1.15);opacity:.95}}
        @keyframes smokeBillow{0%{transform:translate3d(0,22%,0) scale(.75);opacity:.3}50%{transform:translate3d(-4%,-8%,0) scale(1.08);opacity:.75}100%{transform:translate3d(7%,-36%,0) scale(1.42);opacity:0}}
        @keyframes flameDance{0%,100%{transform:rotate(42deg) scale(1,.92);filter:brightness(.9)}35%{transform:rotate(49deg) scale(.82,1.18);filter:brightness(1.5)}70%{transform:rotate(37deg) scale(1.14,.78)}}
        @keyframes cityCollapse{0%,46%{transform:rotate(0) translate(0,0)}72%,100%{transform:rotate(14deg) translate(9px,12px)}}
        @keyframes ashDrift{0%{transform:translate3d(0,-8vh,0) rotate(0);opacity:0}15%{opacity:.9}100%{transform:translate3d(-14vw,108vh,0) rotate(480deg);opacity:0}}
        .avery-shell{max-width:1280px; margin:0 auto; position:relative; z-index:2; padding:0 20px}
        .avery-main{display:grid; grid-template-columns: 1.45fr 0.9fr; gap:20px; padding:20px 0 0}
        .avery-title{font-size: clamp(22px, 2.6vw, 30px); font-weight:800; letter-spacing:-0.04em; line-height:1.05}
        .avery-btn{min-height:44px; padding:0 18px; border-radius:999px; font-weight:700; font-size:13.5px; cursor:pointer; transition: transform 0.12s, box-shadow 0.2s, opacity 0.2s; display:inline-flex; align-items:center; gap:8px}
        .avery-btn:active{transform:scale(0.98)}
        .avery-btn-primary{color:#fff; background:linear-gradient(90deg,#ec4899,#7c3aed); border:none; box-shadow: 0 6px 20px rgba(236,72,153,0.45)}
        .avery-btn-primary:hover{box-shadow: 0 8px 28px rgba(236,72,153,0.6), 0 0 0 3px rgba(236,72,153,0.18)}
        .avery-btn-ghost{color:#e2e8f0; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12)}
        .avery-btn-ghost:hover{background:rgba(255,255,255,0.10)}
        .avery-dead-root{padding:0;min-height:calc(100vh - 140px);background:#030205}
        .avery-dead-root .avery-shell{max-width:none;padding:0}
        .doomsday{position:relative;min-height:clamp(650px,calc(100vh - 140px),920px);overflow:hidden;background:radial-gradient(circle at 50% 40%,#27100d,#030205 60%);color:#f4e8df;isolation:isolate;animation:doomReveal 1.2s cubic-bezier(.2,.8,.2,1)}
        .doomsday:before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:#fff;animation:doomFlash 2.4s ease-out forwards}
        .doom-vignette{position:absolute;inset:-2px;z-index:2;pointer-events:none;background:radial-gradient(ellipse 70% 65% at 51% 44%,transparent 28%,rgba(3,1,2,.36) 66%,rgba(3,1,2,.96) 100%),linear-gradient(180deg,rgba(2,1,2,.6),transparent 25%,transparent 66%,rgba(2,1,2,.9))}
        .doom-grain{position:absolute;inset:-40%;z-index:3;pointer-events:none;opacity:.11;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");animation:grainWalk .25s steps(2) infinite}
        .doom-scan{position:absolute;z-index:4;left:0;right:0;height:14vh;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(255,104,50,.055),transparent);animation:scanFall 7s linear infinite}
        .doom-topline{position:absolute;z-index:8;top:0;left:0;right:0;padding:22px 26px;display:flex;justify-content:space-between;gap:18px;border-bottom:1px solid rgba(255,185,143,.12);background:linear-gradient(180deg,rgba(3,1,2,.6),transparent);font-size:9px;letter-spacing:.22em;color:rgba(255,222,202,.68)}
        .doom-live{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:9px;background:#ff3b17;box-shadow:0 0 12px #ff3b17;animation:liveBlink .8s infinite}
        .meteor-field,.ash-field{position:absolute;inset:0;z-index:5;overflow:hidden;pointer-events:none}.meteor{position:absolute;left:var(--x);top:-18vh;width:3px;height:24vh;border-radius:50%;background:linear-gradient(180deg,transparent 0,#ff4a18 72%,#fff1ba 100%);box-shadow:0 0 9px #ff3c0c,0 0 25px rgba(255,73,16,.8);transform-origin:bottom;animation:meteorFall 3.4s var(--delay) linear infinite}.meteor:after{content:"";position:absolute;bottom:-5px;left:-5px;width:13px;height:13px;border-radius:50%;background:#fff4bc;box-shadow:0 0 18px 8px #ff3b0a}
        .sky-blast{position:absolute;z-index:4;width:clamp(90px,14vw,190px);aspect-ratio:1;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#fff9cf 0 4%,#ffae27 10%,rgba(255,48,5,.92) 24%,rgba(116,13,3,.55) 49%,transparent 72%);filter:blur(.3px) drop-shadow(0 0 22px #ff2c00);animation:blastPulse 1.5s ease-in-out infinite}.sky-blast:after{content:"";position:absolute;inset:36%;border-radius:46% 54% 43% 57%;background:#fff;box-shadow:0 -28px 32px #ff5a0a,28px 15px 28px #ff2a00,-24px 19px 33px #ff7a11}.sky-blast-one{left:8%;top:28%}.sky-blast-two{right:9%;top:17%;transform:scale(.62);animation-delay:-.7s}
        .ash-field i{position:absolute;left:var(--x);top:-2%;width:3px;height:7px;background:#d58455;box-shadow:0 0 5px #ff5128;animation:ashDrift var(--duration) var(--delay) linear infinite}.ash-field i:nth-child(3n){width:5px;height:2px;background:#5f514d;box-shadow:none}.ash-field i:nth-child(4n){background:#ffd0a2}
        .city-destruction{position:absolute;z-index:6;left:0;right:0;bottom:0;height:58%;pointer-events:none;background:linear-gradient(0deg,rgba(3,1,1,.98) 0,rgba(25,4,2,.76) 16%,transparent 62%)}
        .city-destruction:before{content:"";position:absolute;left:-10%;right:-10%;bottom:19%;height:30%;background:radial-gradient(ellipse at center,rgba(255,75,8,.66),rgba(128,15,2,.28) 38%,transparent 69%);filter:blur(18px)}
        .ruined-skyline{position:absolute;z-index:2;inset:0 0 9%}.ruin{position:absolute;left:var(--x);bottom:0;width:var(--w);height:var(--h);display:block;transform-origin:bottom right;background:linear-gradient(90deg,#050303,#16100e 48%,#030202);border-left:1px solid rgba(255,102,48,.18);filter:drop-shadow(0 0 12px rgba(0,0,0,.95));clip-path:polygon(0 12%,10% 8%,18% 13%,27% 2%,38% 9%,48% 4%,58% 16%,70% 7%,79% 12%,88% 4%,100% 14%,100% 100%,0 100%)}.ruin-1{clip-path:polygon(0 5%,16% 15%,29% 7%,43% 18%,58% 3%,72% 14%,86% 9%,100% 19%,100% 100%,0 100%)}.ruin-2{clip-path:polygon(0 17%,13% 10%,24% 20%,37% 5%,52% 13%,66% 3%,81% 18%,100% 8%,100% 100%,0 100%)}.ruin b{position:absolute;inset:17% 14% 8%;opacity:.72;background:repeating-linear-gradient(90deg,transparent 0 9px,rgba(255,85,19,.7) 10px 13px,transparent 14px 21px),repeating-linear-gradient(0deg,transparent 0 13px,rgba(255,181,72,.2) 14px 18px,transparent 19px 28px);mix-blend-mode:screen;filter:drop-shadow(0 0 4px #ff3c00)}.ruin b:after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 45%,#050303 46% 59%,transparent 60%),linear-gradient(70deg,transparent 55%,#080504 56% 68%,transparent 69%)}.ruin-falling{animation:cityCollapse 8s 1.4s cubic-bezier(.5,0,.8,1) forwards}
        .smoke-column{position:absolute;z-index:1;bottom:9%;width:28%;height:95%;border-radius:50%;opacity:.45;background:radial-gradient(circle at 50% 75%,#2f1711 0 17%,rgba(31,23,22,.9) 31%,rgba(8,7,8,.7) 52%,transparent 72%);filter:blur(13px);animation:smokeBillow 7s ease-out infinite}.smoke-column:after{content:"";position:absolute;inset:4% 20% 35%;border-radius:50%;background:#160e0d;box-shadow:40px -25px 42px #211513,-35px -60px 50px #0b0909}.smoke-one{left:8%}.smoke-two{left:39%;animation-delay:-3.2s;transform:scale(1.2)}.smoke-three{right:3%;animation-delay:-5.4s;transform:scale(.82)}
        .broken-bridge{position:absolute;z-index:3;left:-2%;bottom:5%;width:104%;height:27%;overflow:visible;filter:drop-shadow(0 4px 5px #000)}.broken-bridge path{fill:none;stroke:#0a0706;stroke-width:15;vector-effect:non-scaling-stroke;stroke-linecap:square}.broken-bridge path:nth-child(2){stroke-width:6}.broken-bridge .bridge-cable{stroke:#24100b;stroke-width:3}
        .fireline{position:absolute;z-index:4;left:-3%;right:-3%;bottom:-5%;height:33%;background:radial-gradient(ellipse at 50% 110%,#ffd65a 0,#ff5a09 24%,rgba(158,18,2,.86) 47%,transparent 72%);filter:drop-shadow(0 -8px 18px rgba(255,47,0,.75))}.flame{position:absolute;left:var(--x);bottom:8%;width:var(--size);height:calc(var(--size) * 1.65);display:block;border-radius:75% 8% 68% 45%;background:linear-gradient(135deg,#fff7bd 0 14%,#ffae19 32%,#ff3208 68%,rgba(111,8,0,.2));box-shadow:0 0 12px #ff4a0a;transform-origin:50% 100%;animation:flameDance .48s var(--delay) ease-in-out infinite}
        .doom-end{position:absolute;z-index:7;left:clamp(20px,5vw,68px);top:17%;display:flex;flex-direction:column;color:#fff1e8;text-shadow:0 3px 24px #000}.doom-end strong{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(42px,7vw,94px);line-height:.85;letter-spacing:-.045em}.doom-end span{margin-top:12px;font-size:8px;letter-spacing:.36em;color:#ff9b73}
        .doom-bottom{position:absolute;z-index:10;right:20px;bottom:18px}
        .doom-reset{flex:none;padding:13px 15px;border:1px solid rgba(255,151,108,.38);background:rgba(28,6,4,.46);color:#ffc1a6;font-size:8px;letter-spacing:.2em;cursor:pointer;transition:.2s ease}.doom-reset:hover{background:#ff4a1f;color:#120301;border-color:#ff4a1f;box-shadow:0 0 30px rgba(255,69,25,.35)}.doom-reset span{margin-left:12px;font-size:13px}
        @media (max-width: 960px){ .avery-main{grid-template-columns:1fr} .avery-shell{max-width:720px} }
        @media (max-width: 760px){.doomsday{min-height:720px}.doom-topline{padding:17px 18px;font-size:7px}.doom-end{top:13%;left:18px}.doom-end span{font-size:6px}.city-destruction{height:54%}.sky-blast-one{left:-4%;top:32%}.sky-blast-two{right:-2%;top:24%}.doom-bottom{right:12px;bottom:12px}.doom-reset{padding:10px 12px}.ruin b{background-size:16px 24px}.broken-bridge{height:22%}}
        @media (max-width: 640px){ .avery-root{border-radius:12px; margin:-0.75rem -0.75rem 0} .avery-dead-root{border-radius:0}.avery-title{font-size:22px} }
        @media (prefers-reduced-motion:reduce){.doomsday,.doomsday:before,.doom-grain,.doom-scan,.doom-live,.meteor,.sky-blast,.ash-field i,.smoke-column,.flame,.ruin-falling{animation:none!important}.doom-grain{display:none}}
      `}</style>
      <div className={`avery-root ${phase==='dead'?'avery-dead-root':''}`}>
        {phase!=='dead' && <><div className="avery-bg" /><div className="avery-grid" /></>}
        <div className="avery-shell">
        {/* header */}
        {phase!=='dead' && <div style={{ padding: '18px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
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
        </div>}

        {/* main lab */}
        {phase==='dead' ? (
          <DoomsdayScene onReset={reset} />
        ) : (
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
                  {phase==='dead' && <text x={248} y={298} textAnchor="middle" fill="#fecaca" fontSize={9} className="mono">COLLAPSED → |dead⟩ · WORLD BURNS</text>}
                  {phase==='dead' && <text x={248} y={312} textAnchor="middle" fill="#f87171" fontSize={7} className="mono">nuclear ash · hymn to Virgil: facilis descensus Averno</text>}
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
        )}
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
