//! Example 1: Sum of All Values of Array
const numbers1 = [1, 2, 3, 4, 5, 6];
function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  
  let sum = numbers1.reduce(sum_reducer);
  console.log(sum); // 21
  
  // using arrow function
  let summation = numbers1.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(summation); // 21
//! Example 2: Subtracting Numbers in Array
const numbers = [1800, 50, 300, 20, 100];
// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let difference = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); // 1330
//!
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);
console.log(remaining); // 2700

//! Example 3: Remove Duplicate Items from Array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

//! Example 4: Grouping Objects by a property
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let key = currentObject[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentObject);
      return accumulator;
    }, {});
  }
  let groupedPeople = groupBy(people, "age");
  console.log(groupedPeople);
  //{
  //  '19': [ { name: 'Dwight', age: 19 } ],
  //  '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
  //  '55': [
  //    { name: 'Oliver', age: 55 },
  //    { name: 'Michael', age: 55 },
  //    { name: 'Kevin', age: 55 }
  //  ]
  //}