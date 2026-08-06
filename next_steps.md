# next_steps

- [x] Git layout: `site/` → `docs/` (d70f3f0 → dc5a08a → a86cd13), Pages source `main/docs` (built, my-esprit.com cert approved)
- [x] `avery`: true Schrödinger experiment — ²¹⁰Po chamber + Geiger + hammer + HCN, superposed `|ψ⟩`, random collapse 50/50, stats, liquid-glass neon, Safari fix (λt, inset, @import), full-bleed 1280 shell for 14" (82ad558 → d63b4ea, 8d5c872)
- [x] `kenton/` kept as projects/work index (placeholder → curated list in src/main.jsx)
- [x] `ml/` added — algo-trading + ML distinct from `code/` (e306acb)
- [x] Routes wired in `src/main.jsx` nav + `<Routes>` (/, kenton, avery, ml, code, links, contact, more)
- [x] Build pipeline: `build.py` + `Makefile` (kickass UI, logs `.build-logs/<ts>.log` + history.jsonl, preserves CNAME/.nojekyll, copies dist→docs + 404 fallback) — no build.sh redundancy
- [x] Home archipelago: 2400×1600 sepia-indigo world, no banner, camera follow, hooked lots, edge→avery, fully zoomed capture (959050f)

- [x] CODEX_NEXT.md created — deferred: every page becomes a labeled map following central sepia theme (including Avery), homepage called out via HOME portal on each map. See `CODEX_NEXT.md` for per-route maps + hook contract.

- [ ] Optional: clean untracked screenshots `Pasted*.png` from root/src, decide on `commit_log.md`/`steps_taken.md` commit policy
- [ ] Optional: add error boundary for route errors
