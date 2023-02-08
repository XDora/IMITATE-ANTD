// interface 接口
// 对对象的形状（shape）进行描述
// 对类（class）进行抽象
// 也叫做 Duck Typing（鸭子类型）

interface IPerson {
    readonly id: number; // 可读属性
    name: string; // 必选属性
    age?: number; // 可选属性
}

let viking: IPerson = {
    id: 1234,
    name: 'viking',
    age: 20,
};

// 无法为“id”赋值，因为它是只读属性。ts(2540)
// viking.id = 1111;
