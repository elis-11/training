const numbers = [1, 3, 5, 7, 9, 11];

// Find minimum value:
const min = numbers.reduce((total, item) => {
    return total < item ? total : item;
  })
  console.log(min)   // 1
  
  const average = numbers.reduce((total, item, index, array) => {
    total += item
    if (index === array.length - 1) {
      return total / array.length
    } else {
      return total
    }
  })
  console.log(average)  // 6

const sum = numbers.reduce((total, item, index) => total + item, 0)
console.log(sum)   // 36

const numbers2= [1, [3, 5], [7, 9, 11], [13, 15, 17]];
// Flatten an array:
const numbersFlattened = numbers2.reduce((total, item) => {
  return total.concat(item);
}, [])
console.log(numbersFlattened)   // [1,  3,  5,  7, 9, 11, 13, 15, 17]

// Create array of numbers:
const fruit = ['apple', 'pear', 'lemon', 'avocado', 'apple', 'banana', 'pear', 'apple', 'pineapple'];

const occurrences = fruit.reduce((total, item) => {
    total[item] = total[item] ? total[item] + 1 : 1
  return total
}, {})

console.log('occurrences: ',occurrences)
// {
//   apple: 3,
//   pear: 2,
//   lemon: 1,
//   avocado: 1,
//   banana: 1,
//   pineapple: 1
// }

//! Create array of numbers:
const records = [
    { name: 'Joe', grade: 'A' },
    { name: 'Tom', grade: 'B' },
    { name: 'Sandra', grade: 'B' },
    { name: 'Joel', grade: 'C' },
    { name: 'Victoria', grade: 'A' }
  ]
   const updatedRecords = records.reduce((total, item) => {
     total[item.name] = {
       grade: item.grade,
       passed: ['A', 'B'].includes(item.grade)
     }
   return total
 }, {})
 console.log(updatedRecords)
// {
//   Joe: { grade: 'A', passed: true },
//   Tom: { grade: 'B', passed: true },
//   Sandra: { grade: 'B', passed: true },
//   Joel: { grade: 'C', passed: false },
//   Victoria: { grade: 'A', passed: true }
// }