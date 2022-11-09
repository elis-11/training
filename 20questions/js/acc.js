const accum = (s, c = 0) =>
  [...s.toLowerCase()]
    .map((l) => `${l.toUpperCase()}${l.repeat(c++)}`)
    .join("-");

console.log(accum("abcd")); // A-Bb-Ccc-Dddd
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// 2 - version
const acc = (s) => {
 return s.split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
};
console.log(acc("abcd")); // A-Bb-Ccc-Dddd
console.log(acc("RqaEzty"));
console.log(acc("cwAt"));
const accu = (s) => [...s].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");

console.log(accu("abcd")); // A-Bb-Ccc-Dddd
console.log(accu("RqaEzty"));
console.log(accu("cwAt"));
//------------
let numbers = [1, 2, 3]
const result = numbers.reduce((acc, number) => {
  console.log(number)
  return acc + number
},0)
console.log(result)
