const names = ['Lisa', 'Kira', 'Lord', 'Lisa', 'Kira']

const allNames = names.length
console.log('allNames:', allNames)

const totalVolume = names.reduce((total, name)=>{
    total[name] = total[name] ? total[name] + 1 : 1
    return total
}, {})
console.log('totalVolume:', totalVolume)

const nums = [1, 2, 3, 4, 3, 1, 5]

const numsLength = nums.length
console.log('numsLength:', numsLength)

const totalNums = nums.reduce((total, item)=> {
    total[item] = total[item] ? total[item] + 1 : 1
    return total
}, {})
console.log('totalNums:', totalNums)

const sumNums = nums.reduce((all, item)=> all + item, 0)
console.log('sumNums:', sumNums)

// filter + sum = REDUCE
const numbers = [-5, 6, 2, 0];
const filterSum = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log('filterSum:', filterSum); // [12, 4]

// brocken array
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
