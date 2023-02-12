const array = [1,4,6,2,7,4,3,9,19,26];
const max = Math.max(...array);
console.log(max)
const min = Math.min(...array);
console.log(min)


// find the biggest
const biggestProd = products.reduce((acc, curr) =>
  acc.volume > curr.volume ? acc : curr
);
console.log("biggestProd:", biggestProd); //  {_id: 'p3',status: '1',name: 'Philadelphia',volume: 12,category: 'cheese',price: 5.5, inside: false}
