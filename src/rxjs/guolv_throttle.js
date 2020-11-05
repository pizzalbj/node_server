// /// 以某个时间间隔为阈值，在 durationSelector 完成前将抑制新值的发出
// import { interval } from 'rxjs';
// import { throttle } from 'rxjs/operators';

// const source = interval(1000);

// const example = source.pipe(throttle(val => interval(2000)));

// const subscribe = example.subscribe(val => console.log(val));