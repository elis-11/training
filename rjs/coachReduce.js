const arr = [
  { _id: "p1", name: "Lisa" },
  { _id: "p2", name: "Alice" },
  { _id: "p3", name: "Ricci" },
  { _id: "p4", name: "Alice" },
  { _id: "p5", name: "Tiana" },
  { _id: "p6", name: "Alice" },
];
console.log(arr);

// ! for loop
let count = 0;
for (let item of arr) {
  if (item.name === "Alice") {
    count++;
  }
}

// ! forEach
console.log(`count: ${count}`);
count = 0;
arr.forEach((item) => {
  if (item.name === "Alice") {
    count++;
  }
});
console.log(`count: ${count}`);

// ! filter
const countFilter = arr.filter((item) => {
  return item.name === "Alice";
}).length;
console.log(`countFilter: ${countFilter}`);

// ! reduce 1
countReduce = arr.reduce(
  (total, item) => (item.name === "Alice" ? total + 1 : total),
  0
);
// countReduce = arr.reduce((total, item) => {
//   return item.name === "Alice" ? total + 1 : total
// }, 0);
console.log(`countReduce: ${countReduce}`);

// ! reduce 2
const products = [
  { _id: "p1", name: "WP", price: 4, category: "basic" },
  { _id: "p2", name: "WS", price: 9, category: "basic" },
  { _id: "p3", name: "TEP", price: 34, category: "premium" },
  { _id: "p4", name: "WM", price: 28, category: "premium" },
  { _id: "p5", name: "WK", price: 71, category: "premium" },
];
console.log(products)

// price of premium
const categPrice = products.reduce(
  (total, item) => (item.category === "premium" ? total + item.price : total),
  0
);
console.log(categPrice);

// count premium products
const categPrem = products.reduce(
  (total, item) => (item.category === "premium" ? total + 1 : total),
  0
);
console.log(categPrem);
// price of all products
const countPrice = products.reduce((total, item) => total + item.price, 0);
console.log(countPrice);

// ! reduce 3 count all items together
const fruits = [
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "mango",
  "orange",
];
console.log(fruits)

// count category of fruits
const countFruits = fruits.reduce((total, item) => {
  total[item] = total[item] ? total[item] + 1 : 1;
  return total;
}, {});
console.log(countFruits);

//! forEach
const fruitsStat = {};
fruits.forEach((item) => {
  fruitsStat[item] = fruitsStat[item] ? fruitsStat[item] + 1 : 1;
}, {});
console.log(fruitsStat);

//! reduce - compare
const thinks = [
  { _id: "p1", name: "WP", price: 14, category: "basic" },
  { _id: "p2", name: "WS", price: 9, category: "basic" },
  { _id: "p3", name: "WR", price: 34, category: "premium" },
];
const biggestThink = thinks.reduce((total, item) => {
  return total.price > item.price ? total : item;
});
console.log(biggestThink);

//---
