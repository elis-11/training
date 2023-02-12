//!1 INPUT
const letters = ["G", "a", "e", "l", " ", "F", "r", "e", "i", "r", "e"];
// OUTPUT: "Gael Freire"
// OUTPUT EXTRA CHALLENGE => "GAEL FREIRE"

// We need to find the right method to do this!
// 1.1 -join
console.log("letters:", letters.join("").toUpperCase());
// 1.2 -reduce
const reduceResult = letters.reduce((total, item) => total + item);
console.log("reduceResult:", reduceResult.toUpperCase());
// 1.3 -forEach
let forEachResult = "";
letters.forEach((item) => {
  // console.log(forEachResult);
  forEachResult += item;
});
console.log("forEachResult:", forEachResult.toUpperCase());

const filteredArr = letters.filter((item) => item);
console.log("filteredArr: ", filteredArr); // ['G', 'a', 'e', 'l',' ', 'F', 'r', 'e','i', 'r', 'e']

//! 2
// OUTPUT:  3
const reduceE = letters.reduce((total, item) => {
  return item === "e" ? total + 1 : total;
}, 0);
console.log("reduceE:", reduceE);

// OUTPUT: ['e', 'e', 'e']
const reduceEs = letters.reduce((total, item) => {
  return item === "e" ? total + item : total;
}, []);
console.log("reduceEs:", reduceEs); // eee

//! 3

const countLetters = letters.reduce((total, item) => {
  total[item] = total[item] ? total[item] + 1 : 1 
return total
}, {} )
console.log('countLetters:', countLetters) // { G: 1, a: 1, e: 3, l: 1, ' ': 1, F: 1, r: 2, i: 1 }

const fruits = ["apple", "apple", "banana", "apple"]; //INPUT
//OUTPUT: { apple: 3, banana: 1 } // count up all items found

const countedFruits = fruits.reduce((total, item) => {
  total[item] = total[item] ? total[item] + 1 : 1;
  return total;
}, {});
console.log(countedFruits);
