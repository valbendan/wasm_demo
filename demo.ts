/**
 * 需要导入的值
 */
declare let increment: number;

/**
 * add demo for wasm
 * return `x` + `y` + 1 value
 * @param x
 * @param y
 */
export function add_demo(x: number, y: number): number {
    return x + y + increment
}
