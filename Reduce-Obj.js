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
];
// total products
const productsLength = products.length;
console.log("productsLength:", productsLength); // 10

// count volume = 70
const countVolume = products.reduce((total, item) => total + item.volume, 0);
console.log("countVolume:", countVolume); // 70

// count concret item = 2
const countMangos = products.reduce((total, item) => {
  return item.name === "Mango" ? total + 1 : total;
}, 0);
console.log("countMangos:", countMangos); // 3

// count volume of concret items = 16
const countConcVolume = products.reduce(
  (total, item) => (item.name === "Mango" ? total + item.volume : total),
  0
);
console.log("MangoVolume:", countConcVolume); // 24

const concretCategory = products.reduce(
  (total, item) => (item.category === "vegetable" ? total + 1 : total),
  0
);
console.log("concretCategory:", concretCategory); // 5

const productsPrice = products.reduce((total, item) => total + item.price, 0);
console.log("productsPrice:", productsPrice); // 15

// find the biggest
const biggestProd = products.reduce((total, item) =>
  total.volume > item.volume ? total : item
);
console.log("biggestProd:", biggestProd); //  {_id: 'p3',status: '1',name: 'Philadelphia',volume: 12,category: 'cheese',price: 5.5, inside: false}

//! count products
const countProd = products.reduce((total, item) => {
  total[item.name] = total[item.name] ? total[item.name] + 1 : 1;
  return total;
}, {});
console.log("countProd:", countProd); // { Broccoli: 1, Mango: 3, Philadelphia: 1, Tomato: 4, Apple: 1 }

// no double
const noDouble = products.reduce(
  (total, item) => (!total.includes(item.name) ? [...total, item.name] : total),
  []
);
console.log("noDouble:", noDouble); // [ 'Broccoli', 'Mango', 'Philadelphia', 'Tomato', 'Apple' ]

// count status = 2
const countStatus1 = products.reduce(
  (total, { status }) => (status === "1" ? total + 1 : total),
  0
);
console.log("countStatus1:", countStatus1); // 6

// boolean true = 8
const insideBoolean = products.reduce((total, { inside }) => total + inside, 0);
console.log("insideBoolean: ", insideBoolean); //8

// find: fruit & cheese / boolean
const addBoolean = products.reduce((total, item) => {
  total[item.name] = {
    category: item.category,
    passed: ["fruit", "cheese"].includes(item.category),
  };
  return total;
}, {});
console.log("addBoolean:", addBoolean);
// {Broccoli: { category: 'vegetable', passed: false },
//   Mango: { category: 'fruit', passed: true },
//   Philadelphia: { category: 'cheese', passed: true },
//   Tomato: { category: 'vegetable', passed: false },
//   Apple: { category: 'fruit', passed: true }

//!
const [filteredCategory, setFilteredCategory] = useState("");
let filteredCars = cars;
console.log(filteredCategory);
if (filteredCategory) {
  filteredCars = filteredCars.filter((car) => {
    return car.category.includes(filteredCategory);
  });
}
if (priceMin) {
  filteredCars = filteredCars.filter((car) => {
    return car.price >= priceMin;
  });
}

//!
// Generate string of checked items
var checkedItems = checked.length
  ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
  : "";
