//! How reduce() works without an initial value

const array = [15, 16, 17, 18, 19];
function reducer(acc, curr, index) {
  const result = acc + curr;
  console.log(
    `acc: ${acc}, curr: ${curr}, index: ${index}, result: ${result}`,
  );
  return result;
}
array.reduce(reducer);

//! How reduce() works with an initial value

const withInit = [15, 16, 17, 18, 19].reduce(
  (acc, curr) => acc + curr,
  10,
);
console.log(`withInit: ${withInit}`)

//! Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (acc, curr) => acc + curr.x,
  0,
);
console.log(sum); // 6

//! Flatten an array of arrays
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (acc, curr) => acc.concat(curr),
  [],
);
console.log(`flattened is: ${flattened}`);

//! Flatten an array of arrays
const arrFl = [[2,5],6,4,[[[3],4]]]
console.log(`arrFl: ${arrFl}`);
const flatSum = arrFl.flat(Infinity).reduce((acc, curr)=> acc + curr)
console.log(`flatSum: ${flatSum}`);

//! Counting instances of values in an object
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log(countedNames)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

//! Grouping objects by a property
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
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
    (acc, curr) => [...acc, ...curr.books],
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
const myArrayWithNoDuplicates = myArray.reduce(
  (acc, curr) => {
    if (!acc.includes(curr)) {
      return [...acc, curr];
    }
    return acc;
  },
  [],
);

console.log(myArrayWithNoDuplicates);


//! Replace .filter().map() with .reduce()
const numbers = [-5, 6, 2, 0];
const doubledPositiveNumbers = numbers.reduce((acc, curr) => {
  if (curr > 0) {
    const doubled = curr * 2;
    return [...acc, doubled];
  }
  return acc;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
