# Agent Instructions — my-esprit.com

## Always check logs before commit-push
- Run `python3 build.py` and inspect `.build-logs/latest.log` + `history.jsonl` — must be `✓ BUILD OK`, no `vite build failed`
- Run `npx vite build --outDir /tmp/check` as second verification (esbuild transform errors surface here)
- Check `npm run dev` console for `ReferenceError` / `style prop expects mapping` / JSX curlies — blank paging = style string bug (e.g. `style="color:...` vs `style={{color:"..."}}`)
- Verify bundle contains routes: `grep -c "/kenton\|/avery\|/ml" docs/assets/*.js` and `docs/index.html` has `id="root"` + `CNAME` + `.nojekyll`
- Do not `git commit` / `git push` if any log shows `✖ BUILD FAILED` or `Error:` — fix first (see `build.py` 4-step UI)

Enforce for every `/kenton` and `/avery` change, and 14" MBP stellar checks.
