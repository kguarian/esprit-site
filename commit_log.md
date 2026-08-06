# commit_log

- `core_goal.md`, `next_steps.md`, `steps_taken.md`, `commit_log.md` created locally, not committed (as of 2026-08-05 18:59).
- 2026-08-05: Promoted React dev to root (copied `.react-dev/*` to `./`), updated `.gitignore` and `vite.config.js` to stage Plan A. `git status` now shows only modified Pages files + 4 md files untracked; dev files are ignored until worktree is set.
- 2026-08-05 19:18 `d70f3f0` chore: move workspace to site/ and restyle — 14 renames `*→site/*`, update .gitignore, restyle css/js
- 2026-08-05 19:22 `dc5a08a` chore: move site/ → docs/ for GH Pages
- 2026-08-05 19:25 `a86cd13` build: compile React app to docs/ for GH Pages — add index.html entry, outDir docs, SPA 404 fallback
- 2026-08-05 19:25 `4c13447` build: add build.py + Makefile with logged, beautiful build to docs (no build.sh)
- 2026-08-05 19:33 `e306acb` feat: add avery (Schrödinger cat) + ml routes, keep kenton as work index
- 2026-08-05 19:40 `a8e11ef` feat(avery): she loves me / she loves me not daisy (9-petal)
- 2026-08-05 19:44 `0896194` feat(avery): true Schrödinger experiment — superposition, random collapse, stats
- 2026-08-05 19:53 `bfcc704` feat(avery): hypermodern liquid-glass neon cyberpunk Schrödinger lab (²¹⁰Po + Geiger + hammer + HCN)
- 2026-08-05 19:56 `7756151` fix(avery): Safari compat — remove @import, inset, ZWJ, fallback glass
- 2026-08-05 20:03 `8d5c872` fix(avery): escape JSX curlies in wavefunction (λt ReferenceError)
- 2026-08-05 20:05 `82ad558` style(avery): stellar 14" MBP polish — centered shell, clamp title, 44px hits
- 2026-08-05 20:09 `d63b4ea` style(avery): full-bleed stellar for 14" — breakout, 1280 shell, larger type
- Git worktree/layout change `git mv ... site/` + `core.worktree=site` completed via `.git/config` edit (was pending, now done). Pages source updated via `gh api PUT` to `main/docs`.
