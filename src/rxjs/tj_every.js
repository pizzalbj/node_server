// /// 如果完成时所有的值都能通过断言，那么发出 true，否则发出 false 
// import { every } from 'rxjs/operators';
// import { of } from 'rxjs';

// // 发出5个值
// const allEvens = of(2, 4, 6, 8, 10);
// const example = allEvens.pipe(
//   // 每个值都是偶数吗？
//   every(val => val % 2 === 0)
// );
// // 输出: true
// const subscribe = example.subscribe(val => console.log(val));