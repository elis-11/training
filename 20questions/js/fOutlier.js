let array = [1, 5.2, 4, 0, -1];
// const sum = (n) => n.reduce((a, b) => a + b, 0);
// const sum = (num) => num.reduce((acc, curr) => acc + curr, 0);
const sum = (numbers) => numbers.reduce((sum, number) => sum + number, 0);

console.log(sum(array));

//!2
const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]; //Should return: 11 (the only odd number)
const arr2 = [160, 3, 1719, 19, 11, 13, -21]; //Should return: 160 (the only even number)
const arr3 = [2, 3, 4, 5];

// 2 - version 1
const findOutlier = (integers) => {
  const even = integers.filter((i) => i % 2 === 0);
  const odd = integers.filter((i) => i % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
};
console.log(findOutlier(arr1));
console.log(findOutlier(arr2));
console.log(findOutlier(arr3));

// 2 - version 2
const findOutlier2 = (int) => {
  let result;
  const odd = int.filter((e) => {
    if (e % 2 !== 0) {
      result = e;
    }
    return e % 2 === 0;
  });
  return odd.length > 1 ? result : odd.pop();
};
console.log(findOutlier2(arr1));
console.log(findOutlier2(arr2));

// 2 - version 3
const findOutlier3 = (integers) => {
  const isEven = integers.filter((i) => i % 2).length === 1;
  return integers.find((i) => (isEven ? i % 2 : !(i % 2)));
};
console.log(findOutlier3(arr1));
console.log(findOutlier3(arr2));
