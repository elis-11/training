const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const fruitsSales = [
  { name: "Apple", price: 10 },
  { name: "Apple", price: 10 },
  { name: "Banana", price: 15 },
  { name: "Cherry", price: 7 },
  { name: "Cherry", price: 7 },
  { name: "Apple", price: 10 },
]
// INPUT: ARRAY / OUTPUT: Number => Sum prices aller Apples
const res = fruitsSales
.filter(item => item.name === "Cherry") // [ { name: 'Cherry', price: 7 }, { name: 'Cherry', price: 7 } ]
.reduce( (total, item) => total + item.price, 0) // Apples Total: 14
console.log("Apples Total:", res)

const products = [
  { _id: "p1", name: "Toaster", variants: ["small", "medium", "big"] },
  { _id: "p2", name: "Fridge", variants: ["small", "medium", "big"] },
  { _id: "p3", name: "Heater", variants: ["medium"] },
  { _id: "p4", name: "Waterboiler", variants: ["small", "medium"] },
  { _id: "p5", name: "Heater", variants: ["medium"] },
];
// INPUT: ARRAY
// OUTPUT: ARRAY
const filterProd = products.filter((item) => item.variants.length >= 2);
console.log(filterProd);
// Challenge: Create array of products which have at least two variants
/** OUTPUT: 
 * 
  [
    { _id: "p1", name: "Toaster", variants: ["small", "medium", "big"] },
    { _id: "p2", name: "Fridge", variants: ["small", "medium", "big"] },
    { _id: "p4", name: "Waterboiler", variants: ["small", "medium"] },
  ]
 */
//! Filtering out all small values
function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//! Find all prime numbers in an array
//! The following example returns all prime numbers in the array:
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//! FILTER
let fres = [
  { name: "Harry", skill: "JavaScript" },
  { name: "Mark", skill: "Python" },
  { name: "David", skill: "JavaScript" },
];
let js_fres = fres.filter((free) => {
  return free.skill == "JavaScript";
});
console.log(js_fres);
//Output = [{ name: "Harry", skill: "JavaScript" }, { name: "David", skill: "JavaScript" }]

//! FILTER - COMBINATION
const data = [
  { name: "Wallis", art: "Pferd", alter: 12, bild: "🐎" },
  { name: "Tiger", art: "Katze", alter: 7, bild: "🐅" },
  { name: "Alabaster", art: "Pferd", alter: 3, bild: "🐎" },
  { name: "Rufus", art: "Hund", alter: 16, bild: "🐕" },
  { name: "Bello", art: "Hund", alter: 2, bild: "🐕" },
];
const combi = data.filter((d) => d.alter > 7 && d.art === "Hund");
console.log("combi", combi);
Array(1);
// Output = 0 {name: "Rufus", art: "Hund", alter: 16, bild: "🐕"}

// Finding the even numbers
const isArr = [1, 2, 3, 4, 5, 6, 7];
const filArr = isArr.filter((elem) => {
  return elem % 2 == 0;
});
console.log("filArr:", filArr); // [2,4,6]

//  filter
const letters = ["G", "a", "e", "l", " ", "F", "r", "e", "i", "r", "e"];
const filteredEs = letters.filter((item) => {
  return item == "e";
});
console.log("filteredEs:", filteredEs); // [ 'e', 'e', 'e' ]

// for
let arrSimple = ["a", "b", "c"];
for (let letter of arrSimple) {
  console.log(letter);
} // a  b  c

let arrFruits = ["apple", "orange", "banana"];

for (let [firstLetter, ...restOfTheWord] of arrFruits) {
  // Create a shallow copy using the spread operator
  let [lastLetter] = [...restOfTheWord].reverse();
  console.log(firstLetter, lastLetter, restOfTheWord);
}

const allEsReduce = letters.reduce((total, item) => {
  return item === "e" ? total + 1 : total;
}, 0);
console.log("allEsReduce:", allEsReduce); //3


let arrWithObjects = [
  {
    name: "Jon",
    age: 32,
  },
  {
    name: "Elise",
    age: 33,
  },
];
// NOTE: Destructuring objects while using shorthand functions
// are required to be surrounded by parentheses
arrWithObjects.forEach(({ name, age: aliasForAge }) => {
  console.log(name, aliasForAge);
}); // Jon 32 , Elise 33

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((element, index, array) => {
  return element * 2;
});
console.log(newArr); // 2, 4, 6, 8, 10

let arrs = [1, 2, 3, 4, 5];
arrs.forEach((element, index, array) => {
  console.log(element * 2);
  if (index === 2) {
    console.log(array);
  }
  // index, and oldArray are provided as 2nd and 3th argument by the callback
});
console.log("arrs:", arrs); // [ 1, 2, 3, 4, 5 ]

// forEach
let newArray = [
  { name: "Clark", age: 19 },
  { name: "Julia", age: 26 },
];
newArray.forEach((person) => {
  console.log("I am " + person.name + " and I am " + person.age + " old");
}); // I am Clark and I am 19 old, I am Julia and I am 26 old

// DINAMIC SEARCH
const people = [
  { _id: "p1", name: "Julia" },
  { _id: "p2", name: "Igor" },
  { _id: "p3", name: "Inna" },
  { _id: "p4", name: "Tiana" },
];
// DYNAMIC search
const searchPeople = (part) => {
  const peopleFound = people.filter((person) => {
    return person.name.includes(part);
  });
  return peopleFound; // []
};
const personFound = searchPeople("a");
console.log("personFound:", personFound);
//  { _id: 'p1', name: 'Julia' },
//  { _id: 'p3', name: 'Inna' },
//  { _id: 'p4', name: 'Tiana' }

// filter smallCost
let cost = [10, 40, 5, 4, 700];
let smallCost = cost.filter(function (costItem) {
  return costItem < 20;
});
console.log(smallCost); // [ 10, 5, 4 ]

// filter short words
const allWords = ["cat", "dog", "owl", "tiger", "mause"];
const shortWords = allWords.filter((word) => {
  return word.length <= 4;
});
console.log(shortWords); // [ 'cat', 'dog', 'owl' ]

const peopleData = [
  { name: "John", age: 28, home: "Leeds" },
  { name: "Anne", age: 19, home: "Liverpool" },
  { name: "Inna", age: 32, home: "Sheffield" },
  { name: "Katy", age: 16, home: "Leeds" },
];
const homeLeeds = peopleData.filter((person) => {
  return person.home === "Leeds";
});
console.log(homeLeeds); //  { name: 'John', age: 28, home: 'Leeds' },{ name: 'Katy', age: 16, home: 'Leeds' }

const lowestAge = peopleData.filter(data =>{
  return data.age < 20
})
console.log(lowestAge) //  { name: 'Anne', age: 19, home: 'Liverpool' },{ name: 'Katy', age: 16, home: 'Leeds' }

const arrFilt = [1, 2, 3, 4, 5, 1, 1, 51];
const ones = arrFilt.filter((num) => num === 1);
console.log(ones); //[ 1, 1, 1 ]

