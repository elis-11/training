const users = [
  { name: "test1", orders: 20 },
  { name: "test1", orders: 8 },
  { name: "test2", orders: 8 },
  { name: "test4", orders: 10 },
  { name: "test3", orders: 30 },
];

let result = [];
users.forEach(function (a) {
  if (!this[a.name]) {
    this[a.name] = {
      name: a.name,
      orders: 0,
    };
    result.push(this[a.name]);
  }
  this[a.name].orders += a.orders;
}, Object.create(null));
let val = JSON.stringify(result);
console.log(val);
//[{"name":"test1","orders":28},{"name":"test2","orders":8},{"name":"test4","orders":10},{"name":"test3","orders":30}]

const countBy = users.reduce((prev, curr) => ((prev[curr.name] = ++prev[curr.name] || 1), prev),
    {}
  );
console.log('countBy:', countBy) // countBy: { test1: 2, test2: 1, test4: 1, test3: 1 }

//!
const numbers = [1800, 50, 300, 20, 100];
// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let difference = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); // 1330