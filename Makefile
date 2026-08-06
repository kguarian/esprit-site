.PHONY: build check install dev preview clean logs

build:
	@python3 build.py

check:
	@python3 build.py --check

install:
	@npm install

dev:
	@npx vite

preview:
	@npx vite preview

clean:
	rm -rf dist .build-logs

logs:
	@ls -lh .build-logs/ 2>/dev/null || echo "no logs yet"
	@echo "--- latest ---"
	@cat .build-logs/latest.log 2>/dev/null | tail -n 80 || true
	@echo "--- history ---"
	@cat .build-logs/history.jsonl 2>/dev/null | tail -n 20 || true
