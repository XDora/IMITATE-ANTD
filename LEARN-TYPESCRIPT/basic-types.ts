let isDone: boolean = false;

let age: number = 20;
// 二进制或八进制数值写法
let binaryNumber: number = 0b1111;

let firstName: string = 'viking';
let message: string = `Hello,${firstName},age is ${age}`;

let u: undefined = undefined;
let n: null = null;

// 不能将类型“undefined”分配给类型“number”。ts(2322)
// let num: number = undefined;
// 不能将类型“null”分配给类型“number”。ts(2322)
// num = null;
u = undefined;
n = null;

// undefined 和 null 是其他任何类型（包括 void）的子类型
// 在严格的 null 检查模式下，undefined 和 null 只能赋值给自己

let notSure: any = 4;
notSure = 'maybe it is a string';
notSure = true;

notSure.myName;
notSure.getName();

let numberOrString: number | string = 234;
numberOrString = 'abc';

let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(5);

// 元组
let user: [string, number] = ['viking', 1];
