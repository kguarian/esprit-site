import React from 'react'
import { useNavigate } from 'react-router-dom'

const PALETTE = {
  ink: '#0A0A0B',
  land: '#9A8E7A',
  landLight: '#C2B8A3',
  paper: '#E8E0C8',
  sea: '#8E9EAC',
  seaDark: '#6B6254',
  signal: '#7E8FA3',
  neonPink: '#D85C8A',
  neonMint: '#82D7C6',
}

const DEFAULT_AVATAR = {
  callSign: 'VISITOR',
  jacket: '#536A7B',
  accent: '#D85C8A',
  hair: '#1E2024',
  accessory: 'cap',
}

const AVATAR_OPTIONS = {
  jacket: ['#536A7B', '#8A594B', '#4F725E', '#75678B'],
  accent: ['#D85C8A', '#82D7C6', '#E3B85A', '#D96B52'],
  hair: ['#1E2024', '#5C3D2C', '#C09A67', '#6C7384'],
  accessory: ['cap', 'visor', 'headphones', 'none'],
}

const WORLD = { width: 5200, height: 3600 }
const VIEW = { width: 1000, height: 650 }
const PLAYER_START = { x: 980, y: 690 }

const FOREST_ZONES = [
  { id: 'mosswind', x: 520, y: 1090, rx: 250, ry: 205, label: 'MOSSWIND WOODS' },
  { id: 'blackpine', x: 1660, y: 645, rx: 270, ry: 190, label: 'BLACKPINE COVER' },
  { id: 'cloudroot', x: 2240, y: 1295, rx: 230, ry: 185, label: 'CLOUDROOT THICKET' },
  { id: 'orchard', x: 760, y: 1510, rx: 260, ry: 200, label: 'OLD ORCHARD' },
  { id: 'reedcove', x: 4520, y: 2450, rx: 260, ry: 160, label: 'REED COVE' },
]

const MOUNTAIN_ZONES = [
  { id: 'northwall', x: 2070, y: 330, rx: 390, ry: 210, label: 'NORTHWALLS' },
  { id: 'eastspine', x: 2310, y: 960, rx: 330, ry: 270, label: 'EAST SPINE' },
  { id: 'southcrags', x: 2660, y: 2810, rx: 380, ry: 230, label: 'SOUTHCRAGS' },
]

const SEA_ZONES = [
  { id: 'tideglass', x: 4050, y: 3150, rx: 900, ry: 400, label: 'TIDEGLASS SEA WORLD' },
]

// These are the narrow places where the map says “find a way around.”
// Bridges and mountain passes are left open between the segments.
const BLOCKERS = [
  { id: 'river-north-a', kind: 'river', x: 830, y: 245, w: 112, h: 245, label: 'RIVER' },
  { id: 'river-north-b', kind: 'river', x: 840, y: 585, w: 112, h: 275, label: 'RIVER' },
  { id: 'river-east-a', kind: 'river', x: 1320, y: 470, w: 120, h: 220, label: 'BROOK' },
  { id: 'river-east-b', kind: 'river', x: 1160, y: 815, w: 120, h: 205, label: 'BROOK' },
  { id: 'wall-south-a', kind: 'wall', x: 1450, y: 1470, w: 275, h: 54, label: 'OLD WALL' },
  { id: 'wall-south-b', kind: 'wall', x: 1860, y: 1470, w: 360, h: 54, label: 'OLD WALL' },
  { id: 'cliff-east-a', kind: 'cliff', x: 2130, y: 580, w: 65, h: 270, label: 'CLIFF' },
  { id: 'cliff-east-b', kind: 'cliff', x: 2130, y: 930, w: 65, h: 230, label: 'CLIFF' },
  { id: 'reef-west', kind: 'reef', x: 3150, y: 2880, w: 190, h: 105, label: 'REEF' },
  { id: 'reef-east', kind: 'reef', x: 4230, y: 3140, w: 230, h: 115, label: 'REEF' },
  { id: 'reef-south', kind: 'reef', x: 3650, y: 3340, w: 260, h: 90, label: 'REEF' },
]

const BRIDGES = [
  { x: 820, y: 505, w: 138, h: 54, label: 'MILL BRIDGE' },
  { x: 1300, y: 725, w: 158, h: 54, label: 'SIGNAL BRIDGE' },
  { x: 1690, y: 1435, w: 155, h: 72, label: 'WALL GATE' },
]

const BEASTS = [
  { id: 'strait-serpent', x: 2500, y: 1390, radius: 280, name: 'STRAIT SERPENT', cover: 'CLOUDROOT THICKET' },
  { id: 'signal-stag', x: 1515, y: 2420, radius: 220, name: 'SIGNAL STAG', cover: 'OLD ORCHARD' },
  { id: 'wyrm', x: 4050, y: 915, radius: 240, name: 'BLUE WYRM', cover: 'REED COVE' },
]

const WATERWAYS = [
  { id: 'blue-run', d: 'M 760 115 C 820 290, 950 390, 900 535 C 850 690, 1010 760, 1138 858 C 1280 967, 1240 1128, 1338 1240 C 1435 1348, 1625 1375, 1705 1530', bank: 62, width: 39 },
  { id: 'mirror-brook', d: 'M 1515 365 C 1430 505, 1460 650, 1320 735 C 1218 796, 1170 880, 1165 995', bank: 34, width: 21 },
  { id: 'mill-brook', d: 'M 395 1040 C 555 1035, 654 1125, 760 1210 C 858 1288, 960 1285, 1085 1225', bank: 27, width: 18 },
]

const WATER_RIPPLES = [
  { x: 2800, y: 700 }, { x: 3120, y: 1350 }, { x: 3830, y: 720 },
  { x: 4320, y: 1880 }, { x: 3900, y: 2680 }, { x: 2140, y: 2300 },
]

const TREE_GROVES = [
  { x: 335, y: 395, count: 18, spread: 185 },
  { x: 520, y: 1090, count: 22, spread: 210 },
  { x: 815, y: 315, count: 15, spread: 145 },
  { x: 1345, y: 310, count: 20, spread: 210 },
  { x: 1660, y: 645, count: 24, spread: 235 },
  { x: 1270, y: 1165, count: 21, spread: 205 },
  { x: 2070, y: 850, count: 28, spread: 250 },
  { x: 2240, y: 1295, count: 19, spread: 190 },
  { x: 760, y: 1510, count: 24, spread: 225 },
  { x: 1730, y: 1545, count: 16, spread: 170 },
]

const CABINS = [
  { x: 405, y: 710, label: 'mill' },
  { x: 785, y: 925, label: 'forge' },
  { x: 1375, y: 1040, label: 'inn' },
  { x: 1835, y: 415, label: 'watch' },
  { x: 2150, y: 1115, label: 'dock' },
  { x: 1005, y: 1395, label: 'study' },
  { x: 2420, y: 695, label: 'hut' },
]

const VILLAGERS = [
  { x: 505, y: 755 }, { x: 750, y: 830 }, { x: 850, y: 995 }, { x: 1160, y: 875 },
  { x: 1285, y: 975 }, { x: 1450, y: 915 }, { x: 1645, y: 730 }, { x: 1920, y: 1035 },
  { x: 2175, y: 1210 }, { x: 1015, y: 1305 }, { x: 625, y: 1365 }, { x: 2320, y: 600 },
]

const OUTER_ISLANDS = [
  { x: 3320, y: 620, w: 560, h: 330, label: 'GLASSWIND ISLE' },
  { x: 4210, y: 1120, w: 720, h: 420, label: 'WYRM REEF' },
  { x: 3435, y: 1880, w: 820, h: 510, label: 'LANTERN COMMONS' },
  { x: 4520, y: 2450, w: 620, h: 390, label: 'MOONFEN' },
  { x: 2660, y: 2810, w: 760, h: 470, label: 'SOUTHWORKS' },
  { x: 1280, y: 2740, w: 640, h: 380, label: 'OLD ORCHARD' },
]

const MAP_GAMES = [
  { id: 'runes', x: 3370, y: 630, label: 'RUNE LOCK', text: 'Rune lock solved: the northern strait opens on the next tide.' },
  { id: 'ferry', x: 2880, y: 1160, label: 'FERRY', text: 'Ferry bell rung: a skiff crosses the long blue strait.' },
  { id: 'dragon', x: 4200, y: 1080, label: 'DRAGON ROOKERY', text: 'Dragon rookery mapped: three basalt nests, one sleeping wyrmling.' },
  { id: 'pearls', x: 4550, y: 2460, label: 'PEARL DIVE', text: 'Pearl dive complete: moonfen lights ripple under the reeds.' },
  { id: 'market', x: 3460, y: 1900, label: 'LANTERN MARKET', text: 'Lantern market visited: villagers trade maps, tea, and impossible compasses.' },
]

const ENVIRONMENT_EVENTS = [
  { id: 'mill-chat', x: 405, y: 710, radius: 82, text: 'The miller offers you cloudberry tea and a suspiciously fast wi-fi password.' },
  { id: 'forge-chat', x: 785, y: 925, radius: 82, text: 'The forge hums in C minor. Someone is soldering a weather vane to a tiny antenna.' },
  { id: 'inn-chat', x: 1375, y: 1040, radius: 86, text: 'INN SIGNAL: warm soup · soft beds · local mesh network at full strength.' },
  { id: 'stag-sighting', x: 1515, y: 2420, radius: 135, text: 'A signal stag watches quietly. Its antlers blink like a faraway radio tower.' },
  { id: 'serpent-sighting', x: 2500, y: 1390, radius: 160, text: 'STRAIT SERPENT logged. It seems friendly, but it has stolen three ferry bells.' },
  { id: 'wyrm-sighting', x: 4050, y: 915, radius: 145, text: 'The little wyrm sneezes one blue spark, then pretends nothing happened.' },
]

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
  {
    id: 'avatar',
    label: 'MOD SHOP',
    sub: 'AVATAR LAB',
    x: 1810,
    y: 1190,
    w: 210,
    h: 120,
    glyph: 'profile',
    lore: 'A tiny signal shack for tuning your field avatar, colors, gear, and call sign.',
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

function zoneContains(point, zone) {
  const dx = (point.x - zone.x) / zone.rx
  const dy = (point.y - zone.y) / zone.ry
  return dx * dx + dy * dy <= 1
}

function blockerContains(point, blocker, padding = 22) {
  const onBridge = BRIDGES.some(bridge => (
    point.x >= bridge.x - 18
    && point.x <= bridge.x + bridge.w + 18
    && point.y >= bridge.y - 18
    && point.y <= bridge.y + bridge.h + 18
  ))
  if (onBridge) return false
  return point.x >= blocker.x - padding
    && point.x <= blocker.x + blocker.w + padding
    && point.y >= blocker.y - padding
    && point.y <= blocker.y + blocker.h + padding
}

function terrainAt(point) {
  const forest = FOREST_ZONES.find(zone => zoneContains(point, zone))
  const mountain = MOUNTAIN_ZONES.find(zone => zoneContains(point, zone))
  const sea = SEA_ZONES.find(zone => zoneContains(point, zone))
  return { forest, mountain, sea }
}

function moveThroughWorld(current, desired) {
  let next = clampPosition(desired)
  let blocked = null
  const xCandidate = { x: next.x, y: current.y }
  const yCandidate = { x: next.x, y: next.y }
  const xBlocker = BLOCKERS.find(item => blockerContains(xCandidate, item))
  if (xBlocker) {
    blocked = xBlocker
    next = { x: current.x, y: current.y }
  } else {
    const yBlocker = BLOCKERS.find(item => blockerContains(yCandidate, item))
    if (yBlocker) {
      blocked = yBlocker
      next = { x: next.x, y: current.y }
    }
  }
  return { next, blocked }
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

function Tree({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className="map-ink" strokeWidth="1.35">
      <path d="M 0 -18 L -13 10 H 13 Z" fill={PALETTE.landLight} />
      <path d="M 0 -29 L -10 -7 H 10 Z" fill={PALETTE.paper} opacity="0.62" />
      <path d="M 0 9 v 13" />
    </g>
  )
}

function Cabin({ x, y, label }) {
  return (
    <g transform={`translate(${x} ${y})`} className="map-ink" strokeWidth="1.8">
      <ellipse cx="0" cy="29" rx="42" ry="8" fill="rgba(16,17,18,0.15)" stroke="none" />
      <path d="M -35 -5 L 0 -34 L 35 -5 Z" fill={PALETTE.seaDark} />
      <path d="M -27 -4 H 27 V 28 H -27 Z" fill={PALETTE.paper} />
      <path d="M -7 28 V 7 H 8 V 28 M -22 8 h10 v9 h-10 M 15 8 h10 v9 h-10" />
      <path d="M 19 -18 v -21 h 10 v 29" />
      <text x="0" y="49" textAnchor="middle" fontSize="7" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.1" fill={PALETTE.ink}>{label}</text>
    </g>
  )
}

function Villager({ x, y, index = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className={`map-villager villager-route-${index % 4} map-ink`} style={{ animationDelay: `${-(index * 0.73)}s` }} strokeWidth="1.45">
        <ellipse cx="0" cy="25" rx="8" ry="3" fill="rgba(10,10,11,.16)" stroke="none" />
        <circle cx="0" cy="-9" r="5" fill={PALETTE.paper} />
        <path d="M 0 -3 v 18 M -10 4 L 10 4 M -7 25 L 0 15 L 8 25" />
        <path d="M -7 -16 q 7 -8 15 0" fill="none" />
      </g>
    </g>
  )
}

function AvatarSprite({ avatar, cursor = false }) {
  const strokeWidth = cursor ? 2.3 : 2
  return (
    <g className="avatar-sprite">
      <ellipse cx="0" cy="20" rx="13" ry="5" fill="rgba(16,17,18,0.2)" />
      <path d="M -8 3 L -10 20 M 8 3 L 10 20" stroke={PALETTE.ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M -12 -8 Q 0 -17 12 -8 L 9 8 Q 0 13 -9 8 Z" fill={avatar.jacket} stroke={PALETTE.ink} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M -10 -6 L -20 3 M 10 -6 L 20 3" stroke={PALETTE.ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M -8 -5 H 8" stroke={avatar.accent} strokeWidth="4" strokeLinecap="round" />
      <circle cx="0" cy="-20" r="11" fill={PALETTE.paper} stroke={PALETTE.ink} strokeWidth={strokeWidth} />
      <path d="M -10 -24 Q 0 -34 10 -24 L 9 -19 Q 0 -24 -9 -19 Z" fill={avatar.hair} stroke={PALETTE.ink} strokeWidth="1.5" />
      {avatar.accessory === 'cap' && <><path d="M -13 -25 Q 0 -38 13 -25 L 11 -20 H -11 Z" fill={avatar.accent} stroke={PALETTE.ink} strokeWidth="1.8" /><path d="M 7 -21 h13" stroke={PALETTE.ink} strokeWidth="2.2" /></>}
      {avatar.accessory === 'visor' && <path d="M -10 -22 Q 0 -26 10 -22 L 8 -17 Q 0 -14 -8 -17 Z" fill={avatar.accent} stroke={PALETTE.ink} strokeWidth="1.7" />}
      {avatar.accessory === 'headphones' && <><path d="M -14 -21 Q -13 -37 0 -38 Q 13 -37 14 -21" fill="none" stroke={avatar.accent} strokeWidth="3" /><rect x="-16" y="-25" width="5" height="11" rx="2" fill={PALETTE.ink} /><rect x="11" y="-25" width="5" height="11" rx="2" fill={PALETTE.ink} /></>}
      <circle cx="-4" cy="-20" r="1.35" fill={PALETTE.ink} />
      <circle cx="4" cy="-20" r="1.35" fill={PALETTE.ink} />
    </g>
  )
}

function MysticCreature({ x, y, type }) {
  if (type === 'serpent') {
    return <g transform={`translate(${x} ${y})`}><circle cx="35" cy="-8" r="102" fill={PALETTE.neonPink} opacity="0.06" stroke={PALETTE.neonPink} strokeWidth="2" strokeDasharray="8 16" /><g className="mystic-beast mystic-serpent map-ink" fill="none" strokeWidth="3" opacity="0.9"><path d="M -80 0 C -42 -35, -10 35, 28 0 S 98 8, 128 -20" /><circle cx="137" cy="-24" r="9" fill={PALETTE.paper} /><path d="M 126 -32 l -18 -18 M 132 -35 l -5 -23" /></g><text x="35" y="80" textAnchor="middle" fontSize="8" fontWeight="900" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.2" fill={PALETTE.ink}>STRAIT SERPENT</text></g>
  }
  if (type === 'stag') {
    return <g transform={`translate(${x} ${y})`}><circle cx="0" cy="5" r="78" fill={PALETTE.neonMint} opacity="0.07" stroke={PALETTE.neonMint} strokeWidth="2" strokeDasharray="8 16" /><g className="mystic-beast mystic-stag map-ink" strokeWidth="2.2"><path d="M -30 14 h50 l20 22 M -12 14 l -12 28 M 18 14 l -2 30 M 36 0 l 20 -20 M 38 2 l 28 -6 M 31 0 l 4 -25" fill="none" /><circle cx="28" cy="-4" r="9" fill={PALETTE.paper} /></g><text x="0" y="72" textAnchor="middle" fontSize="8" fontWeight="900" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.2" fill={PALETTE.ink}>SIGNAL STAG</text></g>
  }
  return <g transform={`translate(${x} ${y})`}><circle cx="5" cy="0" r="84" fill={PALETTE.neonPink} opacity="0.06" stroke={PALETTE.neonPink} strokeWidth="2" strokeDasharray="8 16" /><g className="mystic-beast mystic-dragon map-ink" strokeWidth="2.4"><path d="M -36 18 C -12 -40, 25 -40, 48 16 C 18 1, -4 2, -36 18 Z" fill={PALETTE.paper} /><path d="M -6 -18 l 11 -28 l 10 29 M -17 -4 h40" fill="none" /></g><text x="5" y="70" textAnchor="middle" fontSize="8" fontWeight="900" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.2" fill={PALETTE.ink}>BLUE WYRM</text></g>
}

function Encounter({ encounter, solved, onTrigger }) {
  return (
    <g
      transform={`translate(${encounter.x} ${encounter.y})`}
      role="button"
      tabIndex={0}
      aria-label={encounter.label}
      onClick={event => {
        event.stopPropagation()
        onTrigger(encounter)
      }}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onTrigger(encounter)
        }
      }}
      style={{ cursor: 'pointer', outline: 'none' }}
    >
      <circle cx="0" cy="0" r="34" fill={solved ? PALETTE.signal : PALETTE.paper} className="map-ink" strokeWidth="3" />
      <path d="M -14 -6 h28 M -7 -16 l 14 32 M -16 13 l 32 -26" className="map-ink" fill="none" strokeWidth="2.2" />
      <text x="0" y="54" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.1" fill={PALETTE.ink}>{encounter.label}</text>
    </g>
  )
}

function TerrainFeatures() {
  return (
    <g className="map-terrain">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {WATERWAYS.map(waterway => <g key={waterway.id}>
          <path d={waterway.d} stroke={PALETTE.seaDark} strokeWidth={waterway.bank} opacity="0.34" />
          <path d={waterway.d} stroke={PALETTE.sea} strokeWidth={waterway.width} opacity="0.95" />
          <path className="water-current" d={waterway.d} stroke={PALETTE.paper} strokeWidth="2.5" strokeDasharray="3 24" opacity="0.52" />
        </g>)}
      </g>
      <g opacity="0.72">
        {FOREST_ZONES.map(zone => <ellipse key={zone.id} cx={zone.x} cy={zone.y} rx={zone.rx} ry={zone.ry} fill={PALETTE.land} stroke={PALETTE.ink} strokeWidth="2" strokeDasharray="9 13" opacity="0.26" />)}
      </g>
      <g opacity="0.9">
        {MOUNTAIN_ZONES.map((zone, index) => <g key={zone.id}>
          <path d={`M ${zone.x - zone.rx} ${zone.y + zone.ry * 0.65} L ${zone.x - zone.rx * 0.38} ${zone.y - zone.ry * 0.75} L ${zone.x - zone.rx * 0.05} ${zone.y + zone.ry * 0.65} L ${zone.x + zone.rx * 0.4} ${zone.y - zone.ry * 0.92} L ${zone.x + zone.rx} ${zone.y + zone.ry * 0.65} Z`} fill={index % 2 ? PALETTE.land : PALETTE.landLight} className="map-ink" strokeWidth="3" />
          <path d={`M ${zone.x - zone.rx * 0.38} ${zone.y - zone.ry * 0.75} l ${zone.rx * 0.18} ${zone.ry * 0.35} l ${zone.rx * 0.15} ${-zone.ry * 0.16} l ${zone.rx * 0.12} ${zone.ry * 0.2}`} fill="none" className="map-ink" strokeWidth="3" opacity="0.52" />
          <text x={zone.x} y={zone.y + zone.ry * 0.53} textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="2" fill={PALETTE.ink} opacity="0.64">{zone.label}</text>
        </g>)}
      </g>
      <g>
        {BLOCKERS.filter(item => item.kind === 'wall' || item.kind === 'cliff').map(item => <rect key={item.id} x={item.x} y={item.y} width={item.w} height={item.h} rx="12" fill={item.kind === 'wall' ? PALETTE.seaDark : PALETTE.land} className="map-ink" strokeWidth="3" opacity="0.88" />)}
        {BRIDGES.map(bridge => <g key={bridge.label} opacity="0.92"><rect x={bridge.x} y={bridge.y} width={bridge.w} height={bridge.h} rx="7" fill={PALETTE.landLight} stroke={PALETTE.seaDark} strokeWidth="2" /><path d={`M ${bridge.x + 10} ${bridge.y + bridge.h * 0.35} H ${bridge.x + bridge.w - 10} M ${bridge.x + 10} ${bridge.y + bridge.h * 0.65} H ${bridge.x + bridge.w - 10}`} fill="none" stroke={PALETTE.seaDark} strokeWidth="1.2" opacity="0.72" /><text x={bridge.x + bridge.w / 2} y={bridge.y + bridge.h + 16} textAnchor="middle" fontSize="6.5" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing=".8" fill={PALETTE.seaDark} opacity="0.82">{bridge.label}</text></g>)}
      </g>
      <g className="map-ink" fill={PALETTE.ink} opacity="0.54" fontFamily="JetBrains Mono, ui-monospace, monospace" fontSize="8" fontWeight="800" letterSpacing="1.5">
        <text x="825" y="330" transform="rotate(30 825 330)">BLUE RUN / FAST WATER</text>
        <text x="1370" y="600" transform="rotate(-32 1370 600)">MIRROR BROOK</text>
        <text x="2040" y="1445">WALL GATE →</text>
      </g>
    </g>
  )
}

function SeaWorld() {
  const sea = SEA_ZONES[0]
  return (
    <g className="sea-world">
      <ellipse cx={sea.x} cy={sea.y} rx={sea.rx} ry={sea.ry} fill={PALETTE.seaDark} opacity="0.18" stroke={PALETTE.seaDark} strokeWidth="4" strokeDasharray="18 24" />
      <ellipse cx={sea.x} cy={sea.y} rx={sea.rx - 42} ry={sea.ry - 34} fill={PALETTE.sea} opacity="0.34" stroke={PALETTE.paper} strokeWidth="2" strokeDasharray="6 28" className="water-current" />
      <text x={sea.x} y={sea.y - sea.ry + 72} textAnchor="middle" fontSize="16" fontWeight="900" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="5" fill={PALETTE.seaDark}>TIDEGLASS / SEA WORLD</text>
      <text x={sea.x} y={sea.y - sea.ry + 98} textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="2" fill={PALETTE.seaDark}>SWIM THE CURRENT · THREAD THE REEFS · VISIT THE DEEP MARKET</text>
      <g fill="none" stroke={PALETTE.paper} opacity="0.4" strokeWidth="3">
        <path className="water-current" d="M 3220 3120 C 3460 2940, 3740 3280, 4050 3100 S 4580 2990, 4840 3200" strokeDasharray="5 28" />
        <path className="water-current water-current-slow" d="M 3330 3340 C 3600 3170, 3920 3400, 4260 3290 S 4630 3250, 4780 3400" strokeDasharray="4 32" />
      </g>
      <g className="sea-reefs" fill={PALETTE.land} stroke={PALETTE.seaDark} strokeWidth="2" opacity="0.82">
        <path d="M 3150 2985 q 28 -90 58 0 q 28 -125 58 0 q 30 -76 72 0 v 10 h -188 Z" />
        <path d="M 4230 3250 q 35 -108 72 0 q 38 -145 76 0 q 33 -96 82 0 v 12 h -230 Z" />
        <path d="M 3650 3425 q 42 -82 88 0 q 42 -116 89 0 q 36 -72 83 0 v 10 h -260 Z" />
      </g>
      <g className="sea-kelp" fill="none" stroke={PALETTE.seaDark} strokeWidth="5" opacity="0.72">
        {Array.from({ length: 22 }, (_, index) => {
          const x = 3250 + ((index * 157) % 1510)
          const y = 3230 + ((index * 73) % 240)
          return <path key={`kelp-${index}`} className={`kelp-frond kelp-${index % 3}`} d={`M ${x} ${y + 70} q ${index % 2 ? 28 : -28} -35 0 -72 q ${index % 2 ? -24 : 24} -35 0 -68`} />
        })}
      </g>
      <g className="fish-schools" fill={PALETTE.paper} stroke={PALETTE.seaDark} strokeWidth="2">
        {Array.from({ length: 16 }, (_, index) => {
          const x = 3300 + ((index * 223) % 1450)
          const y = 2870 + ((index * 137) % 500)
          return <g key={`fish-${index}`} transform={`translate(${x} ${y})`}><g className={`sea-fish fish-route-${index % 3}`} style={{ animationDelay: `${-(index * 0.41)}s` }}><path d="M -18 0 Q 0 -13 20 0 Q 0 13 -18 0 Z M -18 0 l -14 -11 v22 Z" /></g></g>
        })}
      </g>
      <g className="sea-bubbles" fill="none" stroke={PALETTE.paper} strokeWidth="2" opacity="0.52">
        {Array.from({ length: 18 }, (_, index) => <circle key={`bubble-${index}`} className={`sea-bubble bubble-${index % 4}`} cx={3300 + ((index * 281) % 1450)} cy={2890 + ((index * 109) % 470)} r={4 + (index % 4) * 2} style={{ animationDelay: `${-(index * 0.33)}s` }} />)}
      </g>
      <g opacity="0.85">
        {Array.from({ length: 8 }, (_, index) => <Villager key={`sea-villager-${index}`} index={index + 20} x={3370 + ((index * 263) % 1290)} y={2990 + ((index * 149) % 330)} scale="0.88" />)}
      </g>
    </g>
  )
}

function OuterArchipelago({ solvedEncounters, onEncounter }) {
  return (
    <g>
      <g fill="none" className="map-ink" strokeLinecap="round" opacity="0.58">
        <path d="M 2410 470 C 2660 525, 2820 765, 3030 930 C 3315 1155, 3715 980, 4020 1220 C 4270 1418, 4190 1745, 4445 1958 C 4665 2142, 4865 2375, 4780 2750" stroke={PALETTE.seaDark} strokeWidth="38" opacity="0.32" />
        <path d="M 2410 470 C 2660 525, 2820 765, 3030 930 C 3315 1155, 3715 980, 4020 1220 C 4270 1418, 4190 1745, 4445 1958 C 4665 2142, 4865 2375, 4780 2750" stroke={PALETTE.ink} strokeWidth="2.4" strokeDasharray="12 18" />
        <path d="M 700 2280 C 1050 2180, 1430 2320, 1780 2500 C 2130 2680, 2380 2640, 2800 2810" stroke={PALETTE.seaDark} strokeWidth="26" opacity="0.26" />
      </g>
      {OUTER_ISLANDS.map((island, index) => (
        <g key={island.label}>
          <path d={`M ${island.x - island.w / 2} ${island.y} C ${island.x - island.w * 0.35} ${island.y - island.h * 0.55}, ${island.x + island.w * 0.28} ${island.y - island.h * 0.58}, ${island.x + island.w / 2} ${island.y - island.h * 0.08} C ${island.x + island.w * 0.62} ${island.y + island.h * 0.35}, ${island.x + island.w * 0.18} ${island.y + island.h * 0.6}, ${island.x - island.w * 0.2} ${island.y + island.h * 0.46} C ${island.x - island.w * 0.52} ${island.y + island.h * 0.35}, ${island.x - island.w * 0.64} ${island.y + island.h * 0.16}, ${island.x - island.w / 2} ${island.y} Z`} fill={index % 2 ? PALETTE.land : PALETTE.landLight} className="map-ink" strokeWidth="3" opacity="0.94" />
          <path d={`M ${island.x - island.w * 0.28} ${island.y + 12} C ${island.x - island.w * 0.08} ${island.y - island.h * 0.22}, ${island.x + island.w * 0.25} ${island.y - island.h * 0.12}, ${island.x + island.w * 0.28} ${island.y + island.h * 0.2}`} fill="none" className="map-ink" strokeWidth="1.4" strokeDasharray="8 12" opacity="0.45" />
          <text x={island.x} y={island.y - island.h * 0.15} textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="2" fill={PALETTE.ink} opacity="0.68">{island.label}</text>
        </g>
      ))}
      <g opacity="0.78">
        {Array.from({ length: 170 }, (_, index) => <Tree key={`outer-tree-${index}`} x={520 + ((index * 257) % 4200)} y={420 + ((index * 179) % 2600)} scale={0.58 + (index % 6) * 0.09} />)}
      </g>
      {Array.from({ length: 24 }, (_, index) => <Cabin key={`outer-cabin-${index}`} x={760 + ((index * 433) % 3850)} y={560 + ((index * 317) % 2550)} label={index % 3 === 0 ? 'shrine' : index % 3 === 1 ? 'cabin' : 'tower'} />)}
      <g opacity="0.82">{Array.from({ length: 18 }, (_, index) => <Villager key={`outer-villager-${index}`} index={index + 40} x={720 + ((index * 389) % 3900)} y={520 + ((index * 277) % 2520)} scale="0.82" />)}</g>
      <MysticCreature x={4050} y={915} type="dragon" />
      <MysticCreature x={2500} y={1390} type="serpent" />
      <MysticCreature x={1515} y={2420} type="stag" />
      {MAP_GAMES.map(encounter => <Encounter key={encounter.id} encounter={encounter} solved={solvedEncounters.has(encounter.id)} onTrigger={onEncounter} />)}
    </g>
  )
}

function MapDetails({ solvedEncounters, onEncounter }) {
  const trees = TREE_GROVES.flatMap((grove, groveIndex) => (
    Array.from({ length: grove.count }, (_, index) => {
      const angle = index * 2.399 + groveIndex * 0.7
      const radius = grove.spread * (0.18 + ((index * 37) % 83) / 100)
      return {
        x: grove.x + Math.cos(angle) * radius,
        y: grove.y + Math.sin(angle) * radius * 0.62,
        scale: 0.72 + ((index + groveIndex) % 5) * 0.12,
      }
    })
  ))

  return (
    <g>
      <OuterArchipelago solvedEncounters={solvedEncounters} onEncounter={onEncounter} />
      <g fill="none" className="map-ink" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 1950 545 C 1845 628, 1835 745, 1745 845 C 1688 908, 1575 916, 1515 1015" stroke={PALETTE.sea} strokeWidth="10" opacity="0.78" />
        <path d="M 520 690 C 700 595, 905 620, 1090 700 S 1370 808, 1560 770 S 1960 860, 2190 1075" stroke={PALETTE.ink} strokeWidth="2.5" strokeDasharray="8 13" opacity="0.43" />
        <path d="M 680 470 C 545 595, 495 730, 580 790 C 680 862, 820 906, 950 1030 C 1035 1112, 1048 1236, 1005 1395" stroke={PALETTE.ink} strokeWidth="2.2" strokeDasharray="6 12" opacity="0.36" />
      </g>
      <g opacity="0.65">
        <path d="M 2140 272 C 2240 215, 2395 255, 2458 365 C 2515 466, 2400 552, 2278 532 C 2158 510, 2052 407, 2140 272 Z" fill={PALETTE.landLight} className="map-ink" strokeWidth="2.1" />
        <path d="M 2320 1470 C 2428 1425, 2562 1490, 2550 1605 C 2538 1718, 2350 1745, 2262 1656 C 2192 1586, 2228 1512, 2320 1470 Z" fill={PALETTE.landLight} className="map-ink" strokeWidth="2.1" />
        <path d="M 250 1478 C 365 1418, 535 1462, 588 1576 C 646 1700, 470 1798, 310 1728 C 190 1675, 152 1540, 250 1478 Z" fill={PALETTE.landLight} className="map-ink" strokeWidth="2.1" />
      </g>
      <g opacity="0.78">
        {trees.map((tree, index) => <Tree key={`tree-${index}`} {...tree} />)}
      </g>
      <g>{CABINS.map(cabin => <Cabin key={cabin.label} {...cabin} />)}</g>
      <g className="map-ink" fill="none" strokeWidth="1.3" opacity="0.52">
        {Array.from({ length: 18 }, (_, index) => <path key={`ridge-west-${index}`} d={`M ${210 + index * 37} ${1650 - index * 19} l 24 -35 l 26 36`} />)}
        {Array.from({ length: 14 }, (_, index) => <path key={`ridge-east-${index}`} d={`M ${2060 + index * 42} ${300 + index * 24} l 22 -31 l 23 32`} />)}
        {Array.from({ length: 12 }, (_, index) => <circle key={`stone-${index}`} cx={360 + ((index * 191) % 2000)} cy={360 + ((index * 127) % 1120)} r={3 + (index % 3)} fill={PALETTE.ink} opacity="0.42" />)}
      </g>
      <TerrainFeatures />
      <SeaWorld />
      <g opacity="0.86">{VILLAGERS.map((villager, index) => <Villager key={`villager-${index}`} index={index} {...villager} />)}</g>
    </g>
  )
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
  const movementTargetRef = React.useRef(null)
  const activeRef = React.useRef(null)
  const ambientRef = React.useRef(null)
  const blockedRef = React.useRef(null)
  const beastRef = React.useRef(null)
  const touchDirectionRef = React.useRef(null)
  const touchGestureRef = React.useRef(null)
  const [position, setPosition] = React.useState(PLAYER_START)
  const [camera, setCamera] = React.useState(PLAYER_START)
  const [activeId, setActiveId] = React.useState(null)
  const [atEdge, setAtEdge] = React.useState(false)
  const [solvedEncounters, setSolvedEncounters] = React.useState(() => new Set())
  const [mapEvent, setMapEvent] = React.useState(null)
  const [terrainStatus, setTerrainStatus] = React.useState('OPEN GROUND')
  const [beastStatus, setBeastStatus] = React.useState(null)
  const [customizing, setCustomizing] = React.useState(false)
  const [avatar, setAvatar] = React.useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('esprit-avatar') || '{}')
      return { ...DEFAULT_AVATAR, ...saved, callSign: !saved.callSign || saved.callSign === 'ROVER' ? 'VISITOR' : saved.callSign }
    } catch {
      return DEFAULT_AVATAR
    }
  })
  const [viewport, setViewport] = React.useState(() => ({ width: window.innerWidth, height: window.innerHeight }))

  const enterLocation = React.useCallback(location => {
    if (location.id === 'avatar') {
      setCustomizing(true)
      return
    }
    navigate(location.href)
  }, [navigate])

  React.useEffect(() => {
    window.localStorage.setItem('esprit-avatar', JSON.stringify(avatar))
  }, [avatar])

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

      if (horizontal || vertical) movementTargetRef.current = null

      if (!horizontal && !vertical && movementTargetRef.current) {
        const deltaX = movementTargetRef.current.x - positionRef.current.x
        const deltaY = movementTargetRef.current.y - positionRef.current.y
        const targetDistance = Math.hypot(deltaX, deltaY)
        if (targetDistance < 12) {
          movementTargetRef.current = null
        } else {
          horizontal = deltaX / targetDistance
          vertical = deltaY / targetDistance
        }
      }

      if (horizontal || vertical) {
        const distance = Math.hypot(horizontal, vertical) || 1
        const terrain = terrainAt(positionRef.current)
        const speed = terrain.forest ? 4.8 : terrain.sea ? 5.6 : terrain.mountain ? 6.2 : 8.5
        const desiredPosition = clampPosition({
          x: positionRef.current.x + (horizontal / distance) * speed,
          y: positionRef.current.y + (vertical / distance) * speed,
        })
        const { next: nextPosition, blocked } = moveThroughWorld(positionRef.current, desiredPosition)
        if (blocked) {
          movementTargetRef.current = null
          if (blockedRef.current !== blocked.id) {
            blockedRef.current = blocked.id
            setMapEvent(`${blocked.label} AHEAD · find a bridge, gate, or pass around it`)
          }
        } else {
          blockedRef.current = null
        }
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

    const ambient = ENVIRONMENT_EVENTS.find(item => Math.hypot(position.x - item.x, position.y - item.y) < item.radius)
    if (ambient && ambientRef.current !== ambient.id) {
      ambientRef.current = ambient.id
      setMapEvent(ambient.text)
    } else if (!ambient) {
      ambientRef.current = null
    }

    const terrain = terrainAt(position)
    setTerrainStatus(terrain.forest ? `COVER / ${terrain.forest.label}` : terrain.sea ? `SWIMMING / ${terrain.sea.label}` : terrain.mountain ? `CLIMBING / ${terrain.mountain.label}` : 'OPEN GROUND')
    const beast = BEASTS.find(item => Math.hypot(position.x - item.x, position.y - item.y) < item.radius)
    const hidden = Boolean(terrain.forest)
    setBeastStatus(beast ? (hidden ? `HIDDEN FROM ${beast.name}` : `${beast.name} NEARBY · FIND COVER`) : null)
    if (beast && !hidden && beastRef.current !== beast.id) {
      beastRef.current = beast.id
      setMapEvent(`${beast.name} has line of sight · slip into ${beast.cover} or take the long way around`)
    } else if (!beast) {
      beastRef.current = null
    }
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
  const isMobile = viewport.width <= 700
  const viewHeight = isMobile ? 1900 : (isPortrait ? 1450 : VIEW.height)
  const view = {
    height: viewHeight,
    width: Math.max(360, Math.min(WORLD.width, viewHeight * (viewport.width / viewport.height))),
  }
  const viewX = Math.max(0, Math.min(WORLD.width - view.width, camera.x - view.width / 2))
  const viewY = Math.max(0, Math.min(WORLD.height - view.height, camera.y - view.height / 2))
  const activeLocation = LOCATIONS.find(location => location.id === activeId)
  const triggerEncounter = React.useCallback(encounter => {
    const distance = Math.hypot(positionRef.current.x - encounter.x, positionRef.current.y - encounter.y)
    if (distance > 145) {
      movementTargetRef.current = { x: encounter.x, y: encounter.y + 70 }
      setMapEvent(`ROUTING TO ${encounter.label} · get close, then tap again`)
      return
    }
    setSolvedEncounters(current => new Set([...current, encounter.id]))
    setMapEvent(encounter.text)
  }, [])
  React.useEffect(() => {
    const encounter = MAP_GAMES.find(item => !solvedEncounters.has(item.id) && Math.hypot(position.x - item.x, position.y - item.y) < 92)
    if (!encounter) return
    setSolvedEncounters(current => new Set([...current, encounter.id]))
    setMapEvent(encounter.text)
  }, [position, solvedEncounters])
  const interactWithLocation = React.useCallback(location => {
    const distance = Math.hypot(positionRef.current.x - location.x, positionRef.current.y - location.y)
    if (distance > Math.max(location.w, location.h) * 0.72) {
      movementTargetRef.current = { x: location.x, y: location.y + location.h / 2 + 42 }
      setMapEvent(`ROUTING TO ${location.label} · walk into its signal range`)
      return
    }
    enterLocation(location)
  }, [enterLocation])

  const moveToClick = event => {
    if (touchGestureRef.current?.moved) {
      touchGestureRef.current = null
      return
    }
    touchGestureRef.current = null

    const bounds = event.currentTarget.getBoundingClientRect()
    const nextPosition = clampPosition({
      x: viewX + ((event.clientX - bounds.left) / bounds.width) * view.width,
      y: viewY + ((event.clientY - bounds.top) / bounds.height) * view.height,
    })
    movementTargetRef.current = nextPosition
    setMapEvent('ROUTE SET · walking…')
  }

  const beginSwipeMove = event => {
    event.preventDefault()
    event.currentTarget.setPointerCapture?.(event.pointerId)
    touchGestureRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    }
    touchDirectionRef.current = null
    wrapRef.current?.focus()
  }

  const updateSwipeMove = event => {
    const gesture = touchGestureRef.current
    if (!gesture || gesture.id !== event.pointerId) return

    event.preventDefault()
    const deltaX = event.clientX - gesture.startX
    const deltaY = event.clientY - gesture.startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)
    const swipeThreshold = 18

    if (Math.max(absX, absY) < swipeThreshold) return

    gesture.moved = true
    movementTargetRef.current = null
    touchDirectionRef.current = absX > absY
      ? (deltaX > 0 ? 'arrowright' : 'arrowleft')
      : (deltaY > 0 ? 'arrowdown' : 'arrowup')
  }

  const endSwipeMove = event => {
    const gesture = touchGestureRef.current
    if (!gesture || gesture.id !== event.pointerId) return

    event.preventDefault()
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    touchDirectionRef.current = null
  }

  const updateAvatar = (key, value) => setAvatar(current => ({ ...current, [key]: value }))

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      aria-label="Interactive map of Kenton Guarian's website"
      onPointerDown={event => event.currentTarget.focus()}
      style={{ minHeight: '100dvh', height: '100dvh', position: 'relative', overflow: 'hidden', background: PALETTE.sea, color: PALETTE.ink, outline: 'none', filter: 'sepia(0.38) saturate(0.82)' }}
    >
      <style>{`
        @keyframes mapPulse { 0%,49% { fill:${PALETTE.signal} } 50%,100% { fill:${PALETTE.paper} } }
        @keyframes mapBob { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-3px) } }
        @keyframes beastSerpent { 0%,100% { transform:translate(-42px,8px) rotate(-2deg) } 50% { transform:translate(58px,-12px) rotate(3deg) } }
        @keyframes beastStag { 0%,100% { transform:translate(-36px,0) } 50% { transform:translate(45px,-22px) } }
        @keyframes beastDragon { 0%,100% { transform:translate(-48px,18px) rotate(-3deg) } 50% { transform:translate(70px,-28px) rotate(4deg) } }
        @keyframes waterFlow { to { stroke-dashoffset:-108; } }
        @keyframes waterPulse { 0%,100% { opacity:.2; transform:scale(.72) } 50% { opacity:.62; transform:scale(1.12) } }
        @keyframes villagerWalkA { 0%,100% { transform:translate(0,0) } 25% { transform:translate(28px,-8px) } 50% { transform:translate(42px,12px) } 75% { transform:translate(12px,20px) } }
        @keyframes villagerWalkB { 0%,100% { transform:translate(0,0) } 33% { transform:translate(-36px,14px) } 66% { transform:translate(-12px,-24px) } }
        @keyframes villagerWalkC { 0%,100% { transform:translate(0,0) } 30% { transform:translate(20px,30px) } 65% { transform:translate(-26px,18px) } }
        @keyframes villagerWalkD { 0%,100% { transform:translate(0,0) } 25% { transform:translate(-18px,-26px) } 55% { transform:translate(25px,-18px) } 80% { transform:translate(32px,12px) } }
        @keyframes fishSwimA { 0%,100% { transform:translate(-36px,0) } 50% { transform:translate(54px,-12px) } }
        @keyframes fishSwimB { 0%,100% { transform:translate(42px,8px) scaleX(-1) } 50% { transform:translate(-55px,-15px) scaleX(-1) } }
        @keyframes fishSwimC { 0%,100% { transform:translate(-24px,16px) } 50% { transform:translate(68px,-20px) } }
        @keyframes bubbleRise { 0%,100% { transform:translateY(24px); opacity:.12 } 50% { transform:translateY(-34px); opacity:.58 } }
        @keyframes kelpSway { 0%,100% { transform:skewX(-3deg) } 50% { transform:skewX(4deg) } }
        @keyframes signalFlicker { 0%,96%,100% { opacity:.13 } 97% { opacity:.32 } }
        .map-ink { stroke:${PALETTE.ink}; stroke-linecap:round; stroke-linejoin:round; }
        .map-location-active { animation:mapPulse 0.28s steps(1) infinite; }
        .map-player { animation:mapBob 0.85s ease-in-out infinite; }
        .mystic-beast { transform-box:fill-box; transform-origin:center; }
        .mystic-serpent { animation:beastSerpent 8s ease-in-out infinite; }
        .mystic-stag { animation:beastStag 6.5s ease-in-out infinite; }
        .mystic-dragon { animation:beastDragon 7s ease-in-out infinite; }
        .water-current { animation:waterFlow 5.5s linear infinite; }
        .water-current-slow { animation-duration:8s; }
        .ocean-waves path { stroke-dasharray:10 16; animation:waterFlow 8s linear infinite; }
        .water-ripple { transform-box:fill-box; transform-origin:center; animation:waterPulse 4.5s ease-in-out infinite; }
        .map-villager,.sea-fish,.kelp-frond,.sea-bubble { transform-box:fill-box; transform-origin:center; }
        .map-villager { animation-duration:8s; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
        .villager-route-0 { animation-name:villagerWalkA; }.villager-route-1 { animation-name:villagerWalkB; }.villager-route-2 { animation-name:villagerWalkC; }.villager-route-3 { animation-name:villagerWalkD; }
        .sea-fish { animation-duration:6s; animation-timing-function:ease-in-out; animation-iteration-count:infinite; }
        .fish-route-0 { animation-name:fishSwimA; }.fish-route-1 { animation-name:fishSwimB; animation-duration:7.5s; }.fish-route-2 { animation-name:fishSwimC; animation-duration:9s; }
        .sea-bubble { animation:bubbleRise 5s ease-in-out infinite; }
        .bubble-1 { animation-duration:6.2s; }.bubble-2 { animation-duration:7.4s; }.bubble-3 { animation-duration:8.5s; }
        .kelp-frond { animation:kelpSway 4.2s ease-in-out infinite; }.kelp-1 { animation-duration:5.1s; }.kelp-2 { animation-duration:6s; }
        .map-status { position:absolute; top:12px; right:12px; z-index:4; display:flex; flex-direction:column; align-items:flex-end; gap:5px; font:800 9px/1 "JetBrains Mono",ui-monospace,monospace; letter-spacing:.1em; }
        .map-status span { max-width:min(360px,calc(100vw - 20px)); padding:7px 9px; border:2px solid ${PALETTE.ink}; border-radius:999px; background:rgba(232,224,200,.94); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .map-status-safe { background:${PALETTE.neonMint}!important; }
        .map-status-alert { background:${PALETTE.neonPink}!important; color:${PALETTE.paper}; }
        .map-legend { position:absolute; left:12px; top:12px; z-index:4; display:flex; gap:5px; flex-wrap:wrap; max-width:360px; font:800 8px/1 "JetBrains Mono",ui-monospace,monospace; letter-spacing:.08em; }
        .map-legend span { padding:6px 8px; border:2px solid ${PALETTE.ink}; border-radius:999px; background:rgba(232,224,200,.9); }
        .map-hud { flex-wrap:nowrap!important; }
        .map-hud-primary { display:flex; align-items:center; gap:8px; min-width:0; flex:1 1 auto; }
        .map-lore { min-width:0; flex:1 1 260px; }
        .map-site-note { flex:0 0 290px; }
        .map-scanlines { position:absolute; inset:0; z-index:2; pointer-events:none; opacity:.13; animation:signalFlicker 7s steps(1) infinite; background:repeating-linear-gradient(0deg,transparent 0 4px,rgba(10,10,11,.24) 5px); mix-blend-mode:multiply; }
        .map-ui-button { border:2px solid ${PALETTE.ink}; border-radius:999px; background:${PALETTE.paper}; color:${PALETTE.ink}; padding:8px 12px; font:800 10px/1 "JetBrains Mono",ui-monospace,monospace; letter-spacing:.08em; box-shadow:3px 3px 0 ${PALETTE.ink}; cursor:pointer; }
        .map-ui-button:hover,.map-ui-button:focus-visible { background:${PALETTE.neonMint}; transform:translate(-1px,-1px); box-shadow:4px 4px 0 ${PALETTE.ink}; }
        .avatar-sheet-backdrop { position:absolute; inset:0; z-index:40; display:grid; place-items:center; padding:18px; background:rgba(10,10,11,.67); backdrop-filter:blur(5px); }
        .avatar-sheet { width:min(560px,100%); max-height:calc(100dvh - 36px); overflow:auto; border:3px solid ${PALETTE.ink}; border-radius:18px; background:${PALETTE.paper}; color:${PALETTE.ink}; box-shadow:10px 10px 0 ${PALETTE.neonPink}; padding:18px; font-family:"JetBrains Mono",ui-monospace,monospace; }
        .avatar-sheet-head { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; border-bottom:2px solid ${PALETTE.ink}; padding-bottom:13px; }
        .avatar-sheet h2 { margin:0 0 5px; font-size:18px; letter-spacing:.1em; }
        .avatar-sheet p { margin:0; font-size:10px; line-height:1.55; }
        .avatar-builder { display:grid; grid-template-columns:130px 1fr; gap:18px; padding-top:16px; }
        .avatar-preview { min-height:180px; display:grid; place-items:center; border:2px solid ${PALETTE.ink}; border-radius:13px; background:linear-gradient(135deg,${PALETTE.landLight},${PALETTE.sea}); }
        .avatar-preview svg { width:90px; overflow:visible; filter:drop-shadow(4px 5px 0 rgba(10,10,11,.18)); }
        .avatar-field { margin-bottom:13px; }
        .avatar-field label,.avatar-field legend { display:block; margin:0 0 7px; padding:0; border:0; font-size:9px; font-weight:800; letter-spacing:.13em; }
        .avatar-field fieldset { margin:0; padding:0; border:0; }
        .avatar-swatches { display:flex; flex-wrap:wrap; gap:7px; }
        .avatar-swatch { width:34px; height:30px; border:2px solid ${PALETTE.ink}; border-radius:8px; cursor:pointer; box-shadow:2px 2px 0 ${PALETTE.ink}; }
        .avatar-swatch.selected { outline:3px solid ${PALETTE.neonPink}; outline-offset:2px; }
        .avatar-gear { border:2px solid ${PALETTE.ink}; border-radius:8px; background:${PALETTE.landLight}; padding:6px 8px; font:800 9px/1 "JetBrains Mono",ui-monospace,monospace; cursor:pointer; }
        .avatar-gear.selected { background:${PALETTE.neonMint}; }
        .avatar-name { width:100%; border:2px solid ${PALETTE.ink}; border-radius:8px; background:#f4edd9; color:${PALETTE.ink}; padding:9px; font:800 12px/1 "JetBrains Mono",ui-monospace,monospace; text-transform:uppercase; }
        @media (max-width: 1100px) {
          .map-site-note { display:none; }
          .map-legend { top:82px; }
        }
        @media (max-width: 900px) { .map-keyboard-help { display:none; } }
        @media (max-width: 700px) {
          .map-hud { left:10px!important; right:10px!important; bottom:max(10px,env(safe-area-inset-bottom))!important; display:block!important; }
          .map-hud-primary { width:100%; display:grid!important; grid-template-columns:minmax(0,1fr) auto; align-items:end; gap:7px; }
          .map-keyboard-help, .map-site-note { display:none; }
          .map-lore { width:100%; max-width:none!important; font-size:9px; }
          .map-ui-button { font-size:9px; padding:8px 9px; white-space:nowrap; }
          .map-status { top:10px; right:10px; max-width:calc(100vw - 20px); font-size:8px; }
          .map-legend { top:78px; left:10px; max-width:210px; }
          .avatar-sheet { padding:14px; border-radius:13px; }
          .avatar-builder { grid-template-columns:1fr; }
          .avatar-preview { min-height:130px; }
          .avatar-preview svg { width:70px; }
        }
        @media (prefers-reduced-motion: reduce) { .map-location-active, .map-player, .mystic-beast, .map-villager, .water-current, .ocean-waves path, .water-ripple, .sea-fish, .sea-bubble, .kelp-frond { animation:none; } }
      `}</style>
      <div className="map-scanlines" aria-hidden="true" />
      <div className="map-legend" aria-label="Terrain legend"><span>◌ FOREST = COVER</span><span>▱ BRIDGE = CROSS</span><span>△ MOUNTAIN = SLOW</span></div>
      {atEdge && <div style={{ position: 'absolute', inset: 0, zIndex: 20, display: 'grid', placeItems: 'center', background: 'rgba(16,17,18,0.78)', color: PALETTE.paper, fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 18, letterSpacing: 5 }}>MAP EDGE → THE HOLLOW</div>}
      <svg
        className="map-world"
        viewBox={`${viewX} ${viewY} ${view.width} ${view.height}`}
        style={{ display: 'block', width: '100%', height: '100dvh', touchAction: 'none' }}
        onPointerDown={beginSwipeMove}
        onPointerMove={updateSwipeMove}
        onPointerUp={endSwipeMove}
        onPointerCancel={endSwipeMove}
        onClick={moveToClick}
      >
        <rect x="0" y="0" width={WORLD.width} height={WORLD.height} fill={PALETTE.sea} />
        <rect x="0" y="0" width={WORLD.width} height={WORLD.height} fill="url(#paper-grain)" opacity="0.32" />
        <path d="M 155 640 C 145 360, 440 130, 782 170 C 1020 78, 1365 106, 1630 285 C 1835 170, 2180 215, 2355 445 C 2588 748, 2495 1185, 2190 1390 C 1970 1540, 1715 1490, 1515 1610 C 1260 1765, 870 1750, 625 1590 C 425 1460, 210 1385, 155 1130 C 102 880, 170 790, 155 640 Z" fill={PALETTE.land} className="map-ink" strokeWidth="4" />
        <path d="M 245 625 C 265 392, 505 245, 790 260 C 1015 190, 1335 220, 1530 392 C 1755 312, 2088 358, 2265 565 C 2420 748, 2362 1100, 2100 1278 C 1888 1422, 1645 1355, 1432 1485 C 1215 1618, 875 1602, 672 1482 C 500 1380, 316 1315, 265 1090 C 220 890, 220 758, 245 625 Z" fill={PALETTE.landLight} className="map-ink" strokeWidth="2.4" />
        <path d="M 310 642 C 390 410, 566 336, 750 355 C 936 281, 1220 322, 1404 471 C 1524 569, 1554 772, 1435 912 C 1305 1060, 1045 1042, 855 1010 C 600 1030, 390 904, 310 720 Z" fill="none" className="map-ink" strokeWidth="1.4" strokeDasharray="8 11" opacity="0.45" />
        <path d="M 1510 430 C 1720 360, 2015 430, 2188 625 C 2312 765, 2268 1030, 2075 1178 C 1880 1328, 1605 1270, 1455 1160 C 1590 1010, 1595 798, 1510 430 Z" fill="none" className="map-ink" strokeWidth="1.4" strokeDasharray="8 11" opacity="0.38" />
        <MapDetails solvedEncounters={solvedEncounters} onEncounter={triggerEncounter} />
        <g fill="none" stroke={PALETTE.paper} strokeWidth="2" opacity="0.42">
          {WATER_RIPPLES.map((ripple, index) => <g key={`ripple-${index}`} transform={`translate(${ripple.x} ${ripple.y})`}><ellipse className="water-ripple" cx="0" cy="0" rx="42" ry="13" style={{ animationDelay: `${-(index * 0.66)}s` }} /><ellipse className="water-ripple" cx="0" cy="0" rx="22" ry="7" style={{ animationDelay: `${-(index * 0.66 + 1.2)}s` }} /></g>)}
        </g>
        <g fill="none" className="map-ink ocean-waves" strokeWidth="1.35" opacity="0.52">
          {Array.from({ length: 18 }, (_, index) => <path key={`wave-top-${index}`} d={`M ${index * 175 - 70} 135 q 28 -11 56 0 t 56 0 t 56 0`} />)}
          {Array.from({ length: 20 }, (_, index) => <path key={`wave-bottom-${index}`} d={`M ${index * 155 - 30} 1788 q 26 -10 52 0 t 52 0`} />)}
          {Array.from({ length: 10 }, (_, index) => <path key={`wave-left-${index}`} d={`M 72 ${260 + index * 155} q -10 24 0 48 t 0 48`} />)}
          {Array.from({ length: 10 }, (_, index) => <path key={`wave-right-${index}`} d={`M 2728 ${255 + index * 155} q 10 24 0 48 t 0 48`} />)}
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
        {LOCATIONS.map(location => <MapLocation key={location.id} location={location} active={activeId === location.id} onEnter={interactWithLocation} />)}
        <g transform={`translate(${position.x}, ${position.y})`} pointerEvents="none">
          <g className="map-player">
            <circle cx="0" cy="-10" r="45" fill={PALETTE.neonMint} opacity="0.2" stroke={PALETTE.neonMint} strokeWidth="2" strokeDasharray="5 8" />
            <circle cx="0" cy="-10" r="35" fill="none" stroke={avatar.accent} strokeWidth="2.5" strokeDasharray="2 8" />
            <g transform="scale(1.55)"><AvatarSprite avatar={avatar} /></g>
            <rect x="-48" y="53" width="96" height="17" rx="8" fill={PALETTE.paper} stroke={PALETTE.ink} strokeWidth="2" />
            <text x="0" y="64.5" textAnchor="middle" fontSize="8" fontWeight="900" fontFamily="JetBrains Mono, ui-monospace, monospace" letterSpacing="1.2" fill={PALETTE.ink}>{avatar.callSign || 'VISITOR'}</text>
          </g>
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
        <div className="map-hud-primary">
          <span className="map-keyboard-help" style={{ padding: '8px 11px', borderRadius: 999, background: PALETTE.ink, color: PALETTE.paper }}>WASD / ARROWS · DRAG TO STEER · ENTER TO INTERACT</span>
          <span className="map-lore" aria-live="polite" style={{ maxWidth: 420, padding: '7px 10px', border: `2px solid ${PALETTE.ink}`, borderRadius: 999, background: 'rgba(245,238,216,0.92)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mapEvent ?? (activeLocation ? activeLocation.lore : isMobile ? 'Swipe in a direction and hold to roam · tap to auto-walk' : 'Point and click to auto-walk · find rune circles and strange locals')}</span>
          <button type="button" className="map-ui-button" onClick={() => setCustomizing(true)}>✦ AVATAR LAB</button>
        </div>
        <div className="map-site-note" style={{ maxWidth: 290, padding: '8px 10px', border: `2px solid ${PALETTE.ink}`, borderRadius: 10, background: 'rgba(245,238,216,0.92)', lineHeight: 1.45 }}>
          <strong>ESPRIT MAP</strong> — a navigable index of Kenton’s work, research, models, code, and contact points.
        </div>
      </div>
      <div className="map-status" aria-live="polite"><span>{terrainStatus}</span>{beastStatus && <span className={beastStatus.startsWith('HIDDEN') ? 'map-status-safe' : 'map-status-alert'}>{beastStatus}</span>}</div>
      {customizing && (
        <div className="avatar-sheet-backdrop" role="presentation" onPointerDown={event => { if (event.target === event.currentTarget) setCustomizing(false) }}>
          <section className="avatar-sheet" role="dialog" aria-modal="true" aria-labelledby="avatar-title" onKeyDown={event => { if (event.key === 'Escape') setCustomizing(false) }}>
            <div className="avatar-sheet-head">
              <div><h2 id="avatar-title">SIGNAL SHACK / AVATAR LAB</h2><p>Build a tiny field operative. Your loadout stays saved on this device.</p></div>
              <button type="button" className="map-ui-button" onClick={() => setCustomizing(false)} aria-label="Close avatar lab">DONE ×</button>
            </div>
            <div className="avatar-builder">
              <div className="avatar-preview" aria-label="Avatar preview">
                <svg viewBox="-30 -43 60 78"><AvatarSprite avatar={avatar} /></svg>
              </div>
              <div>
                <div className="avatar-field"><label htmlFor="avatar-name">CALL SIGN</label><input id="avatar-name" className="avatar-name" maxLength="12" value={avatar.callSign} onChange={event => updateAvatar('callSign', event.target.value.toUpperCase().replace(/[^A-Z0-9 _-]/g, ''))} /></div>
                {['jacket', 'accent', 'hair'].map(key => (
                  <div className="avatar-field" key={key}><fieldset><legend>{key.toUpperCase()}</legend><div className="avatar-swatches">{AVATAR_OPTIONS[key].map(color => <button key={color} type="button" className={`avatar-swatch ${avatar[key] === color ? 'selected' : ''}`} style={{ background: color }} aria-label={`${key} ${color}`} aria-pressed={avatar[key] === color} onClick={() => updateAvatar(key, color)} />)}</div></fieldset></div>
                ))}
                <div className="avatar-field"><fieldset><legend>HEAD GEAR</legend><div className="avatar-swatches">{AVATAR_OPTIONS.accessory.map(option => <button key={option} type="button" className={`avatar-gear ${avatar.accessory === option ? 'selected' : ''}`} aria-pressed={avatar.accessory === option} onClick={() => updateAvatar('accessory', option)}>{option.toUpperCase()}</button>)}</div></fieldset></div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
