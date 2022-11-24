const message = ["JavaScript ", "is ", "fun."];
const readMessage = message.reduce((total, item) => total + item);
console.log('message:', message); // [ 'JavaScript ', 'is ', 'fun.' ]
console.log('message.join:',message.join("")); // JavaScript is fun.
console.log('readMessage:', readMessage)

// 2  Sum of All Values of Array
const numsSum = [1, 2, 3, 4, 5, 6];
const sum = numsSum.reduce((total, item) => total + item, 0);
console.log("sum:", sum); // 21

// 3 Subtracting Numbers in Array
const numsDif = [18, 5, 3, 2, 1];
const diff = numsDif.reduce((total, item) => total - item);
console.log("diff:", diff); // 7

// 4 Subtracting Numbers in Array
const expenses = [18, 20, 30, 50, 5];
const salary = 150;
const remaining = expenses.reduce((total, item) => total - item, salary);
console.log("remaining:", remaining); // 150-18-20-50-5= 27

// 5 Remove Duplicate Items from Array
let ages = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
const unique = ages.reduce((total, item) => {
  if (total.indexOf(item) === -1) {
    total.push(item);
  }
  return total;
}, []);
console.log("unique:", unique); // [ 18, 21, 1, 51, 5, 7, 10 ]

// 6 Grouping Objects by a property
let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];
const group = (objArr, property) => {
  return objArr.reduce((total, item) => {
    let key = item[property];
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(item);
    return total;
  }, {});
};

let grouped = group(people, "age");
console.log(grouped);
