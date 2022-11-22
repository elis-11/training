const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//! Filtering out all small values
function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//! Find all prime numbers in an array
//! The following example returns all prime numbers in the array:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//! FILTER
let fres = [
  { name: "Harry", skill: "JavaScript" },
  { name: "Mark", skill: "Python" },
  { name: "David", skill: "JavaScript" },
];
let js_fres = fres.filter((free)=> {
  return free.skill == "JavaScript";
});
console.log(js_fres);
//Output = [{ name: "Harry", skill: "JavaScript" }, { name: "David", skill: "JavaScript" }]


//! FILTER - COMBINATION
const data = [
	{name: "Wallis", art: "Pferd", alter: 12, bild: "🐎"},
	{name: "Tiger", art: "Katze", alter: 7, bild: "🐅"},
	{name: "Alabaster", art: "Pferd", alter: 3, bild: "🐎"},
	{name: "Rufus", art: "Hund", alter: 16, bild: "🐕"},
	{name: "Bello", art: "Hund", alter: 2, bild: "🐕"},
];
const combi = data.filter (d => d.alter > 7 && d.art === "Hund");
console.log ("combi", combi)
Array (1)
// Output = 0 {name: "Rufus", art: "Hund", alter: 16, bild: "🐕"}