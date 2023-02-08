const hello = (name: string) => {
    return `hello ${name}`;
};

// 类型“number”的参数不能赋给类型“string”的参数。ts(2345)
hello(123);
