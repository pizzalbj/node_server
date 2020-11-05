// /// 只有当当前值与之前最后一个值不同时才将其发出。
// /// distinctUntilChanged 默认使用 === 进行比较, 对象引用必须匹配
// import { from } from 'rxjs';
// import { distinctUntilChanged } from 'rxjs/operators';

// const myArrayWithDuplicatesInARow = from([1, 1, 2, 2, 3, 1, 2, 3]);

// // 1 2 3 1 2 3 
// const distinctSub = myArrayWithDuplicatesInARow.pipe(distinctUntilChanged()).subscribe(val => console.log('DISTINCT SUB: ', val));

// // 1 1 2 2 3 1 2 3 
// const nonDistinctSub = myArrayWithDuplicatesInARow.subscribe(val => console.log(val => console.log('NON DISTINCT SUB: ', val)));