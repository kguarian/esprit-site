import React from 'react'
import { useNavigate } from 'react-router-dom'

const PALETTE = {
  ink: '#101112',
  land: '#C9BFA6',
  landLight: '#E5DCC6',
  paper: '#F5EED8',
  sea: '#AAB5B7',
  seaDark: '#819195',
  signal: '#6E849B',
}

const WORLD = { width: 2000, height: 1400 }
const VIEW = { width: 1000, height: 650 }
const PLAYER_START = { x: 980, y: 690 }

const LOCATIONS = [
  {
    id: 'profile',
    label: 'KENTON',
    sub: 'PROFILE + CV',
    href: '/kenton',
    x: 680,
    y: 470,
    w: 210,
    h: 126,
    glyph: 'profile',
    lore: 'Mathematics–Computer Science, UC San Diego — signal research and software.',
  },
  {
    id: 'research',
    label: 'RESEARCH',
    sub: 'SIGNALS + PAPERS',
    href: '/links',
    x: 1230,
    y: 430,
    w: 218,
    h: 126,
    glyph: 'research',
    lore: 'Research references, collaborators, and places to find the work.',
  },
  {
    id: 'models',
    label: 'ML MODELS',
    sub: 'MARKET SIGNALS',
    href: '/ml',
    x: 1090,
    y: 700,
    w: 222,
    h: 130,
    glyph: 'models',
    lore: 'SPY and NVDA experiments, yield curves, features, and validation.',
  },
  {
    id: 'code',
    label: 'CODE',
    sub: 'BUILDS + SYSTEMS',
    href: '/code',
    x: 580,
    y: 790,
    w: 212,
    h: 126,
    glyph: 'code',
    lore: 'Software projects, systems work, and things made to ship.',
  },
  {
    id: 'connect',
    label: 'CONNECT',
    sub: 'SAY HELLO',
    href: '/contact',
    x: 1450,
    y: 810,
    w: 190,
    h: 118,
    glyph: 'connect',
    lore: 'Start a conversation or send a note.',
  },
  {
    id: 'archive',
    label: 'MORE',
    sub: 'NOTES + ARCHIVE',
    href: '/more',
    x: 950,
    y: 1030,
    w: 208,
    h: 120,
    glyph: 'archive',
    lore: 'Additional notes, experiments, and the rest of the archive.',
  },
]

const DIRECTIONS = {
  arrowup: { x: 0, y: -1 },
  w: { x: 0, y: -1 },
  arrowdown: { x: 0, y: 1 },
  s: { x: 0, y: 1 },
  arrowleft: { x: -1, y: 0 },
  a: { x: -1, y: 0 },
  arrowright: { x: 1, y: 0 },
  d: { x: 1, y: 0 },
}

function clampPosition(position) {
  return {
    x: Math.max(28, Math.min(WORLD.width - 28, position.x)),
    y: Math.max(28, Math.min(WORLD.height - 28, position.y)),
  }
}

function LocationGlyph({ glyph, x, y }) {
  const stroke = { fill: 'none', stroke: PALETTE.ink, strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

  if (glyph === 'profile') {
    return <g {...stroke}><circle cx={x} cy={y - 8} r="13" /><path d={`M ${x - 25} ${y + 24} q 25 -23 50 0`} /></g>
  }

  if (glyph === 'research') {
    return <g {...stroke}><path d={`M ${x - 36} ${y + 8} C ${x - 20} ${y - 24}, ${x - 3} ${y + 25}, ${x + 12} ${y - 6} S ${x + 36} ${y - 24}, ${x + 40} ${y + 11}`} /><circle cx={x - 36} cy={y + 8} r="3" fill={PALETTE.ink} /><circle cx={x + 40} cy={y + 11} r="3" fill={PALETTE.ink} /></g>
  }

  if (glyph === 'models') {
    return <g {...stroke}><path d={`M ${x - 36} ${y + 25} L ${x - 18} ${y + 3} L ${x + 4} ${y + 14} L ${x + 33} ${y - 25}`} /><circle cx={x - 36} cy={y + 25} r="4" fill={PALETTE.paper} /><circle cx={x - 18} cy={y + 3} r="4" fill={PALETTE.paper} /><circle cx={x + 4} cy={y + 14} r="4" fill={PALETTE.paper} /><circle cx={x + 33} cy={y - 25} r="4" fill={PALETTE.paper} /></g>
  }

  if (glyph === 'code') {
    return <g {...stroke}><path d={`M ${x - 30} ${y - 25} L ${x - 48} ${y} L ${x - 30} ${y + 25} M ${x + 30} ${y - 25} L ${x + 48} ${y} L ${x + 30} ${y + 25} M ${x + 12} ${y - 33} L ${x - 12} ${y + 33}`} /></g>
  }

  if (glyph === 'connect') {
    return <g {...stroke}><path d={`M ${x - 40} ${y - 3} L ${x + 38} ${y - 31} L ${x + 11} ${y + 37} L ${x - 4} ${y + 8} Z`} /><path d={`M ${x - 4} ${y + 8} L ${x + 38} ${y - 31}`} /></g>
  }

  return <g {...stroke}><path d={`M ${x - 34} ${y - 24} h 68 v 49 h -68 Z M ${x - 34} ${y - 8} h 68 M ${x - 12} ${y - 24} v 49`} /><circle cx={x + 14} cy={y + 8} r="4" fill={PALETTE.ink} /></g>
}

function MapLocation({ location, active, onEnter }) {
  const fill = active ? PALETTE.signal : PALETTE.paper
  const glyphY = location.y + 6
  const onKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onEnter(location)
    }
  }

  return (
    <g
      id={`location_${location.id}`}
      data-hook={`map-${location.id}`}
      role="link"
      tabIndex={0}
      aria-label={`${location.label}: ${location.sub}`}
      style={{ cursor: 'pointer', outline: 'none' }}
      onClick={event => {
        event.stopPropagation()
        onEnter(location)
      }}
      onKeyDown={onKeyDown}
    >
      <ellipse cx={location.x} cy={location.y + location.h / 2 + 14} rx={location.w / 2 - 12} ry="11" fill="rgba(16,17,18,0.18)" />
      <path d={`M ${location.x - location.w / 2} ${location.y - location.h / 2 + 16} L ${location.x} ${location.y - location.h / 2} L ${location.x + location.w / 2} ${location.y - location.h / 2 + 16} L ${location.x + location.w / 2 - 14} ${location.y + location.h / 2} L ${location.x - location.w / 2 + 14} ${location.y + location.h / 2} Z`} fill={fill} className={active ? 'map-location-active map-ink' : 'map-ink'} strokeWidth="3.2" />
      <path d={`M ${location.x - location.w / 2 + 15} ${location.y - location.h / 2 + 32} H ${location.x + location.w / 2 - 15}`} stroke={PALETTE.ink} strokeWidth="1.5" opacity="0.48" />
      <LocationGlyph glyph={location.glyph} x={location.x} y={glyphY} />
      <text x={location.x} y={location.y - location.h / 2 + 21} textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.7" fill={PALETTE.ink}>{location.label}</text>
      <text x={location.x} y={location.y + location.h / 2 - 15} textAnchor="middle" fontSize="7.3" fontWeight="700" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="0.9" fill={PALETTE.ink}>{location.sub}</text>
      {active && <text x={location.x} y={location.y - location.h / 2 - 17} textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.3" fill={PALETTE.ink}>ENTER ↵</text>}
    </g>
  )
}

export function Home() {
  const navigate = useNavigate()
  const wrapRef = React.useRef(null)
  const positionRef = React.useRef(PLAYER_START)
  const activeRef = React.useRef(null)
  const touchDirectionRef = React.useRef(null)
  const [position, setPosition] = React.useState(PLAYER_START)
  const [camera, setCamera] = React.useState(PLAYER_START)
  const [activeId, setActiveId] = React.useState(null)
  const [atEdge, setAtEdge] = React.useState(false)
  const [viewport, setViewport] = React.useState(() => ({ width: window.innerWidth, height: window.innerHeight }))

  const enterLocation = React.useCallback(location => {
    navigate(location.href)
  }, [navigate])

  React.useEffect(() => {
    const pressedKeys = new Set()
    let frameId
    let edgeTimer

    const onKeyDown = event => {
      const key = event.key.toLowerCase()
      if (DIRECTIONS[key]) {
        event.preventDefault()
        pressedKeys.add(key)
        return
      }

      if ((event.key === 'Enter' || event.key === ' ') && document.activeElement === wrapRef.current) {
        event.preventDefault()
        const location = LOCATIONS.find(item => item.id === activeRef.current)
        if (location) enterLocation(location)
      }
    }

    const onKeyUp = event => {
      pressedKeys.delete(event.key.toLowerCase())
    }

    const clearPressedKeys = () => pressedKeys.clear()
    const tick = () => {
      let horizontal = 0
      let vertical = 0

      const activeKeys = new Set(pressedKeys)
      if (touchDirectionRef.current) activeKeys.add(touchDirectionRef.current)

      for (const key of activeKeys) {
        horizontal += DIRECTIONS[key].x
        vertical += DIRECTIONS[key].y
      }

      if (horizontal || vertical) {
        const distance = Math.hypot(horizontal, vertical) || 1
        const nextPosition = clampPosition({
          x: positionRef.current.x + (horizontal / distance) * 8.5,
          y: positionRef.current.y + (vertical / distance) * 8.5,
        })
        const reachedEdge = nextPosition.x <= 28 || nextPosition.x >= WORLD.width - 28 || nextPosition.y <= 28 || nextPosition.y >= WORLD.height - 28

        positionRef.current = nextPosition
        setPosition(nextPosition)

        if (reachedEdge && !edgeTimer) {
          setAtEdge(true)
          edgeTimer = window.setTimeout(() => navigate('/avery'), 320)
        }
      }

      setCamera(current => ({
        x: current.x + (positionRef.current.x - current.x) * 0.1,
        y: current.y + (positionRef.current.y - current.y) * 0.1,
      }))
      frameId = window.requestAnimationFrame(tick)
    }

    window.addEventListener('keydown', onKeyDown, { capture: true, passive: false })
    window.addEventListener('keyup', onKeyUp, { capture: true })
    window.addEventListener('blur', clearPressedKeys)
    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(edgeTimer)
      window.removeEventListener('keydown', onKeyDown, true)
      window.removeEventListener('keyup', onKeyUp, true)
      window.removeEventListener('blur', clearPressedKeys)
    }
  }, [enterLocation, navigate])

  React.useEffect(() => {
    const nearby = LOCATIONS.find(location => (
      Math.abs(position.x - location.x) < location.w / 2 + 28
      && Math.abs(position.y - location.y) < location.h / 2 + 28
    ))
    const nextActiveId = nearby?.id ?? null
    activeRef.current = nextActiveId
    setActiveId(nextActiveId)
  }, [position])

  React.useEffect(() => {
    const container = wrapRef.current
    if (!container) return undefined

    const previousBodyOverflow = document.body.style.overflow
    const previousOverscroll = document.documentElement.style.overscrollBehavior
    const preventScroll = event => event.preventDefault()

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    window.addEventListener('wheel', preventScroll, { passive: false })
    window.addEventListener('touchmove', preventScroll, { passive: false })
    container.focus()

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overscrollBehavior = previousOverscroll
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventScroll)
    }
  }, [])

  React.useEffect(() => {
    const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  const isPortrait = viewport.width < viewport.height
  const viewHeight = isPortrait ? 950 : VIEW.height
  const view = {
    height: viewHeight,
    width: Math.max(360, Math.min(WORLD.width, viewHeight * (viewport.width / viewport.height))),
  }
  const viewX = Math.max(0, Math.min(WORLD.width - view.width, camera.x - view.width / 2))
  const viewY = Math.max(0, Math.min(WORLD.height - view.height, camera.y - view.height / 2))
  const activeLocation = LOCATIONS.find(location => location.id === activeId)

  const moveToClick = event => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextPosition = clampPosition({
      x: viewX + ((event.clientX - bounds.left) / bounds.width) * view.width,
      y: viewY + ((event.clientY - bounds.top) / bounds.height) * view.height,
    })
    positionRef.current = nextPosition
    setPosition(nextPosition)
  }

  const beginTouchMove = direction => event => {
    event.preventDefault()
    touchDirectionRef.current = direction
    wrapRef.current?.focus()
  }

  const endTouchMove = () => {
    touchDirectionRef.current = null
  }

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      aria-label="Interactive map of Kenton Guarian's website"
      onPointerDown={event => event.currentTarget.focus()}
      style={{ minHeight: '100dvh', height: '100dvh', position: 'relative', overflow: 'hidden', background: PALETTE.sea, color: PALETTE.ink, outline: 'none' }}
    >
      <style>{`
        @keyframes mapPulse { 0%,49% { fill:${PALETTE.signal} } 50%,100% { fill:${PALETTE.paper} } }
        @keyframes mapBob { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-3px) } }
        .map-ink { stroke:${PALETTE.ink}; stroke-linecap:round; stroke-linejoin:round; }
        .map-location-active { animation:mapPulse 0.28s steps(1) infinite; }
        .map-player { animation:mapBob 0.85s ease-in-out infinite; }
        .map-touch-controls { display:none; }
        .map-touch-button { width:42px; height:42px; border:2px solid ${PALETTE.ink}; border-radius:10px; background:${PALETTE.paper}; color:${PALETTE.ink}; font:700 20px/1 ui-monospace, monospace; touch-action:none; }
        .map-touch-button:active { background:${PALETTE.signal}; color:${PALETTE.paper}; }
        .map-touch-up { grid-column:2; grid-row:1; }
        .map-touch-left { grid-column:1; grid-row:2; }
        .map-touch-down { grid-column:2; grid-row:2; }
        .map-touch-right { grid-column:3; grid-row:2; }
        @media (max-width: 700px) {
          .map-touch-controls { position:absolute; right:10px; bottom:10px; z-index:5; display:grid; grid-template-columns:repeat(3,42px); grid-template-rows:repeat(2,42px); gap:4px; }
          .map-hud { right:154px !important; bottom:10px !important; align-items:flex-start !important; }
          .map-keyboard-help, .map-site-note { display:none; }
          .map-lore { max-width:calc(100vw - 176px) !important; font-size:9px; }
        }
        @media (prefers-reduced-motion: reduce) { .map-location-active, .map-player { animation:none; } }
      `}</style>
      {atEdge && <div style={{ position: 'absolute', inset: 0, zIndex: 20, display: 'grid', placeItems: 'center', background: 'rgba(16,17,18,0.78)', color: PALETTE.paper, fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 18, letterSpacing: 5 }}>MAP EDGE → THE HOLLOW</div>}
      <svg
        viewBox={`${viewX} ${viewY} ${view.width} ${view.height}`}
        style={{ display: 'block', width: '100%', height: '100dvh' }}
        onClick={moveToClick}
      >
        <rect x="0" y="0" width={WORLD.width} height={WORLD.height} fill={PALETTE.sea} />
        <rect x="0" y="0" width={WORLD.width} height={WORLD.height} fill="url(#paper-grain)" opacity="0.32" />
        <path d="M 175 525 C 205 280, 480 145, 770 190 C 1010 118, 1390 175, 1600 378 C 1815 580, 1730 948, 1480 1100 C 1235 1242, 890 1198, 630 1160 C 350 1120, 135 850, 175 525 Z" fill={PALETTE.land} className="map-ink" strokeWidth="4" />
        <path d="M 245 530 C 278 335, 508 226, 775 258 C 1010 190, 1332 238, 1512 410 C 1696 585, 1630 887, 1414 1024 C 1192 1154, 902 1102, 660 1086 C 415 1066, 218 825, 245 530 Z" fill={PALETTE.landLight} className="map-ink" strokeWidth="2.4" />
        <path d="M 310 562 C 390 370, 566 336, 750 355 C 936 281, 1220 322, 1404 471 C 1524 569, 1554 772, 1435 912 C 1305 1060, 1045 1042, 855 1010 C 600 1030, 390 904, 310 720 Z" fill="none" className="map-ink" strokeWidth="1.4" strokeDasharray="8 11" opacity="0.45" />
        <g fill="none" className="map-ink" strokeWidth="1.35" opacity="0.62">
          {Array.from({ length: 13 }, (_, index) => <path key={`wave-top-${index}`} d={`M ${index * 175 - 70} 135 q 28 -11 56 0 t 56 0 t 56 0`} />)}
          {Array.from({ length: 15 }, (_, index) => <path key={`wave-bottom-${index}`} d={`M ${index * 155 - 30} 1290 q 26 -10 52 0 t 52 0`} />)}
          {Array.from({ length: 7 }, (_, index) => <path key={`wave-left-${index}`} d={`M 72 ${260 + index * 125} q -10 24 0 48 t 0 48`} />)}
          {Array.from({ length: 7 }, (_, index) => <path key={`wave-right-${index}`} d={`M 1928 ${255 + index * 125} q 10 24 0 48 t 0 48`} />)}
        </g>
        <g className="map-ink" fill="none" strokeWidth="1.6" strokeDasharray="5 9" opacity="0.48">
          <path d="M 680 470 Q 908 402 1230 430" />
          <path d="M 680 470 Q 694 665 580 790" />
          <path d="M 1230 430 Q 1140 580 1090 700" />
          <path d="M 1090 700 Q 1272 738 1450 810" />
          <path d="M 1090 700 Q 1028 884 950 1030" />
        </g>
        <g opacity="0.5" fill={PALETTE.ink}>
          {Array.from({ length: 35 }, (_, index) => {
            const x = 360 + ((index * 137) % 1130)
            const y = 300 + ((index * 83) % 730)
            const distanceFromCenter = ((x - 980) ** 2) / (730 ** 2) + ((y - 700) ** 2) / (475 ** 2)
            return distanceFromCenter < 1 ? <circle key={`contour-${index}`} cx={x} cy={y} r="2.2" /> : null
          })}
        </g>
        <text x="1000" y="224" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="5" fill={PALETTE.ink}>KENTON GUIARIAN / FIELD MAP</text>
        <text x="1000" y="245" textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="2.2" fill={PALETTE.ink} opacity="0.72">SELECT A REGION TO EXPLORE THE SITE</text>
        {LOCATIONS.map(location => <MapLocation key={location.id} location={location} active={activeId === location.id} onEnter={enterLocation} />)}
        <g transform={`translate(${position.x}, ${position.y})`} className="map-player" pointerEvents="none">
          <ellipse cx="0" cy="20" rx="13" ry="5" fill="rgba(16,17,18,0.2)" />
          <path d="M -8 3 L -10 20 M 8 3 L 10 20" stroke={PALETTE.ink} strokeWidth="4" strokeLinecap="round" />
          <path d="M -12 -8 Q 0 -17 12 -8 L 9 8 Q 0 13 -9 8 Z" fill={PALETTE.signal} stroke={PALETTE.ink} strokeWidth="2" strokeLinejoin="round" />
          <path d="M -10 -6 L -20 3 M 10 -6 L 20 3" stroke={PALETTE.ink} strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="-20" r="11" fill={PALETTE.paper} stroke={PALETTE.ink} strokeWidth="2" />
          <path d="M -13 -24 Q 0 -37 13 -24 L 10 -18 H -10 Z" fill={PALETTE.ink} />
          <circle cx="-4" cy="-20" r="1.4" fill={PALETTE.ink} /><circle cx="4" cy="-20" r="1.4" fill={PALETTE.ink} />
        </g>
        <g fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="8" fill={PALETTE.ink} opacity="0.6" textAnchor="middle">
          <text x="1000" y="42">NORTH / THE HOLLOW</text>
          <text x="1000" y="1372">SOUTH / THE HOLLOW</text>
        </g>
        <defs>
          <pattern id="paper-grain" width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="0.8" fill={PALETTE.ink} /><circle cx="10" cy="9" r="0.6" fill={PALETTE.ink} /></pattern>
        </defs>
      </svg>
      <div className="map-hud" style={{ position: 'absolute', left: 12, right: 12, bottom: 12, zIndex: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span className="map-keyboard-help" style={{ padding: '8px 11px', borderRadius: 999, background: PALETTE.ink, color: PALETTE.paper }}>WASD / ARROWS · CLICK TO WALK · ENTER TO OPEN</span>
          <span className="map-lore" aria-live="polite" style={{ maxWidth: 420, padding: '7px 10px', border: `2px solid ${PALETTE.ink}`, borderRadius: 999, background: 'rgba(245,238,216,0.92)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{activeLocation ? activeLocation.lore : 'Tap the map to move, or use the direction controls.'}</span>
        </div>
        <div className="map-site-note" style={{ maxWidth: 290, padding: '8px 10px', border: `2px solid ${PALETTE.ink}`, borderRadius: 10, background: 'rgba(245,238,216,0.92)', lineHeight: 1.45 }}>
          <strong>ESPRIT MAP</strong> — a navigable index of Kenton’s work, research, models, code, and contact points.
        </div>
      </div>
      <div className="map-touch-controls" onPointerUp={endTouchMove} onPointerCancel={endTouchMove} onPointerLeave={endTouchMove}>
        <button type="button" className="map-touch-button map-touch-up" aria-label="Move up" onPointerDown={beginTouchMove('arrowup')}>↑</button>
        <button type="button" className="map-touch-button map-touch-left" aria-label="Move left" onPointerDown={beginTouchMove('arrowleft')}>←</button>
        <button type="button" className="map-touch-button map-touch-down" aria-label="Move down" onPointerDown={beginTouchMove('arrowdown')}>↓</button>
        <button type="button" className="map-touch-button map-touch-right" aria-label="Move right" onPointerDown={beginTouchMove('arrowright')}>→</button>
      </div>
    </div>
  )
}
