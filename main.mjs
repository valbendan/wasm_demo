import * as fs from "fs";
import * as assert from "assert";

const binCode = fs.readFileSync("demo.wasm");

const wasm = await WebAssembly.instantiate(binCode);

const v = wasm.instance.exports.add_demo(2, 3);

console.log({v: v});
assert.strictEqual(v, 6);
