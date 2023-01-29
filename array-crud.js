const array = [
  { _id: "1", name: "Ilon", age: "30", country: "Germany", city: "Hamburg" },
  { _id: "2", name: "Luisa", age: "32", country: "Germany", city: "Berlin" },
];
// add age for all
let addAge = array.map((obj) => ({ ...obj, age: 27 }));
console.log({ addAge: addAge });
console.log({ array: addAge });
// array: [
//   { _id: '1', name: 'Ilon', age: 27 },
//   { _id: '2', name: 'Luisa', age: 27 }
// ]
const fullData = array.map((item) => ({
  ...item,
  details: item.name + " " + item.age,
}));
console.log(fullData);

let removeCity = array.map((item) => {
  delete item.city;
  return item;
});
console.log(array);

let removeCountry = array.map(({ country, ...rest }) => {
  return rest;
});
console.log({ removeCountry: removeCountry });

array.forEach((e) => delete e.age);
console.log(array)
