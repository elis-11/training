const arr = [
  { _id: "p1", name: "Broccoli", volume: 7 },
  { _id: "p2", name: "Champignon", volume: 12 },
  { _id: "p3", name: "Cheddar", volume: 11 },
  { _id: "p4", name: "Mango", volume: 6  },
  { _id: "p5", name: "Mango", volume: 6 },
  { _id: "p6", name: "Mango", volume: 6 },
];
const totalItems = arr.length; 
console.log("totalItems", totalItems); // 6

const countVolume = arr.reduce((total, item) => {
  return total + item.volume;
}, 0);
console.log("countVolume", countVolume); // 48

const mangosVolume = arr.reduce((total, item) =>{
    return item.name === 'Mango' 
    ? total + item.volume
    : total
}, 0);
console.log('mangosVolume', mangosVolume); // 18

const countMangos = arr.reduce((total, item)=>{
    return item.name === 'Mango'
    ? total + 1
    : total
}, 0)
console.log('countMangos', countMangos); // 3

const findBiggest = arr.reduce((total, item)=>{
    return total.volume > item.volume 
    ? total
    : item
})
console.log('findBiggest', findBiggest); //

const displayItems = arr.reduce((total, item)=>{
     total[item.name] = total[item.name] 
    ? total[item.name] + 1
    : 1
    return total
},{})
console.log('displayItems', displayItems);

const mapToUpperCase = arr.map(item => {
    return {...item, name: item.name.toUpperCase()}
})
console.log('mapToUpperCase:', mapToUpperCase);
console.log('arr-origin:', arr)

const mapMangoToUpperCase = arr.map(item =>{
return item.name === 'Mango'
? {...item, name: item.name.toUpperCase()}
: item
})
console.log('mapMangoToUpperCase', mapMangoToUpperCase)

const functionUpdateName = (name, newName) => {
    const updateName = arr.map(item =>{
        return item.name === name
        ? {...item, name: newName}
        : item
    })
    return updateName
}
console.log('functionUpdateName:', functionUpdateName('Broccoli', 'Redis'))
console.log('origin-arr:', arr)

const findOneObject = arr.find(item =>{
    return item.name === 'Broccoli';
})
console.log('findOneObject:', findOneObject)

const functionUpdateNameToRedis = (name, newName) => {
    const updateName = arr.map(item =>{
        return item.name === name
        ? {...item, name: item.name = newName}
        : item
    })
    return updateName
}
console.log('functionUpdateNameToRedis:', functionUpdateNameToRedis('Broccoli', 'Redis'))
console.log('origin-arr:', arr)