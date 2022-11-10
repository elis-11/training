const firstEl = (arr) => {
  return arr[0];
};
console.log(firstEl(1, 3, 4));

function convert(minutes) {
	return minutes * 60
}
console.log(convert(3))

function solution(str){
    return [...str].reverse().join('')
  }
  console.log(solution('world'))

  function arrayDiff(a, b) {
    return a.filter(e =>!b.includes(e))
   }
   console.log(arrayDiff([1,2], [1]))
   console.log(arrayDiff([1,2,2], [1]))