// 函数声明式
function add(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        // 可选参数
        return x + y + z;
    }
    return x + y;
}

let result = add(2, 3);

// 必选参数不能位于可选参数后。ts(1016)
// function add1(x: number, y?: number, z: number) {}

// 给参数默认值，相当于该参数为可选参数
function add2(x: number, y: number, z: number = 10): number {
    return x + y + z;
}

// 函数表达式
// add3 通过 Typescript 类型推论 判断其类型
const add3 = function (x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        // 可选参数
        return x + y + z;
    }
    return x + y;
};

const add4: (x: number, y: number, z?: number) => number = add3;
