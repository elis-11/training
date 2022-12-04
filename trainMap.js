const people = [
  { _id: "p1", name: "Artur", profession: "Trainer", age: 38, city: "Berlin" },
  { _id: "p2", name: "Ricci", profession: "Trainer", age: 42, city: "Hamburg" },
  { _id: "p3", name: "Leon", profession: "Student", age: 19, city: "Berlin" },
];
console.log("0-people:", people);

const arturCity = people.map((person) => {
  return person.name === "Artur"
    ? { ...person, city: (person.city = "Paris") }
    : person;
});
console.log("1-arturCity:", arturCity);
console.log("1-people:", people);

const changeAge = people.map((person) => {
return {...person, age: person.age + 1}
})
console.log('2-change age:', changeAge)
console.log('2-people:', people)

const addData = people.map((person) => {
  return {...person, 
    atDCI: person.atDCI = 2,
    experience: person.experience = 1,
  }
})
console.log('3-addData:', addData)
console.log('3-people:', people)

