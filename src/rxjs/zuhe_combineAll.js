// /// 当源 observable 完成时，对收集的 observables 使用 combineLatest 
// import { take, map, combineAll } from 'rxjs/operators';
// import { interval } from 'rxjs';

// // 每秒发出值，并只取前2个
// const source = interval(1000).pipe(take(2));

// // 将 source 发出的每个值映射成取前5个值的 interval observable
// const example = source.pipe(
//     map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
// );

// /*
//   soure 中的2个值会被映射成2个(内部的) interval observables，
//   这2个内部 observables 每秒使用 combineLatest 策略来 combineAll，
//   每当任意一个内部 observable 发出值，就会发出每个内部 observable 的最新值。
// */
// const combined = example.pipe(combineAll());

// const subscribe = combined.subscribe(val => console.log(val));