# CODEX NEXT LOOP — Esprit Archipelago: Every Page Is A Map

> For the next Codex/Copilot loop. Homepage is the world map — each building is a portal. Now make every destination its own map too, same sepia-indigo monochrome theme, fully zoomed, no scroll.

## Core central theme (follow everywhere)
- **Palette:** sepia-indigo `#9A8E7A` (sRGB) / `color(display-p3 0.60 0.56 0.48)` @ 38% sepia / 0.82 saturate, `blueSepia #7E8FA3` for flash, `paper #E8E0C8`, `ink #0A0A0B` outlines 2–3px. `filter: sepia(0.38) saturate(0.82)` on map wrappers.
- **Flash:** active/hovered interactable flashes `0.28s steps(1)` (`3.57 Hz`) between `sepia ↔ blueSepia`.
- **Window:** `height:100dvh`, `tabIndex=0`, auto-focus, capture `keydown` (Arrows/WASD/Space/Enter) with `preventDefault` passive:false, block `wheel`/`touchmove`, set `body.overflow=hidden` + `html overscroll-behavior:none` while mounted — browser must not scroll.
- **Avery exception:** Previously excluded from sepia; now **include** — Avery follows the same monochrome theme as a doomsday variant (ash/ember tints mapped into sepia range, same ink outlines + flash).

## Labeling + homepage callout
- Every webpage element is labeled: each building has `label` + `sub` text inside the rect, plus `lore` shown in HUD when `active`.
- Homepage is called out from every other page: each subpage map has a **HOME portal** (e.g. `HOME` / `← ARCHIPELAGO`) that returns to `/` — visually distinct (e.g. compass/border).
- Keep `Layout` header/nav for accessibility but maps are the primary navigation.

## Current homepage state (`src/pages/Home.jsx`)
- World `2000×1400`, camera follows the player through a `1000×650` viewport.
- Six content regions map directly to the site: KENTON→/kenton, RESEARCH→/links, ML MODELS→/ml, CODE→/code, CONNECT→/contact, MORE→/more. They are abstract map markers, not buildings or empty lots.
- WASD and Arrow keys share one normalized movement map (8.5px/tick), click-to-walk uses viewport mapping, proximity activates a region, and Enter/Space enters it. The world edge still reaches `/avery` without naming it in the UI.

## Next loop tasks (one map per route, each map contains that page's contents)

### 1) `/kenton` — Profile map
- Map the resume content spatially with abstract, content-led regions for EXPERIENCE, TECHNICAL SKILLS, SELECTED PROJECTS, and UCSD. Keep current `Kenton()` JSX content but render it as interactables on the map — approaching shows an excerpt and Enter opens a detail popover or anchor.
- Keep the sepia-indigo palette without domestic or rustic building imagery.

### 2) `/ml` — Model map
- Use abstract analytical regions: prediction (`SPY/NVDA MLP`), yield curve, P/E, DXY, and feature set. Keep `ml/validate.json` fetches and render numbers on the map. Add one hook for future training visualization.

### 3) `/hollow (secret route /avery, no label)` — Doomsday archipelago variant (now themed)
- Map the Schrödinger lab as a map too (nuclear archipelago), but keep physics accuracy. Map the atom/Geiger/hammer/vial/cat as walkable stations; measurement is an interaction. Same sepia base but allow burn tints remapped into sepia-blue flash. Must remain full-bleed.

### 4) `/code`, `/links`, `/contact`, `/more` — Content maps
- Each gets a small bespoke map that lists its current scaffold items as labeled interactables. Reuse `Layout` content; use abstract, content-specific markers rather than themed structures. Add one hook per map.

## Codex hook contract
- Homepage regions use `id="location_<name>"` and `data-hook="map-<name>"`; there are no generic empty lots or themed structures.
- Codex: extend an existing content region or add another clearly labeled site destination. Active flash is provided by `.map-location-active`; on click/Enter, navigate or open a modal.
- Subpages may use `data-hook="<page>-*"`; document new content hooks in this file.

### Implemented subpage hooks
- `/kenton`: `kenton-home`, `kenton-profile`, `kenton-experience`, `kenton-skills`, `kenton-projects`, `kenton-signals`, `kenton-ucsd`.
- `/ml`: `ml-home`, `ml-prediction`, `ml-yield-curve`, `ml-valuation`, `ml-dxy`, `ml-features`, `ml-training-hook`, and nested `ml-training-visualization`.
- `/hollow` (`/avery`): `hollow-home`, `hollow-atom`, `hollow-geiger`, `hollow-relay`, `hollow-vial`, `hollow-cat`.
- `/code`: `code-home`, `code-research-tools`, `code-education`, `code-signals`, `code-portfolio`, `code-music`.
- `/links`: `links-home`, `links-publication`, `links-voytek`, `links-github`, `links-linkedin`, `links-resume`.
- `/contact`: `contact-home`, `contact-email`, `contact-linkedin`, `contact-github`, `contact-research`, `contact-profile`.
- `/more`: `more-home`, `more-notes`, `more-experiments`, `more-models`, `more-code`, `more-contact`.

## Build/deploy
- `python3 build.py` (must be ✓ BUILD OK) → commit `src/main.jsx` + `docs/` + this file → `git push origin main` (GH Pages `main/docs`).

## Verify
- No `style="..."` string bugs, no missing `BR`/`BrowserRouter` imports.
- `grep -c "/kenton\|/hollow (secret route /avery, no label)\|/ml" docs/assets/*.js` >0 and `docs/index.html` has `id="root"`.
