// // 使用首先发出值的 observable 
// // 应该已废弃！！！！！

// // RxJS v6+
// import { mapTo } from 'rxjs';
// import { interval } from 'rxjs';
// import { race } from 'rxjs';

// // 接收第一个发出值的 observable
// const example = race(
//   // 每1.5秒发出值
//   interval(1500),
//   // 每1秒发出值
//   interval(1000).pipe(mapTo('1s won!')),
//   // 每2秒发出值
//   interval(2000),
//   // 每2.5秒发出值
//   interval(2500)
// );
// // 输出: "1s won!"..."1s won!"...etc
// const subscribe = example.subscribe(val => console.log(val));