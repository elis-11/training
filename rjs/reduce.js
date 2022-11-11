// sum in array with an initial value ,0
const ar = [1, 2, 3, 4, 5, 6];
const arSum = ar.reduce((prev, curr) => prev + curr, 0);
console.log(`arSum: ${arSum}`);

// sum in array without an initial value ,0
const arr = [15, 16, 17, 18, 19];
const reducer = (acc, curr, i) => {
  const returns = acc + curr;
  console.log(`acc: ${acc}, curr: ${curr}, i: ${i}, returns: ${returns}`);
  return returns;
};
arr.reduce(reducer);

// sum in array with an initial value ,0
const arra = [15, 16, 17, 18, 19];

const withIn = arra.reduce((acc, curr) => acc + curr, 0);
console.log(`withIn: ${withIn}`);

// sum of values in an object array
const objects = [
  { name: "first", price: 15 },
  { name: "seconc", price: 21 },
  { name: "third", price: 38 },
  { name: "fourth", price: 46 },
];

const obsum = objects.reduce((acc, curr) => acc + curr.price, 0);
console.log(`obsum: ${obsum}`);

//! flatten an array of arrays -1
const arr2 = [[1, 2, [3, 4]],[[[[3]]]],[[[7]]], [9], [10, 15]]
console.log(`arr2: ${arr2}`)

const sumArr2 = arr2.reduce((acc, curr)=>acc + curr)
console.log(`sumArr2: ${sumArr2}`)

const flatArr2 = arr2.flat(Infinity).reduce((acc ,curr)=> acc + curr)
console.log(`flatArr2: ${flatArr2}`)



//! flatten an array of arrays -2
const flattenConcat = [[0, 1], [2,3], [4,8]].reduce((acc, curr)=> acc.concat(curr),[])
console.log(`flattenConcat: ${flattenConcat}`)
const flSum = flattenConcat.reduce((acc, curr)=> acc + curr)
console.log(`flSum: ${flSum}`)

