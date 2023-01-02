const arr = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
    { name: "Broccoli", quantity: 3 },
  ];
  const result = arr.find(({ name }) => name === "cherries");
  console.log(result); // { name: 'cherries', quantity: 5 }

  const findOneObject = arr.find(item =>{
    return item.name === 'Broccoli';
})
console.log('findOneObject:', findOneObject) // { _id: 'p1', name: 'Broccoli', volume: 7 }
