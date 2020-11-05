// /// 将数组、promise 或迭代器转换成 observable
// import { from } from 'rxjs';

// // 将数组作为值的序列发出
// const arraySource = from([1, 2, 3, 4, 5]);
// // 输出: 1,2,3,4,5
// const subscribe = arraySource.subscribe(val => console.log(val));

// // promise 转换而来的 observable
// const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
// // 输出: 'Hello World'
// const subscribe$ = promiseSource.subscribe(val => console.log(val));

// // 集合转换而来的 observable
// const map = new Map();
// map.set(1, 'Hi');
// map.set(2, 'Bye');
// const mapSource = from(map);
// // 输出: [1, 'Hi'], [2, 'Bye']
// const subscribe$$ = mapSource.subscribe(val => console.log(val));

// // 将字符串作为字符序列发出
// const source = from('Hello World');
// // 输出: 'H','e','l','l','o',' ','W','o','r','l','d'
// const subscribe$$$ = source.subscribe(val => console.log(val));