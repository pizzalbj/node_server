// /// 当任意 observable 发出值时，发出每个 observable 的最新值

// import { timer, combineLatest } from 'rxjs';

// const timerOne = timer(1000, 4000);
// const timerTwo = timer(2000, 4000);
// const timerThree = timer(3000, 4000);

// const combined = combineLatest([timerOne, timerTwo, timerThree]);

// const subscribe = combined.subscribe(latestValues => {
//     const [timerValOne, timerValTwo, timerValThree] = latestValues;

//     console.log(
//         `
//         Timer One Latest: ${timerValOne},
//         Timer Two Latest: ${timerValTwo},
//         Timer Three Latest: ${timerValThree}
//         `
//     )
// })