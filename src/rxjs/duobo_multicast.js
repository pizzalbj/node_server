// /// 使用提供 的 Subject 来共享源 observable
// /// 意味着不使用 Subject 共享的话，一个observable只能被一个订阅？

// // RxJS v6+
// import { Subject, interval } from 'rxjs';
// import { take, tap, multicast, mapTo } from 'rxjs/operators';

// // 每2秒发出值并只取前5个
// const source = interval(2000).pipe(take(5));

// const example = source.pipe(
//     // 因为我们在下面进行了多播，所以副作用只会调用一次
//     tap(() => console.log('Side Effect #1')),
//     mapTo('Result!')
// );

// // 使用 subject 订阅 source 需要调用 connect() 方法
// const multi = example.pipe(multicast(() => new Subject()));

// /*
//   多个订阅者会共享 source 
//   输出:
//   "Side Effect #1"
//   "Result!"
//   "Result!"
//   ...
// */
// const subscriberOne = multi.subscribe(val => console.log(val));
// const subscriberTwo = multi.subscribe(val => console.log(val));
// // 使用 subject 订阅 source
// multi.connect();