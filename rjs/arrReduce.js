const numbers = [1, 3, 5, 7, 9, 11];

// Find minimum value:
const min = numbers.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  })
  console.log(min)
  // 1
  
  const average = numbers.reduce((acc, curr, index, array) => {
    acc += curr
    if (index === array.length - 1) {
      return acc / array.length
    } else {
      return acc
    }
  })
  console.log(average)
  // 6

const sum = numbers.reduce((acc, curr, index) => acc + curr, 0)
console.log(sum)
// 36

const numbers2= [1, [3, 5], [7, 9, 11], [13, 15, 17]];
// Flatten an array:
const numbersFlattened = numbers2.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, [])
console.log(numbersFlattened)
// [1,  3,  5,  7, 9, 11, 13, 15, 17]

// Create array of numbers:
const fruit = ['apple', 'pear', 'lemon', 'avocado', 'apple', 'banana', 'pear', 'apple', 'pineapple'];

const occurrences = fruit.reduce((accumulator, currentItem) => {
  if (currentItem in accumulator) {
    accumulator[currentItem] = accumulator[currentItem] + 1
} else {
    accumulator[currentItem] = 1
  }
  return accumulator
}, {})

console.log(occurrences)
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
  const updatedRecords = records.reduce((accumulator, currentItem) => {
    accumulator[currentItem.name] = {
      grade: currentItem.grade,
      passed: ['A', 'B'].includes(currentItem.grade)
    }
  return accumulator
}, {})
console.log(updatedRecords)
// {
//   Joe: { grade: 'A', passed: true },
//   Tom: { grade: 'B', passed: true },
//   Sandra: { grade: 'B', passed: true },
//   Joel: { grade: 'C', passed: false },
//   Victoria: { grade: 'A', passed: true }
// }