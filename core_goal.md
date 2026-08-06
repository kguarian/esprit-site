# core_goal

My-esprit.com is Kenton Guarian's GitHub Pages site — now **React + Vite**, deployed from `main / docs` (GH Pages `legacy`).

Primary goal: **React dev root at filesystem root** (`package.json`, `vite.config.js`, `src/`, `index.html`) with **built SPA in `docs/`** (`index.html`, `404.html`, `assets/`, `CNAME`, `.nojekyll`). Build via `build.py` / `make` (`vite build --outDir docs`) — `docs/` is committed, `dist/` is ephemeral. `.react-dev/` is legacy (gitignored).

Routes: `/`, `/kenton` (work index), `/avery` (Schrödinger lab — physically accurate, liquid-glass neon, 50/50 collapse), `/ml` (algo-trading/ML distinct from `/code`), `/code`, `/links`, `/contact`, `/more`. `data/site.json` legacy removed — nav is in `src/main.jsx`.

En l'esprit — stellar on 14" MBP, Safari-safe, full-bleed `/avery`.
