import * as fs from "fs";
import * as assert from "assert";

const binCode = fs.readFileSync("demo.wasm");

const increment = new WebAssembly.Global({mutable: true, value: 'f64'}, 2);

const wasm = await WebAssembly.instantiate(binCode, {demo: {increment: increment}});

const v = wasm.instance.exports.add_demo(2, 3);

console.log({v: v});
assert.strictEqual(v, 7);
