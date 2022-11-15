const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  allNames[name] = allNames[name] ? allNames[name] + 1 : 1
  return allNames
}, {});
console.log('countedNames:',countedNames) // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

const flatten = [[0, 1],[2, 3],[4, 5],]
  const flattened = flatten.flat(Infinity).reduce((total, item) => total + item,
    0,
  );
  console.log('flattened:', flattened) //15

  const flatArray = [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce(
    (total, item) => total.concat(item),
    [],
  );
 console.log('flatArray:', flatArray) // flatArray is [0, 1, 2, 3, 4, 5]