// /// 将前一个值和当前值作为数组发出。
// // RxJS v6+
// import { pairwise, take } from 'rxjs/operators';
// import { interval } from 'rxjs';

// console.log(new Date().getTime())
// // 返回: [0,1], [1,2], [2,3], [3,4], [4,5]
// interval(1000)
//   .pipe(
//     pairwise(),
//     take(5)
//   )
//   .subscribe(val => {
//       console.log(new Date().getTime())  // 会发现：是两秒后再输出！！！
//       console.log(val);
//   });