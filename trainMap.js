const people = [
    { _id: "p1", name: "Artur", profession: "Trainer", age: 38, city: "Berlin" },
    { _id: "p2", name: "Ricci", profession: "Trainer", age: 42, city: "Hamburg" },
    { _id: "p3", name: "Leon", profession: "Student", age: 19, city: "Berlin" },
  ];
  console.log('0-people:', people)

  const cityUpperCase = people.map(person=>{
    return person.name === 'Ricci' 
    ? {...person, city: person.city.toUpperCase()}
    : person
  })
console.log('1-cityUpperCase: ', cityUpperCase)  
console.log('2-people:', people)

const professionChange = people.map(person => {
    return person.name === 'Leon'
    ? {...person, profession: person.profession = 'Web Dev'}
    : person
})
console.log('3-professionChange:', professionChange)

const namesToUpperCase = people.map(person =>{
    return {...person, name: person.name.toUpperCase()}
} )
console.log('4-namesToUpperCase: ', namesToUpperCase)


