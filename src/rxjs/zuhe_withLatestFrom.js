// // 还提供另一个 observable 的最新值。

// // RxJS v6+
// import { withLatestFrom, map } from 'rxjs/operators';
// import { interval } from 'rxjs';

// // 每5秒发出值
// const source = interval(5000);

// // 每1秒发出值
// const secondSource = interval(1000);

// const example = source.pipe(
//     // 两个 observable 在发出值前要确保至少都有1个值 (需要等待5秒)
//     withLatestFrom(secondSource),
//     map(([first, second]) => {
//         return `First Source (5s): ${first} Second Source (1s): ${second}`;
//     })
// );
// /*
//   输出:
//   "First Source (5s): 0 Second Source (1s): 4"
//   "First Source (5s): 1 Second Source (1s): 9"
//   "First Source (5s): 2 Second Source (1s): 14"
//   ...
// */
// const subscribe = example.subscribe(val => console.log(val));