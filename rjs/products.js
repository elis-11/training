const prod = [
  {_id: "p1",status: "1",name: "Broccoli",volume: 7,category: "vegetables",inside: false,},
  {_id: "p2",status: "1",name: "Mango",volume: 8,category: "fruits",inside: true,},
  {_id: "p3",status: "1",name: "Cheddar",volume: 12,category: "shees",inside: false,},
  {_id: "p4",status: "1",name: "Tomato",volume: 5,category: "vegetables",inside: true,},
  {_id: "p5",status: "1",name: "Mango",volume: 8,category: "fruits",inside: true,},
  {_id: "p6",status: "1",name: "Tomato",volume: 5,category: "vegetables",inside: true,},
  {_id: "p7",status: "1",name: "Tomato",volume: 5,category: "vegetables",inside: true,},
];
// count all prod = 7
const countAll = prod.reduce((total, {status}) =>status === '1' ? total += 1 : total , 0);
console.log("countAll:", countAll);

// count volume = 50
const countVolume = prod.reduce((total, item) => {
  return total + item.volume;
}, 0);
console.log("countVolume:", countVolume);

// count concret item = 2
const countMango = prod.reduce((total, item) => {
  return item.name === "Mango" ? total + 1 : total;
}, 0);
console.log("countMango:", countMango);

// count volume of concret items = 16
const countConcVolume = prod.reduce((total, item) => {
  return item.name === "Mango" ? total + item.volume : total;
}, 0);
console.log("MangoVolume:", countConcVolume);

// find the biggest = Cheddar
const biggestProd = prod.reduce((biggest, item) => {
  return biggest.volume > item.volume ? biggest : item;
});
console.log(biggestProd);

// boolean true = 5
const booleanProd = prod.reduce((total, { inside }) => total + inside, 0);
console.log(booleanProd);
