//! -1-
const letters = ["G", "a", "e", "l", " ", "F", "r", "e", "i", "r", "e"];
// OUTPUT: Array von allen "e" in arrLetters ['e', 'e', 'e']
const allEsFiltern = letters.filter((item) => {
  return item === "e";
});
console.log("letters", letters);
console.log("allEsFiltern", allEsFiltern); // ['e', 'e', 'e']
// Challenge 1: forEach und neuen Array aufbauen

// letters.forEach((item) => console.log(item));
// Challenge 2: ANZAHL aller "e"s im Array // Output: 3 (number) (edited)
const allEsReduce = letters.reduce((total, item) => {
  return item === "e" ? total + 1 : total;
}, 0);
console.log("allEsReduce:", allEsReduce); //3

//! -2-
const arr = [
  { _id: "p1", name: "Broccoli", volume: 7 },
  { _id: "p2", name: "Champignon", volume: 12 },
  { _id: "p3", name: "Cheddar", volume: 11 },
  { _id: "p4", name: "Tomato", volume: 5 },
  { _id: "p5", name: "Tomato", volume: 5 },
];
// #1: Berechne das total VOLUME im Fridge (mit reduce oder forEach, oder beides :slightly_smiling_face:) => Output: 40
const totalVolume = arr.reduce((total, item) => total + item.volume, 0);
console.log("totalVolume:", totalVolume); // 40

// #2:  Berechne wie oft Tomato im Fridge vorkommt (Count) => Output: 2
const countTomato = arr.reduce((total, item) => {
  return item.name === "Tomato" ? total + 1 : total;
}, 0);
console.log("countTomato:", countTomato); // 2

// #3: Berechne das Volume von Tomato im Fridge (Sum) => Output: 10
const tomatoVolume = arr.reduce((total, item) => {
  return item.name === "Tomato" ? total + item.volume : total;
}, 0);
console.log("tomatoVolume:", tomatoVolume);

// #4: Map toUpperCase
const mapToUpperCase = arr.map((letter) => {
  return { ...letter, name: letter.name.toUpperCase() };
});
console.log("mapToUpperCase", mapToUpperCase);

const addVolume = arr.map((added) => {
  return { ...added, volume: added.volume + 2 };
});
console.log("addVolume", addVolume);

const addToTomato = arr.map((added) => {
  return added.name === "Tomato"
    ? { ...added, volume: added.volume + 3 }
    : added;
});
console.log("addToTomato", addToTomato);
