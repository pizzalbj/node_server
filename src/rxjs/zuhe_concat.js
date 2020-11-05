// /// 按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值
// import { concat } from 'rxjs/operators';
// import { of } from 'rxjs';

// // 发出 1,2,3
// const sourceOne = of(1, 2, 3);

// // 发出 4,5,6
// const sourceTwo = of(4, 5, 6);

// // 按照顺序，前一个 observable 完成了再订阅下一个!!!!!! 重点系按照顺序
// // 先发出 sourceOne 的值，当完成时订阅 sourceTwo
// const example = sourceOne.pipe(concat(sourceTwo));

// // 输出: 1,2,3,4,5,6
// const subscribe = example.subscribe(val =>
//   console.log('Example: Basic concat:', val)
// );