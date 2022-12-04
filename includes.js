const username = "Gael";
const hobby = "playing games";

const searchTerm = "games";

if (username.includes(searchTerm) || hobby.includes(searchTerm)) {
  // if( username.includes(searchTerm) && hobby.includes(searchTerm) ) {
  console.log("Found games!");
} else {
  console.log("NOT found games!"); // Found games!
}

//! Filter
const teachers = [
  { name: "Robert", experience: 5 },
  { name: "Gael", experience: 50 },
  { name: "Edward", experience: 95 },
];
console.log(teachers);

const searchByExperience = (minimumExperience) => {
  let teachersFilter = teachers.filter((teacher) => {
    return teacher.experience >= minimumExperience;
  });
  console.log(teachersFilter);
  // kein return!
};
let result = searchByExperience(6);
console.log("Result:", result);

console.log("50:", searchByExperience(40));
console.log("90:", searchByExperience(90));

//! map over array
const arrPizzas = [
  { _id: 1, name: "Margeritha", price: 3.99 },
  { _id: 2, name: "Funghi", price: 4.99 },
  { _id: 3, name: "Oliven", price: 5.99 }, // 7.99
];
const updatePizza = (id, newPizzaData) => {
  const pizzasUpdated = arrPizzas.map((pizza) => {
    return pizza._id === id
      // ? { ...pizza, ...newPizzaData } // newPizzaData: { price: 7.99 }
      ? { ...pizza, price: pizza.price + newPizzaData } // newPizzaData: { price: 7.99 }
      : pizza;
  });
  return pizzasUpdated;
};
console.log({ arrPizzas });
// update price of oliven pizza
// const arrPizzasUpdated = updatePizza(3, { price: 7.99 });
// console.log({ arrPizzasUpdated });
console.log('pizzaNewPrice:', updatePizza(3, 2))

//! MERGING objects (mini training)

const obj1 = { id: 5, name: "Anne" };
const obj2 = { name: "Tiana", age: 27 };

// merge two objects together by copying from BOTH with spread operator
const objMerge = { ...obj1, ...obj2 };
console.log({ obj1 });
console.log({ obj2 });
console.log({ objMerge });

//! MAP - COPY - ...SPREAD
const people = [
  { id: 1, name: "Eliza" },
  { id: 2, name: "Gael" }, // UPDATE
  { id: 3, name: "Edward" },
];
// const gael = { id: 2, name: "Gael Freire" } // name => "Gael Freire"
console.log({ people });

// 1. Map LOOPT durch jedes Item im Array
const arrUpdated = people.map((person) => {
  return person.id === 2 ? { ...person, age: 27 } : person;
});
console.log("Original", people);
console.log("Update (Copy)", arrUpdated);

//! MAP - COPY - ...SPREAD
const user = {
  name: "Rob",
  specialization: "Backend",
  age: 38,
};
console.log({ user });

const userUpdated = { ...user, age: 39, anrede: "Mr" };
console.log({ userUpdated });

const userSubset = { name: user.name, specialization: user.specialization };
console.log({ userSubset });

//! CHAINING - AWAKE
const startParty = (person) => {
  person.party = true;
  person.state = "awake";
  return person;
};
const goSleeping = (person) => {
  person.state = "sleeping";
  person.party = false;
  return person;
};

const personInput = {
  name: "Mum",
  state: "awake",
  party: false,
};

// start party
console.log(personInput);
let personOutput = startParty(personInput);
console.log(personOutput);

// gehen wir schlafen
personOutput = goSleeping(personOutput);
console.log(personOutput);

personOutput = startParty(personOutput);
console.log(personOutput);

//! FRUSUR
// schnitt => kurz, lang, mittellang
const cutHair = (person, schnittneu) => {
  person.schnitt = schnittneu;
  // convention: if a function updates something, we return the thing that was updated!
  return person;
};
// console.log('cutHair:', cutHair);
// INPUT
const person = {
  name: "Rob",
  schnitt: "mittellang",
};
console.log({ person }); // { name: "Rob", schnitt: "mittellang" }

// UPDATE person haircut
const personUpdated = cutHair(person, "kurz");
console.log({ personUpdated });
