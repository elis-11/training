//! How reduce() works without an initial value

const array = [15, 16, 17, 18, 19];
function reducer(total, item, index) {
  const result = total + item;
  console.log(
    `total: ${total}, item: ${item}, index: ${index}, result: ${result}`,
  );
  return result;
}
array.reduce(reducer);

//! How reduce() works with an initial value

const withInit = [15, 16, 17, 18, 19].reduce(
  (total, item) => total + item,
  10,
);
console.log(`withInit: ${withInit}`)

//! Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (total, item) => total + item.x,
  0,
);
console.log(sum); // 6

//! Flatten an array of arrays
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (total, item) => total.concat(item),
  [],
);
console.log(`flattened is: ${flattened}`);

//! Flatten an array of arrays
const arrFl = [[2,5],6,4,[[[3],4]]]
console.log(`arrFl: ${arrFl}`);
const flatSum = arrFl.flat(Infinity).reduce((total, item)=> total + item)
console.log(`flatSum: ${flatSum}`);

//! Counting instances of values in an object
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((total, item) => {
  total[item] = total[item] ? total[item] + 1 : 1
  return total
}, {});
console.log('countedNames:', countedNames)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//! Grouping objects by a property
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce((total, obj) => {
    const key = obj[property];
    const curGroup = total[key] ?? [];

    return { ...total, [key]: [...curGroup, obj] };
  }, {});
}
const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
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
      books: ["Bible", "Harry Potter"],
      age: 21,
    },
    {
      name: "Bob",
      books: ["War and peace", "Romeo and Juliet"],
      age: 26,
    },
    {
      name: "Alice",
      books: ["The Lord of the Rings", "The Shining"],
      age: 18,
    },
  ];
  console.log(friends)
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  const allbooks = friends.reduce(
    (total, item) => [...total, ...item.books],
    ["Alphabet"],
  );
  console.log(allbooks);
  // [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]

  //! Remove duplicate items in an array
const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const noDoublec = myArray.reduce(
  (total, item) => {
    if (!total.includes(item)) {
      return [...total, item];
    }
    return total;
  },
  [],
);

console.log(noDoublec);


//! Replace .filter().map() with .reduce()
const numbers = [-5, 6, 2, 0];
const doubledPositiveNumbers = numbers.reduce((total, item) => {
  if (item > 0) {
    const doubled = item * 2;
    return [...total, doubled];
  }
  return total;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

//!
const fruitsArr = ['apple', 'banana', 'banana', 'apple', 'apple']  // INPUT  
// OUTPUT: New array with all apple items: ['apple','apple','apple']
const reduceRes = fruitsArr.reduce((total, item) => {
  if(!total.includes(item)){
    return [...total, item]
  }
  return total
}, [])
console.log('reduceRes:', reduceRes) //  [ 'apple', 'banana' ]
