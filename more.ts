// type aliases 类型别名
type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
    return x + y;
}

const sum2: PlusType = sum;

// 联合类型
function getName(n: string | (() => string)) {
    if (typeof n === 'string') {
        return n;
    }
    return n();
}

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;

function getNames(n: NameOrResolver) {
    if (typeof n === 'string') {
        return n;
    }
    return n();
}

// type assertion 类型断言
function getLength(input: string | number): number {
    // const str = input as string;
    // if (str.length) {
    //     return str.length;
    // } else {
    //     const num = input as number;
    //     return num.toString().length;
    // }

    // 简单写法
    if ((<string>input).length) {
        return (<string>input).length;
    } else {
        return input.toString().length;
    }
}

// 类型断言不可以把变量断言为联合类型之外的类型

// function getLength1(input: string | number): boolean {
// 类型 "string | number" 到类型 "boolean" 的转换可能是错误的，因为两种类型不能充分重叠。
// return <boolean>input;
// }
