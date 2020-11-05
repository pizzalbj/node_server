// /// 将多个 observables 转换成单个 observable 
// import { merge } from 'rxjs/operators';
// import { interval } from 'rxjs';

// // 每2秒发出值
// const first = interval(1000);
// // 每1秒发出值
// const second = interval(2000);
// // 作为实例方法使用
// const example = first.pipe(merge(second));
// // 输出: 
// // 0        first
// // 1 0      first second
// // 2        first
// // 3 1      first second
// // 4
// // 5 2
// // 6 
// // 7 3
// const subscribe = example.subscribe(val => console.log(val));