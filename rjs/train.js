//! arr
const arr1 = [2, 3, [4], 5, [[6]], 7];
console.log(`arr1: ${arr1}`);
const result = arr1.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
console.log(`result: ${result}`);
//! concat
const arrConcat = arr1.reduce((acc, curr) => acc.concat(curr), []);
console.log(`arrConcat: ${arrConcat}`);
//! object
const arrObj = [{ price: 4 }, { price: 5 }, { price: 6 }, { price: 7 }];
const resultObj = arrObj.reduce((acc, curr) => acc + curr.price, 0);
console.log(resultObj);
//! values in an object
const names = ["Lisa", "Igor", "Tiana", "Lisa", "Igor"];

const countNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log(countNames);

