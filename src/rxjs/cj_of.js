// /// 按顺序发出任意数量的值。

// // RxJS v6+
// import { of } from 'rxjs';

// // 依次发出提供的任意数量的值
// const source = of(1, 2, 3, 4, 5);

// // 输出: 1,2,3,4,5 一次性输出
// const subscribe = source.subscribe(val => console.log(val));