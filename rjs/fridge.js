const arrFridge = [
  { _id: "p1", name: "Broccoli", volume: 7 },
  { _id: "p2", name: "Champignon", volume: 12 },
  { _id: "p3", name: "Cheddar", volume: 11 },
  { _id: "p4", name: "Tomato", volume: 5 },
  { _id: "p5", name: "Tomato", volume: 5 },
];
const totalVolume = arrFridge.reduce((allVolumes, item) => {
  return allVolumes + item.volume;
}, 0);
console.log(totalVolume);

const countTomato = arrFridge.reduce(
  (acc, item) => (item.name === "Tomato" ? acc + 1 : acc),
  0
);
console.log(countTomato);

const tomatosVolume = arrFridge.reduce(
  (acc, item) => (item.name === "Tomato" ? acc + item.volume : acc),
  0
);
console.log(tomatosVolume);
