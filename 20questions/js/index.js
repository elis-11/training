const firstEl = (arr) => {
  return arr[0];
};
console.log(firstEl(1, 3, 4));

// minutes
function convert(minutes) {
  return minutes * 60;
}
console.log(convert(3));

// reverse
function solution(str) {
  return [...str].reverse().join("");
}
console.log(solution("world"));

// diff includes
function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 2, 3], [2]));

// brackets
const validBraces = braces =>
  ![...braces].reduce((prev, val) => (prev + val).replace(/(\(\)|\[]|{})/, ``), ``);

  // brackes - 2
  function validBraces2(braces){
    let br = /\(\)|\{\}|\[\]/;
    return br.test(braces) ? validBraces2(braces.replace(br, '')) : '' === braces;
  }

  // brackes - 3
const validBraces3 = braces => {
  for ( let _ in braces) braces=braces.replace('()', '').replace('{}', '').replace('[]', '')
  return !braces
}

// parseInt
function getAge(inputString){
  return parseInt(inputString)
  // return parseInt(inputString,10)
  // return parseInt(inputString.split("")[0]);
  }


  const getAge2 = s => s[0]|0;
  // console.log(getAge2(4));

  function getAge3(inputString){
    return Number(inputString.slice(0, 1));
  }