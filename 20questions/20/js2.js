//! promise.all -1 version
 const wait1 = (timeout) => {
   return new Promise((resolve, reject) => {
     setTimeout(resolve, timeout, true);
   });
 };
 Promise.all([Promise.resolve(20), wait1(1000), wait1(2000)]).then((result) => {
   console.log('wait1',result);
 });

//! promise.all -2 version
const wait2 = (timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, timeout, true);
    });
  };
const promiseAll2 = (promises) => {
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
promiseAll2([Promise.resolve(20), wait2(1000), wait2(2000)]).then((result) => {
  console.log('wait2',result);
});

//! promise.all -3 version
const wait3 = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout, true);
  });
};
const promiseAll3 = (promises) => {
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
promiseWaitEach([Promise.resolve(20), wait3(1000), wait3(2000)]).then(
  (result) => {
    console.log('wait3',result);
  }
);

//! promise.all -4 version
// async function promiseAll(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//       const el = await arr[i];
//       res.push(el);
//     }
//     return res;
//   }
