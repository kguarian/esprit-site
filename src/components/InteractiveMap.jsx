import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PALETTE, WORLD } from '../lib/palette.js'

const DIRECTIONS = {
  arrowup: { x: 0, y: -1 }, w: { x: 0, y: -1 },
  arrowdown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
  arrowleft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
  arrowright: { x: 1, y: 0 }, d: { x: 1, y: 0 },
}

const clamp = value => Math.max(56, Math.min(WORLD.w - 56, value))

function Glyph({ type = 'node' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'home') return <g {...common}><circle cx="0" cy="0" r="31" /><path d="M-16 3 0-15 16 3v17H-16Z" /><path d="M-5 20V7H5v13" /></g>
  if (type === 'profile') return <g {...common}><circle cx="0" cy="-12" r="14" /><path d="M-31 31c8-28 54-28 62 0" /></g>
  if (type === 'experience') return <g {...common}><path d="M-30-25h60v53h-60zM-12-25v-10h24v10M-30-4h60" /><path d="M-5-4h10" /></g>
  if (type === 'skills') return <g {...common}><path d="M0-35v70M-35 0h70M-25-25l50 50M25-25l-50 50" /><circle cx="0" cy="0" r="12" fill="currentColor" /></g>
  if (type === 'projects') return <g {...common}><path d="m-28-26-20 26 20 26M28-26 48 0 28 26M12-36-12 36" /></g>
  if (type === 'school') return <g {...common}><path d="M-42-4 0-27 42-4 0 19Z" /><path d="M-25 12v19M-8 21v19M8 21v19M25 12v19M-37 40h74" /></g>
  if (type === 'forecast') return <g {...common}><path d="M-38 27-15 4 1 15 36-29" /><path d="M16-29h20v20" /><circle cx="-38" cy="27" r="4" fill="currentColor" /><circle cx="1" cy="15" r="4" fill="currentColor" /></g>
  if (type === 'curve') return <g {...common}><path d="M-42 28H42M-33 24C-13 22-7 15 4 2 17-14 25-16 35-16" /><path d="M-34-25h68" strokeDasharray="10 9" /></g>
  if (type === 'valuation') return <g {...common}><circle cx="0" cy="0" r="35" /><path d="M-10-17c9-6 26-1 22 9-4 12-34 6-28 20 4 10 21 10 29 2M0-28v56" /></g>
  if (type === 'dollar') return <g {...common}><path d="M0-37v74M-20-22c5-11 35-11 40 0 4 11-6 15-20 20-14 5-24 10-20 21 5 11 35 11 40 0" /></g>
  if (type === 'features') return <g {...common}><circle cx="-28" cy="-20" r="7" /><circle cx="30" cy="-12" r="7" /><circle cx="-8" cy="30" r="7" /><path d="M-22-16 23-13M-23-14-5 24M25-6-4 24" /></g>
  if (type === 'contact') return <g {...common}><path d="M-38-20h76v40h-76zM-38-20 0 8l38-28" /></g>
  if (type === 'links') return <g {...common}><path d="M-7-18 7-32c13-13 34 6 21 20L12 5M7 18-7 32c-13 13-34-6-21-20L-12-5M-18 18 18-18" /></g>
  if (type === 'archive') return <g {...common}><path d="M-37-23h74v58h-74zM-43-31h86v12h-86zM-10 4h20" /></g>
  if (type === 'note') return <g {...common}><path d="M-30-34h44l16 16v52h-60zM14-34v16h16M-17 2h34M-17 19h26" /></g>
  if (type === 'atom') return <g {...common}><circle cx="0" cy="0" r="8" fill="currentColor" /><ellipse cx="0" cy="0" rx="39" ry="16" /><ellipse cx="0" cy="0" rx="16" ry="39" /><circle cx="36" cy="0" r="4" fill="currentColor" /></g>
  if (type === 'geiger') return <g {...common}><rect x="-40" y="-23" width="80" height="46" rx="12" /><path d="M-25 0h12l8-13 10 27 9-14h12" /></g>
  if (type === 'hammer') return <g {...common}><path d="M-21-29 21 13M-30-22l21-21 27 27-21 21zM11 3l20 20" /></g>
  if (type === 'vial') return <g {...common}><path d="M-14-36h28M-8-36v27l-18 28q-4 17 26 17t26-17L8-9v-27" /><path d="M-19 11q19-10 38 0" /></g>
  if (type === 'cat') return <g {...common}><path d="M-30 7V-27l17 12L0-29l13 14 17-12V7c0 22-60 22-60 0Z" /><circle cx="-11" cy="0" r="2" fill="currentColor" /><circle cx="11" cy="0" r="2" fill="currentColor" /><path d="M-5 11h10" /></g>
  return <g {...common}><circle cx="0" cy="0" r="31" /><path d="M-13 0h26M0-13v26" /></g>
}

function Marker({ item, active, onActivate, onFocus }) {
  const home = item.home
  return (
    <g
      id={`location_${item.id}`}
      data-hook={item.hook}
      className={`archipelago-marker ${active ? 'map-location-active' : ''} ${home ? 'archipelago-home' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`${item.label}: ${item.sub}. ${item.lore}`}
      onClick={event => { event.stopPropagation(); onActivate(item) }}
      onFocus={() => onFocus(item.id)}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onActivate(item)
        }
      }}
    >
      <ellipse cx={item.x} cy={item.y + 78} rx={item.w / 2 - 8} ry="13" fill="rgba(10,10,11,.18)" className="archipelago-shadow" />
      {home ? (
        <circle cx={item.x} cy={item.y} r="76" className="archipelago-home-ring" />
      ) : (
        <path d={`M ${item.x - item.w / 2} ${item.y - item.h / 2 + 22} L ${item.x} ${item.y - item.h / 2} L ${item.x + item.w / 2} ${item.y - item.h / 2 + 22} L ${item.x + item.w / 2 - 18} ${item.y + item.h / 2} L ${item.x - item.w / 2 + 18} ${item.y + item.h / 2} Z`} className="archipelago-plate" />
      )}
      <g transform={`translate(${item.x} ${item.y + (home ? 1 : 4)})`} className="archipelago-glyph"><Glyph type={item.glyph} /></g>
      <text x={item.x} y={item.y - item.h / 2 + 25} className="archipelago-label" textAnchor="middle">{item.label}</text>
      <text x={item.x} y={item.y + item.h / 2 - 17} className="archipelago-sub" textAnchor="middle">{item.sub}</text>
      {active && <text x={item.x} y={item.y - item.h / 2 - 18} className="archipelago-enter" textAnchor="middle">ENTER ↵</text>}
    </g>
  )
}

export function DetailSection({ heading, children }) {
  return <section className="map-detail-section"><h3>{heading}</h3>{children}</section>
}

export function InteractiveMap({ id, eyebrow, title, subtitle, locations, footer, children }) {
  const navigate = useNavigate()
  const wrapRef = React.useRef(null)
  const [player, setPlayer] = React.useState({ x: 1200, y: 810 })
  const [activeId, setActiveId] = React.useState(() => locations.find(item => !item.home)?.id ?? locations[0]?.id)
  const active = locations.find(item => item.id === activeId) ?? locations[0]
  const activeRef = React.useRef(active)
  const activateRef = React.useRef(null)

  const focusItem = React.useCallback(item => setActiveId(item.id), [])
  const activate = React.useCallback(item => {
    setActiveId(item.id)
    if (item.to) navigate(item.to)
    if (item.onEnter) item.onEnter()
  }, [navigate])

  React.useEffect(() => { activeRef.current = active }, [active])
  React.useEffect(() => { activateRef.current = activate }, [activate])

  React.useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const previousOverscroll = document.documentElement.style.overscrollBehavior
    const preventScroll = event => event.preventDefault()
    const onKeyDown = event => {
      const key = event.key.toLowerCase()
      if (DIRECTIONS[key]) {
        event.preventDefault()
        const direction = DIRECTIONS[key]
        setPlayer(current => ({ x: clamp(current.x + direction.x * 72), y: clamp(current.y + direction.y * 72) }))
        return
      }
      if ((event.key === 'Enter' || event.key === ' ') && document.activeElement === wrapRef.current) {
        event.preventDefault()
        if (activeRef.current) activateRef.current(activeRef.current)
      }
    }
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    window.addEventListener('keydown', onKeyDown, { capture: true, passive: false })
    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventScroll, { passive: false })
    window.requestAnimationFrame(() => wrapRef.current?.focus())
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overscrollBehavior = previousOverscroll
      window.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventScroll)
    }
  }, [])

  React.useEffect(() => {
    const nearby = locations
      .filter(item => !item.home)
      .sort((a, b) => Math.hypot(player.x - a.x, player.y - a.y) - Math.hypot(player.x - b.x, player.y - b.y))[0]
    if (nearby && Math.hypot(player.x - nearby.x, player.y - nearby.y) < 190) setActiveId(nearby.id)
  }, [locations, player])

  const moveOnMap = event => {
    const box = event.currentTarget.getBoundingClientRect()
    setPlayer({
      x: clamp((event.clientX - box.left) / box.width * WORLD.w),
      y: clamp((event.clientY - box.top) / box.height * WORLD.h),
    })
    wrapRef.current?.focus()
  }

  return (
    <main className="archipelago-root" data-hook={`${id}-map`} ref={wrapRef} tabIndex={0} aria-label={`${title} interactive map`} onPointerDown={event => event.currentTarget.focus()}>
      <style>{`
        @keyframes archipelagoFlash{0%,49%{fill:${PALETTE.sepia}}50%,100%{fill:${PALETTE.blueSepia}}}
        @keyframes archipelagoBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .archipelago-root{isolation:isolate;position:relative;min-height:100dvh;height:100dvh;overflow:hidden;background:${PALETTE.sea};color:${PALETTE.ink};font-family:Inter,ui-sans-serif,system-ui,sans-serif;outline:none;filter:sepia(.38) saturate(.82)}
        .archipelago-root:before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(232,224,200,.22),transparent 21%,transparent 72%,rgba(10,10,11,.13));mix-blend-mode:soft-light}
        .archipelago-map{width:100%;height:100%;display:block;cursor:crosshair}
        .archipelago-plate{fill:${PALETTE.paper};stroke:${PALETTE.ink};stroke-width:5;stroke-linejoin:round}.archipelago-marker{cursor:pointer;color:${PALETTE.ink};outline:none}.archipelago-marker:hover .archipelago-plate,.archipelago-marker:focus .archipelago-plate{fill:${PALETTE.blueSepia}}.archipelago-marker.map-location-active .archipelago-plate{animation:archipelagoFlash .28s steps(1) infinite}.archipelago-glyph{color:${PALETTE.ink}}.archipelago-label,.archipelago-sub,.archipelago-enter{font-family:"JetBrains Mono",ui-monospace,monospace;fill:${PALETTE.ink};font-weight:800}.archipelago-label{font-size:24px;letter-spacing:3px}.archipelago-sub{font-size:14px;letter-spacing:1.6px}.archipelago-enter{font-size:13px;letter-spacing:2px}.archipelago-home-ring{fill:${PALETTE.paper};stroke:${PALETTE.ink};stroke-width:6;stroke-dasharray:11 8}.archipelago-marker:hover .archipelago-home-ring,.archipelago-marker:focus .archipelago-home-ring{fill:${PALETTE.blueSepia}}.archipelago-marker.map-location-active .archipelago-home-ring{animation:archipelagoFlash .28s steps(1) infinite}.archipelago-shadow{filter:blur(2px)}
        .archipelago-player{animation:archipelagoBob .8s ease-in-out infinite}.archipelago-player *{stroke:${PALETTE.ink};stroke-linejoin:round;stroke-linecap:round}.archipelago-crest{position:absolute;z-index:4;top:clamp(12px,2.4vw,30px);left:clamp(12px,2.8vw,44px);max-width:min(585px,calc(100vw - 24px));pointer-events:none}.archipelago-eyebrow{font:800 clamp(8px,1vw,13px)/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.24em}.archipelago-title{margin:7px 0 0;font-size:clamp(29px,5.4vw,68px);line-height:.94;letter-spacing:-.075em}.archipelago-subtitle{max-width:560px;margin:10px 0 0;font-size:clamp(11px,1.35vw,15px);line-height:1.45}.archipelago-card{position:absolute;z-index:5;right:clamp(12px,2.8vw,44px);bottom:clamp(12px,2.8vw,38px);width:min(390px,calc(100vw - 24px));max-height:min(52dvh,500px);overflow:auto;border:3px solid ${PALETTE.ink};border-radius:16px;background:rgba(232,224,200,.95);box-shadow:8px 8px 0 rgba(10,10,11,.22);padding:16px 17px 15px}.archipelago-card-header{display:flex;gap:12px;align-items:baseline;border-bottom:2px solid rgba(10,10,11,.22);padding-bottom:10px}.archipelago-card h2{margin:0;font:800 16px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.1em}.archipelago-card-kicker{font:800 9px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.16em;opacity:.72}.archipelago-card p{font-size:13px;line-height:1.5;margin:10px 0 0}.map-detail-section{margin:12px 0 0}.map-detail-section h3{margin:0 0 6px;font:800 10px/1.2 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.14em}.map-detail-section ul{margin:0;padding-left:18px;font-size:12px;line-height:1.52}.map-detail-section a,.map-detail-section button{color:${PALETTE.ink};font-weight:800}.archipelago-action{display:inline-flex;align-items:center;justify-content:center;margin-top:13px;padding:9px 11px;border:2px solid ${PALETTE.ink};border-radius:7px;background:${PALETTE.blueSepia};color:${PALETTE.ink};font:800 10px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.11em;text-decoration:none;cursor:pointer}.archipelago-action:hover{background:${PALETTE.ink};color:${PALETTE.paper}}.archipelago-hud{position:absolute;z-index:4;left:clamp(12px,2.8vw,44px);bottom:clamp(12px,2.8vw,38px);max-width:min(525px,calc(100vw - 24px));font:800 10px/1.35 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.06em}.archipelago-hud span{display:inline-block;padding:8px 10px;border:2px solid ${PALETTE.ink};background:rgba(232,224,200,.94);border-radius:8px}.archipelago-compass{position:absolute;right:clamp(14px,2.8vw,44px);top:clamp(14px,2.8vw,38px);z-index:4;width:70px;height:70px;border:2px solid ${PALETTE.ink};border-radius:50%;display:grid;place-items:center;background:rgba(232,224,200,.78);font:800 11px/1 "JetBrains Mono",ui-monospace,monospace}.archipelago-compass:before{content:"";position:absolute;width:1px;height:48px;background:${PALETTE.ink}}.archipelago-compass:after{content:"";position:absolute;width:48px;height:1px;background:${PALETTE.ink}}.archipelago-compass b{z-index:1;background:${PALETTE.paper};padding:3px}.archipelago-overlay{position:absolute;z-index:3;inset:0;pointer-events:none;background-image:radial-gradient(rgba(10,10,11,.32) .8px,transparent .8px);background-size:13px 13px;mix-blend-mode:multiply;opacity:.17}
        @media(max-width:720px){.archipelago-crest{top:13px}.archipelago-title{font-size:31px}.archipelago-subtitle{max-width:270px;font-size:11px}.archipelago-compass{width:47px;height:47px;font-size:8px}.archipelago-compass:before{height:31px}.archipelago-compass:after{width:31px}.archipelago-card{left:10px;right:10px;bottom:10px;width:auto;max-height:42dvh;padding:12px}.archipelago-hud{display:none}.archipelago-label{font-size:22px}.archipelago-sub{font-size:13px}.archipelago-map{min-width:620px;transform:translateX(calc((100vw - 620px)/2));width:620px}.archipelago-root{background:${PALETTE.sea}}}
        @media(prefers-reduced-motion:reduce){.archipelago-player,.archipelago-marker.map-location-active .archipelago-plate,.archipelago-marker.map-location-active .archipelago-home-ring{animation:none}}
      `}</style>
      <div className="archipelago-overlay" />
      <svg className="archipelago-map" viewBox={`0 0 ${WORLD.w} ${WORLD.h}`} preserveAspectRatio="xMidYMid slice" onClick={moveOnMap}>
        <defs>
          <pattern id={`${id}-hatch`} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="28" stroke={PALETTE.ink} strokeWidth="2" opacity=".16" /></pattern>
          <pattern id={`${id}-grain`} width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1" fill={PALETTE.ink} opacity=".25" /><circle cx="12" cy="11" r=".7" fill={PALETTE.ink} opacity=".2" /></pattern>
        </defs>
        <rect width={WORLD.w} height={WORLD.h} fill={PALETTE.sea} />
        <path d="M120 926 C143 443 498 231 822 303 C1050 164 1398 210 1640 414 C2020 378 2310 645 2212 1024 C2154 1252 1853 1374 1580 1306 C1322 1454 1012 1430 796 1286 C426 1391 98 1229 120 926Z" fill={PALETTE.sepiaLight} stroke={PALETTE.ink} strokeWidth="10" />
        <path d="M205 914 C237 506 550 353 831 393 C1051 267 1374 308 1586 492 C1913 454 2134 663 2072 982 C2024 1174 1786 1263 1556 1209 C1291 1344 1030 1324 828 1194 C517 1293 188 1165 205 914Z" fill={PALETTE.paper} stroke={PALETTE.ink} strokeWidth="5" />
        <path d="M205 914 C237 506 550 353 831 393 C1051 267 1374 308 1586 492 C1913 454 2134 663 2072 982 C2024 1174 1786 1263 1556 1209 C1291 1344 1030 1324 828 1194 C517 1293 188 1165 205 914Z" fill={`url(#${id}-hatch)`} />
        <path d="M302 913C441 610 664 501 886 527C1086 396 1309 435 1474 582C1718 568 1890 712 1835 936C1769 1119 1532 1163 1350 1089C1136 1199 921 1157 759 1066C546 1140 350 1070 302 913Z" fill="none" stroke={PALETTE.ink} strokeWidth="4" strokeDasharray="16 18" opacity=".48" />
        <g fill="none" stroke={PALETTE.ink} strokeWidth="4" opacity=".52" strokeDasharray="8 17">
          <path d="M412 648Q760 515 1060 608T1720 615" /><path d="M414 1068Q770 1160 1045 1054T1802 1065" /><path d="M684 396Q725 717 615 1018" /><path d="M1200 353Q1120 710 1270 1240" /><path d="M1635 498Q1487 768 1721 1148" />
        </g>
        <g fill={PALETTE.ink} opacity=".42">{Array.from({ length: 62 }, (_, index) => <circle key={index} cx={390 + (index * 139) % 1450} cy={450 + (index * 97) % 690} r={index % 3 + 1.5} />)}</g>
        <rect width={WORLD.w} height={WORLD.h} fill={`url(#${id}-grain)`} opacity=".25" />
        <text x="1200" y="144" textAnchor="middle" fill={PALETTE.ink} fontFamily="JetBrains Mono,ui-monospace,monospace" fontWeight="800" fontSize="22" letterSpacing="10">ESPRIT ARCHIPELAGO / {id.toUpperCase()}</text>
        {locations.map(item => <Marker key={item.id} item={item} active={active?.id === item.id} onActivate={activate} onFocus={focusItem} />)}
        <g className="archipelago-player" transform={`translate(${player.x} ${player.y})`} pointerEvents="none">
          <ellipse cx="0" cy="31" rx="19" ry="7" fill="rgba(10,10,11,.22)" stroke="none" /><path d="M-9 4-13 30M9 4 13 30M-10-5-24 8M10-5 24 8" fill="none" strokeWidth="7" /><path d="M-16-10Q0-23 16-10L12 12Q0 18-12 12Z" fill={PALETTE.blueSepia} strokeWidth="4" /><circle cx="0" cy="-31" r="15" fill={PALETTE.paper} strokeWidth="4" /><path d="M-17-35Q0-51 17-35L12-28H-12Z" fill={PALETTE.ink} stroke="none" />
        </g>
      </svg>
      <div className="archipelago-crest"><div className="archipelago-eyebrow">{eyebrow}</div><h1 className="archipelago-title">{title}</h1><p className="archipelago-subtitle">{subtitle}</p></div>
      <div className="archipelago-compass" aria-hidden="true"><b>N</b></div>
      <aside className="archipelago-card" aria-live="polite">
        <div className="archipelago-card-header"><div><div className="archipelago-card-kicker">MAP REGION</div><h2>{active?.label}</h2></div><span className="archipelago-card-kicker">{active?.sub}</span></div>
        <p>{active?.lore}</p>
        {active?.detail}
        {active?.to && <button className="archipelago-action" type="button" onClick={() => navigate(active.to)}>{active.home ? '← RETURN TO ARCHIPELAGO' : `OPEN ${active.label} →`}</button>}
        {active?.action && <button className="archipelago-action" type="button" onClick={active.action}>{active.actionLabel ?? 'RUN EXPERIMENT →'}</button>}
      </aside>
      <div className="archipelago-hud"><span>WASD / ARROWS · WALK THE MAP · ENTER TO INSPECT · CLICK A REGION</span>{footer && <span style={{ marginTop: 7 }}>{footer}</span>}</div>
      {children}
    </main>
  )
}
