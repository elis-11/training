//! How reduce() works without an initial value

const array1 = [15, 16, 17, 18, 19];
function reducer(total, item, index) {
  const result = total + item;
  console.log(
    `total: ${total}, item: ${item}, index: ${index}, result: ${result}`
  );
  return result;
}
array1.reduce(reducer);

//! How reduce() works with an initial value

const withInit = [15, 16, 17, 18, 19].reduce((total, item) => total + item, 10);
console.log(`withInit: ${withInit}`);

//! Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((total, item) => total + item.x, 0);
console.log(sum); // 6

//! Flatten an array of arrays
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((total, item) => total.concat(item), []);
console.log(`flattened is: ${flattened}`);

//! Flatten an array of arrays
const arrFl = [[2, 5], 6, 4, [[[3], 4]]];
console.log(`arrFl: ${arrFl}`);
const flatSum = arrFl.flat(Infinity).reduce((total, item) => total + item);
console.log(`flatSum: ${flatSum}`);

//! Counting instances of values in an object
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((total, item) => {
  total[item] = total[item] ? total[item] + 1 : 1;
  return total;
}, {});
console.log("countedNames:", countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//! Grouping objects by a property
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Jane", age: 21 },
];
const groupBy = (srcArray, property) => {
  return srcArray.reduce((total, item) => {
    const key = item[property];
    const curGroup = total[key] ?? [];

    return { ...total, [key]: [...curGroup, item] };
  }, {});
}
const groupedPeople = groupBy(people, "age");
console.log('groupedPeople: ', groupedPeople);

const groupedNames = groupBy(people, "name");
console.log('groupedNames: ', groupedNames);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//! Concatenating arrays contained in an array of objects using the spread syntax & initialValue
const friends = [
  {
    name: "Anna",
    books: ["War and peace", "Romeo and Juliet"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["The Shining", "Harry Potter"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
console.log({friends});
// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(
  (total, item) => [...total, ...item.books],
  ["Alphabet"]
);
console.log({allbooks});
// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

//! Remove duplicate items in an array
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const noDoublec = myArray.reduce((total, item) => {
  return !total.includes(item) 
  ? [...total, item] 
  : total;
}, []);

console.log('noDoublec:', noDoublec);

//! Replace .filter().map() with .reduce()
const numbers = [-5, 6, 2, 0];
const doubledPositiveNumbers = numbers.reduce((total, item) => {
  if (item > 0) {
    const doubled = item * 2;
    return [...total, doubled];
  }
  return total;
}, []);

console.log("doubledPositiveNumbers:", doubledPositiveNumbers); // [12, 4]

//!
const fruitsArr = ["apple", "banana", "banana", "apple", "apple"]; // INPUT
// OUTPUT: New array with all apple items: ['apple','apple','apple']
// const reduceRes = fruitsArr.reduce((total, item) => !total.includes(item) ? [...total, item] : total, []);

const reduceRes = fruitsArr.reduce((total, item) => {
  return !total.includes(item) ? [...total, item] : total;
}, []);
console.log("reduceRes:", reduceRes); //  [ 'apple', 'banana' ]

const fruitsSales = [
  { name: "Apple", price: 10 },
  { name: "Apple", price: 10 },
  { name: "Banana", price: 15 },
  { name: "Cherry", price: 7 },
  { name: "Cherry", price: 7 },
  { name: "Apple", price: 10 },
];
// INPUT: ARRAY / OUTPUT: Number => Sum prices aller Apples
const fruitsFilterReduce = fruitsSales
  .filter((item) => item.name === "Cherry") // [ { name: 'Cherry', price: 7 }, { name: 'Cherry', price: 7 } ]
  .reduce((total, item) => total + item.price, 0); // Cherry Total: 14
console.log('fruitsFilterReduce:', fruitsFilterReduce)

const fruitReduce = fruitsSales.reduce((total, item) => {
  return item.name === 'Cherry'
  ? total + item.price
  :total
}, 0)
console.log('fruitReduce:', fruitReduce)

const array = [
  { id: 111, name: "John", age: 29 },
  { id: 112, name: "Sarah", age: 25 },
  { id: 122, name: "Kate", age: 22 },
  { id: 123, name: "Tom", age: 21 },
  { id: 125, name: "Emma", age: 24 },
];
const convertArrayToObject1 = array.reduce(
  (obj, item, key) => ((obj[[item[key]]] = item), obj),
  {}
);
console.log("convertArrayToObject1:", convertArrayToObject1);

const convertArrayToObject2 = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item,
    }),
    {}
  );
console.log("convertArrayToObject2:", convertArrayToObject2(array));
