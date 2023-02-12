const a = [1, 1, 2];

const unique = [...new Set(a)];
console.log("unique: " + unique); //[1, 2]

const arrReduce = [1,1,1,7,7,2]
const uniqueReduce = arrReduce.reduce((total, item)=>
total.includes(item) ? total : [...total, item], []
)
console.log(uniqueReduce) // [1,7,2]

const inpArr = [1, 5, 5, 4, 3, 3, 2, 2, 2, 2, 100, 100, -1];
inpArr.sort();
console.log("inpArr:" + inpArr);

const inp = [1, 5, 5, 4, 3, 3, 2, 2, 2, 2, 100, 100, -1];
const compare = (a, b) => (a - b);
const compareRev = (a, b) => (b - a);
console.log("compare:" + inp.sort(compare));
console.log("compareRev:" + inp.sort(compareRev));