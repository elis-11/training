// const array = Array(100)
//   .fill(null)
//   .map(() => Math.floor(Math.random() * 2000) - 1000);
// console.log(array);

const sorted = [
  -838, 98, -559, 203, -744, 896, -534, 864, 397, -949, -100, 668, -261, 125,
  998, 523, -32, -648, -666, -192, -543, 337, 692, 54, -11, 696, -346, 566, 261,
  -51, -761, 152, -629, -644, 883, 310, 325, 782, -671, -195, -532, 941, 405,
  282, 340, 277, 596, -961, -888, -388, -216, 123, -701, 29, 993, -622, 408,
  -988, 825, 8, -883, 610, 884, 916, -428, -758, 799, -383, 425, -253, -374,
  -728, -731, 508, -274, -831, -769, 331, 337, 325, 10, -862, -402, 333, -323,
  -958, 955, 678, -434, 935, -989, 923, 244, 475, -791, -105, -109, 432, 925,
  -912,
];
// console.log(sorted)

console.log(sorted.sort((a, b) => a - b))

const letters = [ "b", "c", "e", "e", "c","f", "j", "d", "d", "d", "d", "a", "b", "a"];
const sortedLetters = letters.sort()
console.log(sortedLetters)

const array = [1,1,1,3,3,5,5,5,7,7,2]
const unique = [...new Set(array)]
console.log(unique)

const arrReduce = [1,1,1,3,3,5,5,5,7,7,2]
const uniqueReduce = arrReduce.reduce((total, item)=>
total.includes(item) ? total : [...total, item], []
)
console.log(uniqueReduce)