import React from 'react'
import { DetailSection, InteractiveMap } from '../components/InteractiveMap.jsx'

const external = { target: '_blank', rel: 'noreferrer' }

function KentonDetails() {
  return <>
    <DetailSection heading="PROFILE">
      <p>Mathematics–Computer Science, UC San Diego (Dec 2023). I work where careful analysis, reliable software, and signal research overlap.</p>
    </DetailSection>
    <DetailSection heading="CONTACT">
      <p><a href="mailto:Kenton.Guarian@gmail.com">Kenton.Guarian@gmail.com</a> · <a href="https://www.linkedin.com/in/kguarian/" {...external}>LinkedIn ↗</a> · <a href="https://github.com/kguarian" {...external}>GitHub ↗</a></p>
    </DetailSection>
  </>
}

function SignalDetail() {
  return <>
    <DetailSection heading="APERIODIC SIGNALS">
      <p>Neural power spectra often carry an aperiodic 1/f component alongside oscillatory peaks. The work uses that structure as a measurable signal rather than visual noise.</p>
      <svg className="kenton-spectrum" viewBox="0 0 320 94" role="img" aria-label="Illustrative one over f neural power spectrum">
        <path className="kenton-spectrum-grid" d="M18 16V75H304M18 56H304M18 36H304" />
        <path className="kenton-spectrum-fit" d="M23 24 C68 35 103 44 138 51 S214 61 299 67" />
        <path className="kenton-spectrum-data" d="M23 25 C42 28 48 46 65 37 S83 28 95 47 S110 52 123 51 S139 38 151 54 S169 58 179 55 S196 44 208 60 S227 59 243 64 S278 62 299 70" />
        <text x="21" y="11">PSD(f) = A / fᵡ + peaks</text><text x="20" y="89">1 Hz</text><text x="298" y="89" textAnchor="end">100 Hz</text>
      </svg>
    </DetailSection>
  </>
}

const locations = [
  {
    id: 'home', hook: 'kenton-home', home: true, to: '/', glyph: 'home', x: 352, y: 452, w: 180, h: 150,
    label: 'HOME', sub: '← ARCHIPELAGO', lore: 'Return to the site-wide field map.',
    detail: <DetailSection heading="PORTAL"><p>The archipelago is the index: profile, research, models, code, and contact.</p></DetailSection>,
  },
  {
    id: 'profile', hook: 'kenton-profile', glyph: 'profile', x: 1190, y: 458, w: 330, h: 178,
    label: 'KENTON', sub: 'MATH-CS / UCSD', lore: 'A short field profile and direct ways to get in touch.', detail: <KentonDetails />,
  },
  {
    id: 'experience', hook: 'kenton-experience', glyph: 'experience', x: 720, y: 760, w: 370, h: 192,
    label: 'EXPERIENCE', sub: 'RESEARCH + SOFTWARE', lore: 'Machine-learning, research-platform, and front-end engineering work.',
    detail: <>
      <DetailSection heading="UC SAN DIEGO / VOYTEK LAB · 2021–PRESENT"><ul><li>Deep net for brain signals: 98% accuracy, a new benchmark.</li><li>Patent-pending heart-signal parametrization: 1000× speedup.</li><li>Secure data collection platform: 30% higher research efficiency.</li><li>Co-author, <em>Alzheimer’s & Dementia</em> (2023) — <a href="https://doi.org/10.1002/alz.074342" {...external}>DOI ↗</a>.</li></ul></DetailSection>
      <DetailSection heading="OTHER ROLES"><ul><li>Software Engineer, Mechanical Music Digest (2020–21).</li><li>Front-End Developer, UCSD CSE (2021): zero-infrastructure code execution.</li></ul></DetailSection>
    </>,
  },
  {
    id: 'skills', hook: 'kenton-skills', glyph: 'skills', x: 1630, y: 694, w: 326, h: 174,
    label: 'SKILLS', sub: 'TOOLS + METHODS', lore: 'The languages, ML tools, and systems concepts that recur in the work.',
    detail: <DetailSection heading="TECHNICAL FIELD KIT"><p>Python · SQL · JavaScript · Go · Java · C++ · PyTorch · NumPy · Pandas · scikit-learn · Jupyter · DNNs · DSP · systems programming · API design.</p></DetailSection>,
  },
  {
    id: 'projects', hook: 'kenton-projects', glyph: 'projects', x: 1498, y: 1114, w: 366, h: 178,
    label: 'PROJECTS', sub: 'SELECTED BUILDS', lore: 'A small selection of applied ML, education, financial, and music projects.',
    detail: <DetailSection heading="SELECTED PROJECTS"><ul><li>Brain Monitoring — ML to predict mental exercise.</li><li>CS Education — browser-based code execution platform.</li><li>Optimized Stock Portfolio — linear algebra for allocation.</li><li>Music Analytics — listening records and analysis.</li></ul></DetailSection>,
  },
  {
    id: 'signals', hook: 'kenton-signals', glyph: 'forecast', x: 1190, y: 846, w: 320, h: 166,
    label: 'SIGNALS', sub: '1 / F + PEAKS', lore: 'Aperiodic neural-signal structure, oscillations, and the models built around them.', detail: <SignalDetail />,
  },
  {
    id: 'ucsd', hook: 'kenton-ucsd', glyph: 'school', x: 876, y: 1156, w: 312, h: 168,
    label: 'UCSD', sub: 'EDUCATION', lore: 'B.S. Mathematics–Computer Science, with a research-centered San Diego foundation.',
    detail: <><DetailSection heading="UNIVERSITY OF CALIFORNIA, SAN DIEGO"><p>B.S. Mathematics–Computer Science · Dec 2023 · Provost Honors · PATHS / Golden Pyramid.</p></DetailSection><DetailSection heading="COURSE TERRAIN"><p>Data science · neural data science · statistics · algorithms.</p></DetailSection></>,
  },
]

export function Kenton() {
  return <>
    <style>{`
      .kenton-spectrum{display:block;width:100%;height:96px;margin-top:8px;border-radius:7px;background:rgba(126,143,163,.14)}.kenton-spectrum-grid{fill:none;stroke:rgba(10,10,11,.22);stroke-width:1}.kenton-spectrum-fit{fill:none;stroke:#7E8FA3;stroke-width:3;stroke-dasharray:5 4}.kenton-spectrum-data{fill:none;stroke:#0A0A0B;stroke-width:2}.kenton-spectrum text{font:700 7px "JetBrains Mono",ui-monospace,monospace;fill:#0A0A0B}
    `}</style>
    <InteractiveMap
      id="kenton"
      eyebrow="PROFILE MAP / SAN DIEGO, CALIFORNIA"
      title="Kenton Guarian"
      subtitle="Data, software, and signal research — mapped as a navigable field guide. Walk to a region or select it directly."
      locations={locations}
      footer="FIELD NOTE: Published research, reliable systems, and plenty of curiosity."
    />
  </>
}
