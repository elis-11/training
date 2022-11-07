//! promise.all -1 version
// const wait = (timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, timeout, true);
//   });
// };
// Promise.all([Promise.resolve(20), wait(1000), wait(2000)]).then((result) => {
//   console.log(result);
// });

//! promise.all -2 version
// const wait = (timeout) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, timeout, true);
//     });
//   };
// const promiseAll = (promises) => {
//   const result = [];
//   const q = promises.length;
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < q; i++) {
//       promises[i].then((response) => {
//         result.push(response);

//         if (q === result.length) {
//           resolve(result);
//         }
//       });
//     }
//   });
// };
// promiseAll([Promise.resolve(20), wait(1000), wait(2000)]).then((result) => {
//   console.log(result);
// });

//! promise.all -3 version
const wait = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout, true);
  });
};
const promiseAll = (promises) => {
  const result = [];
  const q = promises.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < q; i++) {
      promises[i].then((response) => {
        result.push(response);

        if (q === result.length) {
          resolve(result);
        }
      });
    }
  });
};
const promiseWaitEach = async (promise) => {
  for await (let p of promise) {
    const d = await p;
    console.log(d);
  }
};
promiseWaitEach([Promise.resolve(20), wait(1000), wait(2000)]).then(
  (result) => {
    console.log(result);
  }
);

//! promise.all -4 version

async function promiseAll(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      const el = await arr[i];
      res.push(el);
    }
    return res;
  }
//! promise.all -5 version
