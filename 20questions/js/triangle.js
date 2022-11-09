function isTriangle(a, b, c) {
  let arr = [a, b, c].sort();
  return arr[2] < arr[0] + arr[1];
}
console.log(isTriangle(1, 1, 1)); // true
console.log(isTriangle(1, 1, 2)); // false
console.log(isTriangle(1, 2, 2)); // true

// 2 - version
const triagl = (a, b, c) => Math.max(a, b, c) < (a, b, c) / 2;
console.log(triagl(1, 1, 1)); // false
console.log(triagl(1, 1, 2)); // false

// 3 - version
const triag = (a, b, c) =>
  Math.min(a, b, c) > Math.max(a, b, c) ? true : false;
console.log(triag(1,1,2))