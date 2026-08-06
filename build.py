#!/usr/bin/env python3
"""
build.py — Kickass React → docs builder with live UI + run logging.

Usage:
  python3 build.py          # full build (install if needed, vite build, copy to docs)
  python3 build.py --check  # only checks (deps, vite config, entry)
  python3 build.py --verbose
  make / make build / ./build.sh  # shims that call this file

Logs: .build-logs/<timestamp>.log + .build-logs/latest.log
      each run appends to .build-logs/history.jsonl
"""

import argparse, json, shutil, subprocess, sys, time
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).parent
LOG_DIR = ROOT / ".build-logs"
DIST = ROOT / "dist"
DOCS = ROOT / "docs"
PRESERVE = {".nojekyll", "CNAME", "README.md"}  # keep across builds

# ── pretty ──────────────────────────────────────────────────────────
USE_COLOR = sys.stdout.isatty()
def clr(code, s): return f"\033[{code}m{s}\033[0m" if USE_COLOR else s
C = lambda s: clr("1;36", s)
G = lambda s: clr("1;32", s)
R = lambda s: clr("1;31", s)
Y = lambda s: clr("1;33", s)
D = lambda s: clr("2", s)
OK, FAIL, WARN, INFO = G("✔"), R("✖"), Y("⚠"), C("→")

def banner():
    print(C("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"))
    print(C("┃  ") + G("⚡ my-esprit build") + C("  —  react → docs  ") + C("       ┃"))
    print(C("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"))

def step(msg): print(f"\n{C('━━')} {msg}")
def ok(msg):   print(f"  {OK} {msg}")
def fail(msg): print(f"  {FAIL} {R(msg)}")
def warn(msg): print(f"  {WARN} {Y(msg)}")
def info(msg): print(f"  {INFO} {D(msg)}")

def run(cmd, **kw):
    """run and return (code, stdout+stderr)."""
    p = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=ROOT, **kw)
    return p.returncode, (p.stdout or "") + (p.stderr or "")

# ── checks ──────────────────────────────────────────────────────────
def check_entry():
    if not (ROOT / "index.html").exists():
        fail("index.html missing at repo root (Vite entry)")
        return False
    if not (ROOT / "src" / "main.jsx").exists():
        fail("src/main.jsx missing")
        return False
    ok("entry: index.html + src/main.jsx")
    return True

def check_deps():
    if not (ROOT / "node_modules" / ".package-lock.json").exists() and not (ROOT / "node_modules" / "vite").exists():
        warn("node_modules missing — will run npm install")
        return False
    # quick vite check
    code, out = run("npx vite --version")
    if code != 0:
        warn(f"vite not runnable: {out.strip()[:120]}")
        return False
    ok(f"deps: {out.strip()}")
    return True

# ── build ───────────────────────────────────────────────────────────
def do_install(log_f):
    step("1/4  Dependencies")
    if (ROOT / "node_modules").exists():
        ok("node_modules present — skipping install (use --fresh to reinstall)")
        return True
    info("npm install …")
    code, out = run("npm install")
    log_f.write(out)
    if code != 0:
        fail("npm install failed — see log")
        print(out[-2000:])
        return False
    ok("npm install complete")
    return True

def do_build(log_f):
    step("2/4  Vite build")
    # Build to dist first (clean), then sync to docs so we never half-overwrite docs
    if DIST.exists():
        shutil.rmtree(DIST)
    info("vite build → dist/ …")
    code, out = run("npx vite build --outDir dist --emptyOutDir")
    log_f.write("\n--- vite build ---\n" + out)
    if code != 0:
        fail("vite build failed")
        # surface first error
        for line in out.splitlines():
            if "error" in line.lower() or "failed" in line.lower():
                print("     " + R(line))
        print(D(out[-3000:]))
        return False
    # report output
    assets = list((DIST).rglob("*"))
    total = sum(f.stat().st_size for f in assets if f.is_file())
    ok(f"vite built dist/ — {len([a for a in assets if a.is_file()])} files, {total/1024:.1f} KB")
    for f in sorted(DIST.rglob("*.js")):
        info(f"  {f.relative_to(DIST)}  {f.stat().st_size/1024:.1f} KB")
    return True

def do_copy(log_f):
    step("3/4  Sync dist → docs")
    DOCS.mkdir(exist_ok=True)
    # remove stale built assets but preserve CNAME/.nojekyll/README
    for p in DOCS.iterdir():
        if p.name in PRESERVE:
            continue
        if p.is_dir():
            shutil.rmtree(p)
        else:
            p.unlink()
    # copy dist contents
    for item in DIST.iterdir():
        dest = DOCS / item.name
        if item.is_dir():
            shutil.copytree(item, dest)
        else:
            shutil.copy2(item, dest)
    # SPA fallback: 404.html = index.html (GH Pages)
    shutil.copy2(DOCS / "index.html", DOCS / "404.html")
    # ensure preserve files still there
    for name in PRESERVE:
        if not (DOCS / name).exists():
            warn(f"{name} missing in docs/ — recreating empty" if name==".nojekyll" else f"{name} missing in docs/")
            if name == ".nojekyll":
                (DOCS / name).touch()
    ok(f"docs/ synced — {len(list(DOCS.rglob('*')))} entries")
    info(f"docs/: {', '.join(sorted(p.name for p in DOCS.iterdir()))}")
    # size
    total = sum(f.stat().st_size for f in DOCS.rglob("*") if f.is_file())
    ok(f"docs total {total/1024:.1f} KB")
    return True

def main():
    ap = argparse.ArgumentParser(description="build react → docs")
    ap.add_argument("--check", action="store_true", help="only run checks")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--fresh", action="store_true", help="reinstall node_modules")
    args = ap.parse_args()

    banner()
    ts = datetime.now()
    ts_str = ts.strftime("%Y-%m-%d_%H-%M-%S")
    LOG_DIR.mkdir(exist_ok=True)
    log_path = LOG_DIR / f"{ts_str}.log"
    latest = LOG_DIR / "latest.log"
    history = LOG_DIR / "history.jsonl"

    print(D(f"run: {ts.isoformat()}  log: {log_path}"))

    t0 = time.time()
    errors = []
    status = "ok"

    if args.fresh and (ROOT / "node_modules").exists():
        shutil.rmtree(ROOT / "node_modules")
        info("fresh: removed node_modules")

    # prechecks
    step("0/4  Prechecks")
    if not check_entry():
        errors.append("entry missing"); status = "fail"
    deps_ok = check_deps()
    if not deps_ok and not args.check:
        info("will install deps during build")

    if args.check:
        print()
        if errors: fail("checks failed"); sys.exit(1)
        else: ok("checks passed"); sys.exit(0)

    # full build with logging
    with open(log_path, "w") as log_f:
        log_f.write(f"build run {ts.isoformat()}\n{'='*60}\n")
        if not do_install(log_f):
            errors.append("npm install failed"); status = "fail"
        elif not do_build(log_f):
            errors.append("vite build failed"); status = "fail"
        elif not do_copy(log_f):
            errors.append("copy failed"); status = "fail"

        dt = time.time() - t0
        step("4/4  Result")
        if status == "ok":
            print(G(f"\n  ✓ BUILD OK  ({dt:.1f}s)"))
            print(D(f"  docs/ ready for GH Pages (main/docs)"))
            ok(f"log: {log_path}")
        else:
            print(R(f"\n  ✖ BUILD FAILED  ({dt:.1f}s) — {'; '.join(errors)}"))
            fail(f"log: {log_path}")
        rec = {"ts": ts.isoformat(), "status": status, "duration_s": round(dt,2), "errors": errors, "log": str(log_path.name)}

    with open(history, "a") as hf:
        hf.write(json.dumps(rec) + "\n")
    shutil.copy(log_path, latest)
    if args.verbose:
        print(D(open(log_path).read()[-4000:]))
    sys.exit(0 if status=="ok" else 1)

if __name__ == "__main__":
    main()
