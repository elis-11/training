const products = [
  {
    _id: "p1",
    status: "1",
    name: "Broccoli",
    volume: 8,
    category: "vegetable",
    price: 2,
    inside: false,
  },
  {
    _id: "p2",
    status: "1",
    name: "Mango",
    volume: 8,
    category: "fruit",
    price: 1.5,
    inside: true,
  },
  {
    _id: "p3",
    status: "1",
    name: "Philadelphia",
    volume: 12,
    category: "cheese",
    price: 5.5,
    inside: false,
  },
  {
    _id: "p4",
    status: "1",
    name: "Tomato",
    volume: 5,
    category: "vegetable",
    price: 0.5,
    inside: true,
  },
  {
    _id: "p5",
    status: "1",
    name: "Mango",
    volume: 8,
    category: "fruit",
    price: 1.5,
    inside: true,
  },
  {
    _id: "p6",
    status: "2",
    name: "Tomato",
    volume: 5,
    category: "vegetable",
    price: 0.5,
    inside: true,
  },
  {
    _id: "p7",
    status: "2",
    name: "Tomato",
    volume: 5,
    category: "vegetable",
    price: 0.5,
    inside: true,
  },
  {
    _id: "p8",
    status: "1",
    name: "Tomato",
    volume: 5,
    category: "vegetable",
    price: 0.5,
    inside: true,
  },
  {
    _id: "p9",
    status: "2",
    name: "Apple",
    volume: 6,
    category: "fruit",
    price: 1,
    inside: true,
  },
  {
    _id: "p10",
    status: "2",
    name: "Mango",
    volume: 8,
    category: "fruit",
    price: 1.5,
    inside: true,
  },
];
// total products
const productsLength = products.length;
console.log("productsLength:", productsLength);

// count volume = 70
const countVolume = products.reduce((total, item) => total + item.volume, 0);
console.log("countVolume:", countVolume);

// count concret item = 2
const countMangos = products.reduce((total, item) => {
  return item.name === "Mango" ? total + 1 : total;
}, 0);
console.log("countMangos:", countMangos);

// count volume of concret items = 16
const countConcVolume = products.reduce(
  (total, item) => (item.name === "Mango" ? total + item.volume : total),
  0
);
console.log("MangoVolume:", countConcVolume);

const concretCategory = products.reduce(
  (total, item) => (item.category === "vegetable" ? total + 1 : total),
  0
);
console.log("concretCategory:", concretCategory);

const productsPrice = products.reduce((total, item) => total + item.price, 0);
console.log("productsPrice:", productsPrice);

// find the biggest
const biggestProd = products.reduce((total, item) =>
  total.volume > item.volume ? total : item
);
console.log("biggestProd:", biggestProd);

//! count products
const countProd = products.reduce((total, item) => {
  total[item.name] = total[item.name] ? total[item.name] + 1 : 1;
  return total;
}, {});
console.log("countProd:", countProd);
//countProd: { Broccoli: 1, Mango: 3, Philadelphia: 1, Tomato: 4, Apple: 1 }

// no double
const noDouble = products.reduce(
  (total, item) => (!total.includes(item.name) ? [...total, item.name] : total),
  []
);
console.log("noDouble:", noDouble);

// count all products = 7
const countAll = products.reduce(
  (total, { status }) => (status === "2" ? total + 1 : total),
  0
);
console.log("status:", countAll);

// boolean true = 5
const insideBoolean = products.reduce((total, { inside }) => total + inside, 0);
console.log("insideBoolean: ", insideBoolean);

// find: fruit & cheese / boolean
const addBoolean = products.reduce((total, item) => {
  total[item.name] = {
    category: item.category,
    passed: ["fruit", "cheese"].includes(item.category),
  };
  return total;
}, {});
console.log("addBoolean:", addBoolean);
