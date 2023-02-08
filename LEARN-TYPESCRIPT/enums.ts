enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up); // 0
console.log(Direction[0]); // Up

// 常量枚举 注意查看 enums.js 文件后 常量枚举为一个常量
const enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

const value = 'Up';
if (value === Direction1.Up) {
    console.log('go up!');
}
