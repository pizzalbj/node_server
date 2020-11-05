// /// 发出符合给定条件的值
// /// 如果你希望当不满足条件时完成 observable 的话，请查阅 takeWhile！

// // RxJS v6+
// import { from } from 'rxjs';
// import { filter } from 'rxjs/operators';

// const source = from([1, 2, 3, 4, 5]);

// const example = source.pipe(filter(num => num % 2 === 0));

// const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));