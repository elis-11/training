const arr = [1, 2, 3, 4, 5, 6];
const sum = (nums) => {
  let result = nums.reduce((prev, curr)=> prev + curr, 0)
  return result
}
console.log(sum(arr))