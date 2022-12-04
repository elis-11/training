const users = [
    {
      name: "Gael",
      experience: 95,
      isAdmin: false,
      workingAtDciSince: "2022-06-01",
      hobbies: ["Coding"],
    },
    {
      name: "Edward",
      experience: 97,
      isAdmin: true,
      workingAtDciSince: "2022-06-01",
      hobbies: ["Coding", "Languages", "Running"],
    },
  ];
  console.log("users:", users);
  
  // change ALL IMMUTABLE
  const usersAllNew = users.map((user) => {
    return {
      ...user,
      name: "Mr " + user.name.toUpperCase(),
      experience: user.experience + 2,
      isAdmin: !user.isAdmin,
      hobbies: [...user.hobbies, "Gaming", "Reading"],
    };
  });
  console.log("usersAllNew:", usersAllNew);
  
  // change SINGLE IMMUTABLE
  const usersSingleNew = users.map((user) => {
    return user.name === "Edward"
      ? {
          ...user,
          name: "Mr " + user.name,
          experience: user.experience + 2,
          isAdmin: !user.isAdmin,
          hobbies: [...user.hobbies, "Gaming", "Reading"],
        }
      : user;
  });
  console.log("usersSingleNew:", usersSingleNew);
  
  const updateUser = (nameSearch) => {
    const usersNew = users.map((user) => {
      // update usually we just search by ONE criteria (ID or a NAME)
      // multiple criteria we usually check in SEARCHES (e.g. apartment OR ferienhaus)
      return user.name === nameSearch
        ? {
            ...user,
            name: "Mr " + user.name,
            experience: user.experience + 2,
            isAdmin: !user.isAdmin,
            hobbies: [...user.hobbies, "Gaming", "Reading"],
          }
        : user;
    });
    return usersNew;
  };
  console.log("updateUser:", updateUser("Edward"));
  
  const usersNew = users.map((user) => {
    return {
      ...user,
      name: "Mr " + user.name,
      experience: user.experience + 2,
      isAdmin: !user.isAdmin,
      hobbies: [...user.hobbies, "Reading"],
    };
  });
  console.log("usersNew:", usersNew);

  //!
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

//!
const arrPizzas = [
  { _id: 1, name: "Margeritha", price: 3.99 },
  { _id: 2, name: "Funghi", price: 4.99 },
  { _id: 3, name: "Oliven", price: 5.99 }, // 7.99
];
const updatePizza = (id, addedPrice) => {
  const pizzasUpdated = arrPizzas.map((pizza) => {
    return pizza._id === id
    ? { ...pizza, price: pizza.price + addedPrice } // addedPrice: { price: 7.99 }
    // ? { ...pizza, ...addedPrice } // addedPrice: { price: 7.99 }
      : pizza;
  });
  return pizzasUpdated;
};
console.log({ arrPizzas });
console.log('pizzaNewPrice:', updatePizza(3, 2))
// update price of oliven pizza
// const arrPizzasUpdated = updatePizza(3, { price: 7.99 });
// console.log({ arrPizzasUpdated });

