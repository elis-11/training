const fridge = [
  { _id: "p1", name: "Broccoli", volume: 7, category: 'vegetables' },
  { _id: "p2", name: "Mango", volume: 9, category: 'fruits' },
  { _id: "p3", name: "Cheddar", volume: 12, category: 'shees' },
  { _id: "p4", name: "Tomato", volume: 5, category: 'vegetables' },
  { _id: "p5", name: "Broccoli", volume: 7, category: 'vegetables' },
  { _id: "p6", name: "Tomato", volume: 5, category: 'vegetables' },
  { _id: "p7", name: "Tomato", volume: 5, category: 'vegetables' },
  { _id: "p8", name: "Tomato", volume: 5, category: 'vegetables' },
  { _id: "p9", name: "Apple", volume: 6, category: 'fruits' },
  { _id: "p10", name: "Mango", volume: 9, category: 'fruits' },
];
// console.log('allFridge:',fridge)

// count all products
const allFridge = fridge.length
console.log('allFridge:', allFridge)

// volume of all = 70
const totalVolume = fridge.reduce((allVolumes, item) => {
  return allVolumes + item.volume;
}, 0);
console.log('totalVolume:', totalVolume);

// count of tomato = 4
const countTomato = fridge.reduce(
  (acc, item) => (item.name === "Tomato" ? acc + 1 : acc),
  0
);
console.log('countTomato:', countTomato);

// volume of tomato = 20
const tomatosVolume = fridge.reduce(
  (acc, item) => (item.name === "Tomato" ? acc + item.volume : acc),
  0
);
console.log('tomatosVolume:', tomatosVolume);
