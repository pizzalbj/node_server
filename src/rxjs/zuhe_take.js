// import { of, interval, fromEvent } from 'rxjs';
// import { take, tap } from 'rxjs/operators';

// /// demo 1
// // 发出 1 2 3 4 5
// const source = of(1, 2, 3, 4, 5);
// // 取第一个发出的值，然后完成
// const example = source.pipe(take(1));
// // 输出：1
// const subscribe = example.subscribe(val => console.log(val));


// /// demo 2
// // 每1秒发出值
// const interval$ = interval(1000);
// // 取前5个发出的值
// const example$ = interval$.pipe(take(5));
// // 输出: 0 1 2 3 4
// const subscribe$ = example$.subscribe(val => console.log(val));


// /// demo 3。检测第一次文档！！
// var element = document.createElement("div");
// element.innerHTML = 'Where would you click first?';
// element.id = 'locationDisplay';
// document.body.appendChild(element);
// const oneClickEvent = fromEvent(document, 'click').pipe(
//     take(1),
//     tap(v => {
//         document.getElementById('locationDisplay').innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
//     })
// );
// const subscribe$$ = oneClickEvent.subscribe()