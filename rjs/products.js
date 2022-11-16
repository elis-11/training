const prod = [
  {_id: "p1",status: "1",name: "Broccoli",volume: 8,category: "vegetable", price: 2,inside: false,},
  {_id: "p2",status: "1",name: "Mango",volume: 8,category: "fruit", price: 1.5,inside: true,},
  {_id: "p3",status: "1",name: "Philadelphia",volume: 12,category: "cheese", price: 5.5,inside: false,},
  {_id: "p4",status: "1",name: "Tomato",volume: 5,category: "vegetable", price: .5,inside: true,},
  {_id: "p5",status: "1",name: "Mango",volume: 8,category: "fruit", price: 1.5,inside: true,},
  {_id: "p6",status: "2",name: "Tomato",volume: 5,category: "vegetable", price: .5,inside: true,},
  {_id: "p7",status: "2",name: "Tomato",volume: 5,category: "vegetable", price: .5,inside: true,},
  {_id: "p8",status: "1",name: "Tomato", volume: 5, category: 'vegetable', price: .5,inside: true, },
  {_id: "p9",status: "2",name: "Apple", volume: 6, category: 'fruit', price: 1,inside: true, },
  {_id: "p10",status: "2",name: "Mango", volume: 8, category: 'fruit', price: 1.5,inside: true, },
];
// total products
const products = prod.length
console.log('products:', products);

// count volume = 70
const countVolume = prod.reduce((total, item) => total + item.volume, 0);
console.log("countVolume:", countVolume);

// count concret item = 2
const countMangos = prod.reduce((total, item) => {
  return item.name === "Mango" ? total + 1 : total;
}, 0);
console.log("countMangos:", countMangos);

// count volume of concret items = 16
const countConcVolume = prod.reduce((total, item) => item.name === "Mango" ? total + item.volume : total, 0);
console.log("MangoVolume:", countConcVolume);

const concretCategory = prod.reduce((total, item)=> item.category === 'vegetable' ? total + 1 : total, 0)
console.log('concretCategory:', concretCategory)

const productsPrice = prod.reduce((total, item)=> total + item.price, 0)
console.log('productsPrice:', productsPrice)

// find the biggest 
const biggestProd = prod.reduce((total, item) =>  total.volume > item.volume ? total : item);
console.log('biggestProd:', biggestProd);

// count products
const countProd = prod.reduce((total, item) =>{
  total[item.name] = total[item.name] ? total[item.name] + 1 : 1;
  return total
}, {})
console.log('countProd:', countProd)

// no double
const noDouble = prod.reduce((total, item)=> !total.includes(item.name) ? [...total, item.name] : total, [])
console.log('noDouble:', noDouble)

// count all prod = 7
const countAll = prod.reduce((total, {status}) =>status === '2'? total + 1 : total , 0);
console.log("status:", countAll);

// boolean true = 5
const insideBoolean = prod.reduce((total, { inside }) => total + inside, 0);
console.log('insideBoolean: ', insideBoolean);

// find: fruit & cheese / boolean
const addBoolean = prod.reduce((total, item)=>{
  total[item.name] = {
    category: item.category,
    passed: ['fruit', 'cheese'].includes(item.category)
  }
  return total
}, {})
console.log('addBoolean:', addBoolean)



