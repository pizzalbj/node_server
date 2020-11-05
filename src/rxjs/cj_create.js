// import { Observable } from 'rxjs';

// /// 创建在订阅函数中发出 'Hello' 和 'World' 的 observable
// const hello = Observable.create(function(observer) {
//     observer.next('Hello');
//     observer.next("World");
// });
// const subscribe = hello.subscribe(val => console.log(val));

// /// 每秒自增值并且只发出偶数
// // 1.创建 可订阅的对象 evenNumbers
// const evenNumbers = Observable.create(function(observer) {
//     let value = 0;
//     // 2.创建 interval 对象：每两秒发出一个值
//     const interval = setInterval(() => {
//         if(value % 2 === 0) {
//             observer.next(value)
//         }
//         value++;
//     }, 1000);

//     // 注意：：：：：这里返回的是一个函数。但是，不返回也正常运行和不报错啊！！！区别是什么？？？？？？
//     // return () => clearInterval(interval);
    
//     // 直接返回 interval 会怎么样？
//     // return interval;
// })
// // 输出: 0...2...4...6...8
// const subscribe$ = evenNumbers.subscribe(val => console.log(val));
// // 10秒后取消订阅
// setTimeout(() => {
//   subscribe$.unsubscribe();
// }, 10000);