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
//! group by item
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Alice", age: 20 },
];

const groupBy = (objArr, prop)=> {
  return objArr.reduce((total, item) => {
    // console.log('total1:', total)
    console.log('item1:',item)
    const key = item[prop];
    const curGroup = total[key] ?? [];
    return { ...total, [key]: [...curGroup, item] };
  }, {});
}

const groupedPeople = groupBy(people, "name");
console.log('groupedPeople:',groupedPeople);
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

//! delete doubled
const array = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const noDupl = array.reduce((total, item) => !total.includes(item) ? [...total, item] : total, []);
console.log('noDupl:', noDupl);