const prod = [
  {_id: "p1",status: "1",name: "Broccoli",volume: 8,category: "vegetable",inside: false,},
  {_id: "p2",status: "1",name: "Mango",volume: 8,category: "fruit",inside: true,},
  {_id: "p3",status: "1",name: "Philadelphia",volume: 12,category: "cheese",inside: false,},
  {_id: "p4",status: "1",name: "Tomato",volume: 5,category: "vegetable",inside: true,},
  {_id: "p5",status: "1",name: "Mango",volume: 8,category: "fruit",inside: true,},
  {_id: "p6",status: "0",name: "Tomato",volume: 5,category: "vegetable",inside: true,},
  {_id: "p7",status: "0",name: "Tomato",volume: 5,category: "vegetable",inside: true,},
  { _id: "p8",status: "1", name: "Tomato", volume: 5, category: 'vegetable',inside: true, },
  { _id: "p9",status: "0", name: "Apple", volume: 6, category: 'fruit',inside: true, },
  { _id: "p10",status: "0", name: "Mango", volume: 8, category: 'fruit',inside: true, },

];
// total products
const products = prod.length
console.log('products:', products);

// count all prod = 7
const countAll = prod.reduce((total, {status}) =>status === '1' ? total += 1 : total , 0);
console.log("status:", countAll);

// count volume = 70
const countVolume = prod.reduce((total, item) => {
  return total + item.volume;
}, 0);
console.log("countVolume:", countVolume);

// count concret item = 2
const countMangos = prod.reduce((total, item) => {
  return item.name === "Mango" ? total + 1 : total;
}, 0);
console.log("countMangos:", countMangos);

// count volume of concret items = 16
const countConcVolume = prod.reduce((total, item) => {
  return item.name === "Mango" ? total + item.volume : total;
}, 0);
console.log("MangoVolume:", countConcVolume);

// find the biggest = Cheddar
const biggestProd = prod.reduce((total, item) => {
  return total.volume > item.volume ? total : item;
});
console.log(biggestProd);

// boolean true = 5
const booleanProd = prod.reduce((total, { inside }) => total + inside, 0);
console.log('booleanProd: ', booleanProd);

// count products
const countProd = prod.reduce((total, item) =>{
  total[item.name] = total[item.name] ? total[item.name] + 1 : 1;
  return total
}, {})
console.log('countProd:', countProd)

const concretCategory = prod.reduce((total, item)=> item.category === 'vegetable' ? total + 1 : total, 0)
console.log('concretCategory:', concretCategory)