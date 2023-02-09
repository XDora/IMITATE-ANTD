// 可以把泛型当作一个占位符，在使用的时候才动态的填入具体的类型值
function echo<T>(arg: T): T {
    return arg;
}

const str: string = 'str';
const result = echo(str);

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result2 = swap(['string', 123]);

// 约束泛型
// 例子：必须传入一个带有 length 属性的参数

function echoWithArr<T>(arg: T) {
    // 类型“T”上不存在属性“length”。ts(2339)
    // console.log(arg.length);
    return arg;
}

// 解决方法一：但是存在 length 属性的不止数组，所以此方法不全面
function echoWithArr1<T>(arg: T[]) {
    console.log(arg.length);
    return arg;
}
const arrs = echoWithArr1([1, 2, 3]);

// 解决方法二：约束泛型
interface IWithLength {
    length: number;
}

function echoWithArr2<T extends IWithLength>(arg: T) {
    console.log(arg.length);
    return arg;
}

const strType = echoWithArr2('str');
const obj = echoWithArr2({
    length: 10,
    width: 10,
});
const arr2 = echoWithArr2([1, 2, 3]);

// 除函数使用泛型外，还可以在 class（类） 上使用
class Queue {
    private data = [];
    push(item) {
        return this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}

const queue = new Queue();
queue.push(1);
queue.push('str');
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());

// 队列加入的有数字和字符串，在后续的输出中调用的 toFixed()是数值的方法，会出现错误
// 预期：输入什么输出什么

class Queue1<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item);
    }
    pop(): T {
        return this.data.pop();
    }
}

const queue1 = new Queue1<number>();
queue1.push(123);
console.log(queue1.pop().toFixed());

const queue2 = new Queue1<string>();
queue2.push('123');
console.log(queue2.pop().length);

// 接口使用泛型
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: 'str' };
let kp2: KeyPair<string, number> = { key: 'str', value: 123 };

const arr3: number[] = [1, 2, 3];
const arr4: Array<number> = [1, 2, 3];

// 使用 interface 定义函数类型
interface IPlus<T> {
    (a: T, b: T): T;
}
function plus(a: number, b: number): number {
    return a + b;
}

function connect(a: string, b: string): string {
    return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
