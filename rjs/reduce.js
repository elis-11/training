// sum in array with an initial value ,0
const ar = [1, 2, 3, 4, 5, 6];
const arSum = ar.reduce((total, item) => total + item, 0);
console.log(`arSum: ${arSum}`);

// sum in array without an initial value ,0
const arr = [15, 16, 17, 18, 19];
const reducer = (total, item, i) => {
  const returns = total + item;
  console.log(`total: ${total}, item: ${item}, i: ${i}, returns: ${returns}`);
  return returns;
};
arr.reduce(reducer);

// sum in array with an initial value ,0
const arra = [15, 16, 17, 18, 19];

const withInValue = arra.reduce((total, item) => total + item, 0);
console.log(`withInValue: ${withInValue}`);

// sum of values in an object array
const objects = [
  { name: "first", price: 15 },
  { name: "seconc", price: 21 },
  { name: "third", price: 38 },
  { name: "fourth", price: 46 },
];

const objectSum = objects.reduce((total, item) => total + item.price, 0);
console.log(`objectSum: ${objectSum}`);

//! flatten an array of arrays -1
const arr2 = [[1, 2, [3, 4]], [[[[3]]]], [[[7]]], [9], [10, 15]];
console.log(`arr2: ${arr2}`);

const sumArr2 = arr2.reduce((total, item) => total + item);
console.log(`sumArr2: ${sumArr2}`);

const flatArr2 = arr2.flat(Infinity).reduce((total, item) => total + item);
console.log(`flatArr2: ${flatArr2}`);

//! flatten an array of arrays -2
const flattenConcat = [
  [0, 1],
  [2, 3],
  [4, 8],
].reduce((total, item) => total.concat(item), []);
console.log(`flattenConcat: ${flattenConcat}`);
const flSum = flattenConcat.reduce((total, item) => total + item);
console.log(`flSum: ${flSum}`);

//! unique
let objArr = [
  {
    id: "123",
  },
  {
    id: "123",
  },
  {
    id: "456",
  },
];

objArr = objArr.reduce(
  (acc, cur) => [...acc.filter((obj) => obj.id !== cur.id), cur],
  []
);
console.log(objArr)

