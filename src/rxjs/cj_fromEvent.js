// import { fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';

// // 创建发出点击事件的 observable
// const source = fromEvent(document, 'click');
// // 映射成给定的事件时间戳
// const example = source.pipe(map((event) => `Event time: ${event.timeStamp}`));
// // 输出 (示例中的数字以运行时为准): 'Event time: 7276.390000000001'
// const subscribe = example.subscribe(val => console.log(val));