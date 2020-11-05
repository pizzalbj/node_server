import _ from 'lodash';
// import './style.css'
// import Icon from './icon.png';
// import Data from './data.xml';
// import printMe from './print.js';
// import { cube } from './main.js'

function component() {
  // async function getComponent() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack1111'], ' ');
  // element.classList.add('hello');
  // return element;

  // 将图像添加到我们现有的 div。
  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  // return element;

  // 读取xml
  // console.log(Data);
  // return element;

  // var btn = document.createElement('button');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);
  // return element;

  // element.innerHTML = [
  //   'Hello webpack!',
  //   '5 cubed is equal to ' + cube(5)
  // ].join('\n\n');
  // return element;

  // var element = document.createElement('div');
  // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // return element;

  // 懒加载
  // var button = document.createElement('button');
  // var br = document.createElement('br');
  // button.innerHTML = 'Click me and look at the console!';
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.appendChild(br);
  // element.appendChild(button);
  // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;
  //   print();
  // })
  // return element;
}

// document.body.appendChild(component());

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// getComponent().then(component => {
//   document.body.appendChild(component);
// })

// if (module.hot) {
//   module.hot.accept("./print.js", function () {
//     console.log("Accepting the updated primeMe module!")
//     // printMe();
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }