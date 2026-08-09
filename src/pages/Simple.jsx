import React from 'react'
import { DetailSection, InteractiveMap } from '../components/InteractiveMap.jsx'

const newTab = { target: '_blank', rel: 'noreferrer' }

function HomePortal(id) {
  return {
    id: 'home', hook: `${id}-home`, home: true, to: '/', glyph: 'home', x: 350, y: 450, w: 180, h: 150,
    label: 'HOME', sub: '← ARCHIPELAGO', lore: 'Return to the site-wide field map.',
    detail: <DetailSection heading="PORTAL"><p>Back to the archipelago: a navigable index of all the site’s terrain.</p></DetailSection>,
  }
}

function ContentMap({ id, eyebrow, title, subtitle, locations, footer }) {
  return <InteractiveMap id={id} eyebrow={eyebrow} title={title} subtitle={subtitle} locations={[HomePortal(id), ...locations]} footer={footer} />
}

export function Code() {
  return <ContentMap
    id="code"
    eyebrow="BUILD MAP / SYSTEMS TERRAIN"
    title="Code & Systems"
    subtitle="A compact map of software work: research tools, browser infrastructure, data analysis, and small systems made to be useful."
    footer="HOOK: add a project repository or case study as a new labeled map region."
    locations={[
      { id: 'research-tools', hook: 'code-research-tools', glyph: 'experience', x: 1120, y: 495, w: 365, h: 182, label: 'RESEARCH TOOLS', sub: 'SECURE DATA SYSTEMS', lore: 'Platforms for collecting and working with research data.', detail: <DetailSection heading="LAB INFRASTRUCTURE"><ul><li>Secure data collection platform that improved research efficiency by 30%.</li><li>Signal-processing and ML tools for cognitive-science research.</li><li>Designed for traceable workflows as well as usable interfaces.</li></ul></DetailSection> },
      { id: 'education', hook: 'code-education', glyph: 'projects', x: 720, y: 770, w: 348, h: 182, label: 'CS EDUCATION', sub: 'CODE IN THE BROWSER', lore: 'Serverless code execution intended to make programming practice immediate.', detail: <DetailSection heading="BROWSER EXECUTION"><p>Front-end work for UCSD CSE explored zero-infrastructure code execution: instant feedback without a student-managed environment.</p></DetailSection> },
      { id: 'signals', hook: 'code-signals', glyph: 'forecast', x: 1605, y: 748, w: 333, h: 178, label: 'SIGNAL WORK', sub: 'DNN + DSP', lore: 'Applied ML and signal processing where performance has to survive contact with real data.', detail: <DetailSection heading="MODELS IN CONTEXT"><p>Deep neural nets for brain signals, heart-signal parametrization, and analysis tooling that make complicated signals more legible.</p></DetailSection> },
      { id: 'portfolio', hook: 'code-portfolio', glyph: 'valuation', x: 1475, y: 1122, w: 330, h: 172, label: 'PORTFOLIO', sub: 'LINEAR ALGEBRA', lore: 'An optimization project built around portfolio allocation.', detail: <DetailSection heading="OPTIMIZATION"><p>A project in using linear algebra to reason about constraints, allocation, and tradeoffs in a stock portfolio.</p></DetailSection> },
      { id: 'music', hook: 'code-music', glyph: 'note', x: 865, y: 1132, w: 320, h: 170, label: 'MUSIC DATA', sub: 'ANALYTICS + AUTOMATION', lore: 'A thread of software work for music records, behavior monitoring, and distribution.', detail: <DetailSection heading="MUSIC SYSTEMS"><p>Listening-record analytics, newsletter distribution, automation, and VirtualDJ extensions developed with Mechanical Music Digest.</p></DetailSection> },
    ]}
  />
}

export function Links() {
  return <ContentMap
    id="links"
    eyebrow="RESEARCH MAP / REFERENCE CHANNELS"
    title="Links & Research"
    subtitle="A small directory of people, publications, and profiles behind the work. Each marker leads to a useful starting point."
    footer="Research map / source links open in a new tab."
    locations={[
      { id: 'publication', hook: 'links-publication', glyph: 'note', x: 1135, y: 488, w: 365, h: 182, label: 'PUBLICATION', sub: 'ALZHEIMER’S & DEMENTIA', lore: 'Sleep breathing patterns and neurocognitive function in a diverse Hispanic/Latino cohort (2023).', detail: <DetailSection heading="PAPER"><p><a href="https://doi.org/10.1002/alz.074342" {...newTab}>Read the DOI record ↗</a></p><p><em>Sleep breathing patterns and neurocognitive function in a diverse Hispanic/Latino cohort</em>.</p></DetailSection> },
      { id: 'voytek', hook: 'links-voytek', glyph: 'atom', x: 714, y: 764, w: 330, h: 180, label: 'VOYTEK LAB', sub: 'COGNITIVE SCIENCE', lore: 'The UC San Diego research group associated with the signal and ML work.', detail: <DetailSection heading="LAB"><p><a href="https://voyteklab.com/members" {...newTab}>Voytek Lab members ↗</a></p><p>A cognitive-science research environment focused on neural data and computational methods.</p></DetailSection> },
      { id: 'github', hook: 'links-github', glyph: 'projects', x: 1600, y: 738, w: 320, h: 174, label: 'GITHUB', sub: 'CODE + REPOS', lore: 'Source repositories and experiments.', detail: <DetailSection heading="SOURCE"><p><a href="https://github.com/kguarian" {...newTab}>github.com/kguarian ↗</a></p></DetailSection> },
      { id: 'linkedin', hook: 'links-linkedin', glyph: 'profile', x: 1472, y: 1122, w: 325, h: 170, label: 'LINKEDIN', sub: 'PROFESSIONAL PROFILE', lore: 'The professional profile and background.', detail: <DetailSection heading="PROFILE"><p><a href="https://www.linkedin.com/in/kguarian/" {...newTab}>linkedin.com/in/kguarian ↗</a></p></DetailSection> },
      { id: 'resume', hook: 'links-resume', glyph: 'archive', x: 864, y: 1134, w: 316, h: 167, label: 'RESUME', sub: 'FIELD RECORD', lore: 'A concise record of experience, skills, education, and selected work.', detail: <DetailSection heading="RESUME"><p>Browse the Profile map for the complete field record, including experience, technical skills, selected projects, and UCSD education.</p></DetailSection>, to: '/kenton' },
    ]}
  />
}

export function Contact() {
  return <ContentMap
    id="contact"
    eyebrow="CONTACT MAP / OPEN CHANNELS"
    title="Start a Conversation"
    subtitle="The shortest path is email. The other markers are useful when a professional profile or source work is the better context."
    footer="Available for research, software, and data conversations."
    locations={[
      { id: 'email', hook: 'contact-email', glyph: 'contact', x: 1160, y: 500, w: 372, h: 186, label: 'EMAIL', sub: 'KENTON.GUARIAN@GMAIL.COM', lore: 'Send a direct note by email.', detail: <DetailSection heading="PRIMARY CHANNEL"><p><a href="mailto:Kenton.Guarian@gmail.com">Kenton.Guarian@gmail.com</a></p><p>For collaboration, research questions, data work, or a simple hello.</p></DetailSection> },
      { id: 'linkedin', hook: 'contact-linkedin', glyph: 'profile', x: 725, y: 770, w: 330, h: 176, label: 'LINKEDIN', sub: 'PROFESSIONAL CONTEXT', lore: 'Professional background and a good channel for connection requests.', detail: <DetailSection heading="LINKEDIN"><p><a href="https://www.linkedin.com/in/kguarian/" {...newTab}>Connect on LinkedIn ↗</a></p></DetailSection> },
      { id: 'github', hook: 'contact-github', glyph: 'projects', x: 1608, y: 744, w: 324, h: 172, label: 'GITHUB', sub: 'SOURCE CONTEXT', lore: 'Look at the work, then start the conversation.', detail: <DetailSection heading="GITHUB"><p><a href="https://github.com/kguarian" {...newTab}>github.com/kguarian ↗</a></p></DetailSection> },
      { id: 'research', hook: 'contact-research', glyph: 'links', x: 1486, y: 1127, w: 338, h: 170, label: 'RESEARCH', sub: 'PAPERS + LAB', lore: 'Find publication and lab context before reaching out.', detail: <DetailSection heading="CONTEXT"><p>Use the Research map for the publication record, Voytek Lab connection, and a compact link directory.</p></DetailSection>, to: '/links' },
      { id: 'profile', hook: 'contact-profile', glyph: 'profile', x: 865, y: 1138, w: 312, h: 168, label: 'PROFILE', sub: 'RESUME MAP', lore: 'Experience, skills, projects, and education in one place.', detail: <DetailSection heading="PROFILE"><p>Open the profile map to see the broader field record.</p></DetailSection>, to: '/kenton' },
    ]}
  />
}

export function More() {
  return <ContentMap
    id="more"
    eyebrow="ARCHIVE MAP / EXTRA TERRAIN"
    title="Notes & Archive"
    subtitle="The quieter edges of the site: experiments, supporting context, and routes back into the work. This map is designed to keep growing."
    footer="HOOK: extend this archive with a clearly labeled note, experiment, or new site destination."
    locations={[
      { id: 'notes', hook: 'more-notes', glyph: 'note', x: 1135, y: 490, w: 356, h: 182, label: 'NOTES', sub: 'FIELD OBSERVATIONS', lore: 'A space for shorter ideas, marginalia, and observations.', detail: <DetailSection heading="ARCHIVE NOTE"><p>This region is ready for technical notes, research fragments, and project postmortems as they become shareable.</p></DetailSection> },
      { id: 'experiments', hook: 'more-experiments', glyph: 'atom', x: 718, y: 766, w: 330, h: 179, label: 'EXPERIMENTS', sub: 'INTERACTIVE WORK', lore: 'Interactive explorations from signal models to quantum thought experiments.', detail: <DetailSection heading="EXPERIMENTS"><p>The hidden edge of the main map reaches an interactive Schrödinger lab; the model map houses the current financial-signal experiment.</p></DetailSection>, to: '/ml' },
      { id: 'model', hook: 'more-models', glyph: 'forecast', x: 1608, y: 742, w: 330, h: 173, label: 'MODEL LAB', sub: 'MARKET SIGNALS', lore: 'Forecasts, macro inputs, and validation status.', detail: <DetailSection heading="MODEL LAB"><p>Open the ML map to inspect forecasts, yield curve, valuation, dollar context, and feature set.</p></DetailSection>, to: '/ml' },
      { id: 'code', hook: 'more-code', glyph: 'projects', x: 1490, y: 1125, w: 324, h: 170, label: 'CODE', sub: 'BUILDS + SYSTEMS', lore: 'Software and systems work in one compact map.', detail: <DetailSection heading="CODE MAP"><p>Research tools, education infrastructure, signal work, portfolio analysis, and music data.</p></DetailSection>, to: '/code' },
      { id: 'contact', hook: 'more-contact', glyph: 'contact', x: 866, y: 1135, w: 319, h: 168, label: 'CONNECT', sub: 'OPEN CHANNEL', lore: 'Email, professional context, and a direct way to say hello.', detail: <DetailSection heading="CONTACT"><p>Open the contact map for the quickest routes to a conversation.</p></DetailSection>, to: '/contact' },
    ]}
  />
}

export function NotFound() {
  const locations = [
    HomePortal('not-found'),
    { id: 'lost', hook: 'not-found-lost', glyph: 'archive', x: 1200, y: 790, w: 370, h: 185, label: 'UNMAPPED', sub: 'NO ROUTE HERE', lore: 'This route is outside the recorded archipelago.', detail: <DetailSection heading="RETURN"><p>Use the home portal to return to a known region.</p></DetailSection> },
  ]
  return <InteractiveMap id="not-found" eyebrow="MAP ERROR / UNKNOWN COORDINATE" title="Unmapped Territory" subtitle="There is no recorded route at this coordinate. The compass still knows the way home." locations={locations} footer="No route found. Return to the archipelago." />
}
