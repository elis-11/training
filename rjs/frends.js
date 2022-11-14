const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
const allBooks = friends.reduce(
  (acc, curr) => [...acc, ...curr.books],
  ["New"]
);
console.log("allBooks", allBooks);

const letters = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const noDupl = letters.reduce(
  (acc, curr) => (!acc.includes(curr) ? [...acc, curr] : acc),
  []
);
console.log(noDupl);


const nums = [-5, 6, 2, 0];
const dublPos= nums.reduce((acc, curr) => {
  if (curr > 0) {
    const doubled = curr * 2;
    return [...acc, doubled];
  }
  return acc;
}, []);
console.log(dublPos);