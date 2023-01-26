const array = [
  { _id: "1", name: "Ilon" },
  { _id: "2", name: "Luisa" },
];
let addAge = array.map((obj) => ({ ...obj, age: 27 }));
console.log({ addAge: addAge });
console.log({array: addAge})