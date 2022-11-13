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
  (acc, curr) => (curr.name === "Alice" ? acc + 1 : acc),
  0
);
// countReduce = arr.reduce((acc, curr) => {
//   return curr.name === "Alice" ? acc + 1 : acc
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
const categPrice = products.reduce(
  (acc, item) => (item.category === "premium" ? acc + item.price : acc),
  0
);
console.log(categPrice);

const countPrice = products.reduce((acc, item) => acc + item.price, 0);
console.log(countPrice);

const categPrem = products.reduce(
  (acc, item) => (item.category === "premium" ? acc + 1 : acc),
  0
);
console.log(categPrem);

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
const countFruits = fruits.reduce((allFruits, fruit) => {
  allFruits[fruit] = allFruits[fruit] ? allFruits[fruit] + 1 : 1;
  //   if (allFruits[fruit]) allFruits[fruit] += 1;
  //   else allFruits[fruit] = 1;
  return allFruits;
}, {});
console.log(countFruits);

//! forEach
const fruitsStat = {};
fruits.forEach((item) => {
  fruitsStat[item] = fruitsStat[item] ? fruitsStat[item] + 1 : 1;
  //  or
  //   if (fruitsStat[item]) {
  //     fruitsStat[item] += 1;
  //   } else {
  //     fruitsStat[item] = 1;
  //   }
}, {});
console.log(fruitsStat);

//! reduce - compare
const thinks = [
  { _id: "p1", name: "WP", price: 14, category: "basic" },
  { _id: "p2", name: "WS", price: 9, category: "basic" },
  { _id: "p3", name: "WR", price: 34, category: "premium" },
];
const biggestThink = thinks.reduce((biggest, item) => {
  return biggest.price > item.price ? biggest : item;
});
console.log(biggestThink);
