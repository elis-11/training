const arr = [3, 4, 6];
const resPow = arr.map((a) => Math.pow(a, 3));
console.log(resPow); // [ 12, 16, 24 ]

const mult = arr.map((a) => a * 4);
console.log(mult); //[ 27, 64, 216 ]

const nums = [1, 4, 9];
const resSqrt = nums.map((num) => Math.sqrt(num));
console.log(resSqrt); // [ 1, 2, 3 ]

const names = ["alise", "irme", "anne"];
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(capitalized); // [ 'Alise', 'Irme', 'Anne' ]

const numbers = [5, 6, 8, 14, 32];
const updatedNumbers = numbers.map((number) => {
  return number + 10;
});
console.log(updatedNumbers); // [15, 16, 18, 24, 42]

const doubled = numbers.map((num) => {
  return num * 3;
});
console.log(doubled); // [ 15, 18, 24, 42, 96 ]

const array = [{ price: 200 }, { price: 300 }];
const tax = 1.05;
const result = array.map((item) => item.price * tax);
console.log(result); //[ 210, 315 ]

const original = { a: 1, b: 2 };
const copy = { ...original, b: 3 }; // copy => { a: 1, b: 2, c: 3 }
console.log(original);
console.log(copy);

var foo = [
  { id: 1, data: [1, 2, 3] },
  { id: 2, data: [4, 5, 6] },
];
var resultFoo = foo.map((item) =>
  item.id == 1 ? { ...item, data: [7, 8, 9] } : item
);
console.log(resultFoo);

// Todo
const products = [
  { _id: "p1", name: "Toaster" },
  { _id: "p2", name: "Kuehlschrank" },
  { _id: "p3", name: "Wasserkocher" },
];
//! Kuehlschrank => KUEHLSCHRANK
//! Challenge #1:
// Wir wollen den Kuehlschrank UPPERCASE machen.  Dafür suchen wir ihn by ID und uppercasen dann Name
const uppercase = products.map(
  (product) =>
    product._id === "p2"
      ? { ...product, name: product.name.toUpperCase() }
      : product
  // product._id === "p2" ? { ...product, name: 'KUEHLSCHRANK' } : product
  // product._id === "p2" ? { ...product, name: 'Tralala' } : product
);
console.log("uppercase:", uppercase);
// Output:
// [
// { _id: "p1", name: "Toaster" },
// { _id: "p2", name: "KUEHLSCHRANK" },
// { _id: "p3", name: "Wasserkocher" }
// ]
// Benutze MAP und ternary im Map, um den Kuehlschrank zu finden, eine Copy von Kühlschrank zu machen und "name" upzudaten

//! Challenge #2:
// Schreibe eine Function, um ein BELIEBIGES Item uppercase zu machen:

const makeUppercase = (id) => {
  const productsUpdated = products.map((product) => {
    product._id === id && product.name === "Kuehlschrank"
      ? { ...product, name: product.name.toUpperCase() }
      : product;
  });
  console.log(productsUpdated); // => OUTPUT
};
console.log(makeUppercase());
//! -3- All to UPPERCASE
const UPPERCASE = products.map((product) => {
  product.name = product.name.toUpperCase();
  return product;
});
console.log("UPPERCASE: ", UPPERCASE);
// [{ _id: 'p1', name: 'TOASTER' },
// { _id: 'p2', name: 'KUEHLSCHRANK' },
// { _id: 'p3', name: 'WASSERKOCHER' }]
