/// debounce 防反跳
/// 根据一个选择器函数，舍弃掉在两次输出之间小于指定时间的发出值

// RxJS v6+
import { interval, of, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

// /// demo 1
// const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
// /*
//   只有在最后一次发送后再经过一秒钟，才会发出值，并抛弃在此之前的所有其他值
// */
// const debouncedExample = example.pipe(debounce(() => timer(1000)));
// /*
//     在这个示例中，所有的值都将被忽略，除了最后一个
// */
// const subscribe = debouncedExample.subscribe(val => console.log(val));


// /// demo2
// // 每1秒发出值, 示例: 0...1...2
// const interval$ = interval(1000);

// // 每1秒都将 debounce 的时间增加200毫秒
// const debouncedInterval = interval$.pipe(debounce(val => timer(val * 200)));
// /*
//   5秒后，debounce 的时间会大于 interval 的时间，之后所有的值都将被丢弃
//   输出: 0...1...2...3...4......(debounce 的时间大于1秒后则不再发出值)
// */
// const subscribe$ = debouncedInterval.subscribe(val =>
//     console.log(`Example Two: ${val}`)
// );