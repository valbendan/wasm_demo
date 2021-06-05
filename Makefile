
build:
	yarn asc demo.ts -b demo.wasm -t demo.wat --optimize


run: build
	node main.mjs
