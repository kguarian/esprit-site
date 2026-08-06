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

## Current homepage state (`src/main.jsx:Home`)
- World `2400×1600`, camera lerps 0.08 toward player, `viewBox 1000×650` tracking `viewX/viewY`.
- 6 portals: CABIN→/kenton, STORE→/links, THEATRE→/ml, MILL→/code, POST→/contact, SHED→/more. 4 hook lots `HOOK_NORTH/EAST/SOUTH/WEST` dashed `8 6` for Codex.
- Player WASD/arrows 9px/tick rAF + click-to-walk via viewport mapping, proximity ±22px activates, Enter/Space enters, world edge warp → `/avery`.

## Next loop tasks (one map per route, each map contains that page's contents)

### 1) `/kenton` — Cabin interior map
- Map the resume content spatially: sections become rooms/furniture (EXPERIENCE desk, TECHNICAL SKILLS shelf, SELECTED PROJECTS crate, UCSD diploma wall). Keep current `Kenton()` JSX content but render as interactables on the map — approaching shows excerpt, Enter opens detail popover / scrolls to anchor.
- Palette same; add warm wood tints still within sepia range.

### 2) `/ml` — Theatre map
- Theatre interior: stage = prediction (`SPY/NVDA MLP`), wings = yield curve, P/E, DXY displays. Backstage = feature list. Keep `ml/validate.json` fetches; render numbers on theatre boards. Add HOOK for future training viz.

### 3) `/avery` — Doomsday archipelago variant (now themed)
- Map the Schrödinger lab as a map too (nuclear archipelago), but keep physics accuracy. Map the atom/Geiger/hammer/vial/cat as walkable stations; measurement is an interaction. Same sepia base but allow burn tints remapped into sepia-blue flash. Must remain full-bleed.

### 4) `/code`, `/links`, `/contact`, `/more` — Mill/Post/Shed/Store maps
- Each gets a small bespoke map that lists its current scaffold items as labeled interactables. Reuse `Layout` content; place as chests/signs. Add one HOOK per map.

## Codex hook contract
- Hook lots have `id="hook_*"`, `data-hook="north|east|south|west"` on homepage, and `data-hook="<page>-*"` on subpages.
- Codex: inject `<g id="hook_*">` with `ink` outlines; active flash is automatic via `.flash` class when `active===id`. On click/Enter, navigate or open modal.
- Document new hooks in this file.

## Build/deploy
- `python3 build.py` (must be ✓ BUILD OK) → commit `src/main.jsx` + `docs/` + this file → `git push origin main` (GH Pages `main/docs`).

## Verify
- No `style="..."` string bugs, no missing `BR`/`BrowserRouter` imports.
- `grep -c "/kenton\|/avery\|/ml" docs/assets/*.js` >0 and `docs/index.html` has `id="root"`.
