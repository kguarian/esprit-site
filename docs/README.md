# my-esprit.com

The repository root is the deployable GitHub Pages site. It is intentionally build-free: every route is a folder with an `index.html`, so `/kenton/` and the other paths work directly on Pages.

## GitHub Pages configuration

In **Settings → Pages → Build and deployment**, select:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

Do not select `/docs`; this repository intentionally has no `docs/` deployment folder. The `.nojekyll` marker tells Pages to serve the root as static files without Jekyll processing.

## Site map

- `/` — birthday-themed landing page
- `/kenton/` — about / identity
- `/code/` — projects and workbench
- `/links/` — references and recommendations
- `/contact/` — contact information
- `/more/` — open-ended side quests

## Structure

- `assets/css/site.css` — shared visual system and responsive layout
- `assets/js/site.js` — shared navigation, menu, reveal motion, and site metadata
- `data/site.json` — editable site identity, navigation, and footer content
- `[route]/index.html` — route-local content and page-specific metadata
- `404.html` — GitHub Pages fallback

## Local React development (ignored)

React tooling/source is kept in `.react-dev/` and is gitignored. It remains available as a scratch workspace if the site later grows into a component-based build, while the committed root stays directly deployable to GitHub Pages.
