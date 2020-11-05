// /// 舍弃掉在两次输出之间小于指定时间的发出值

// // RxJS v6+
// import { fromEvent, timer } from 'rxjs';
// import { debounceTime, map } from 'rxjs/operators';

// // var inputElement = document.createElement("input")
// // inputElement.id = "example"
// // document.appendChild(inputElement);
// // fucker, how to add dom

// var inputEle = document.createElement("div");
// inputEle.setAttribute("id", 'example')
// document.appendChild(inputEle)

// const input = document.getElementById('example');

// // 对于每次键盘敲击，都将映射成当前输入值
// const example = fromEvent(input, 'keyup').pipe(map(i => i.currentTarget.value));

// // 在两次键盘敲击之间等待0.5秒方才发出当前值，
// // 并丢弃这0.5秒内的所有其他值
// const debouncedInput = example.pipe(debounceTime(500));

// // 输出值
// const subscribe = debouncedInput.subscribe(val => {
//   console.log(`Debounced Input: ${val}`);
// });