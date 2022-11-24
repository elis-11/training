const nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
  console.log(num);
}); // 1, 2, 3, 4, 5


let food = ["mango", "rice", "pepper", "pear"];
food.forEach(function (foodItem) {
  console.log("I want to eat " + foodItem);
});
// I want to eat mango
// I want to eat rice
// I want to eat pepper
// I want to eat pear

const names = [{name: 'John Smith'}, {name: 'Jane Doe'}]
names.forEach(person => console.log('names:', person.name))
// John Smith
// Jane Doe

const books = [
	{ autor: 'Jane Austen' },
	{ autor: 'Jared Diamond'},
	{ autor: 'Dorothy L. Sayers'}
]
books.forEach(item=>{
  console.log('books:',item.autor)
}) // books: Jane Austen, books: Jared Diamond, books: Dorothy L. Sayers

function autorlist (autor, index) {
	console.log (index + ' ' + books[index].autor);
}
books.forEach (autorlist);
books.slice(2, 5).forEach(autorlist);

const countrys = {
	italy: "🍕",
	denmark: "🍞",
	austria: "🍰"
}
Object.keys(countrys).forEach(key => {
	console.log(key, countrys[key]);
});
// italy 🍕
// denmark 🍞
// austria 🍰

Object.entries(countrys).forEach(entry => { 
	const [key, value] = entry; 
	console.log(key, value); 
});



// elements.forEach (img => console.log (img.getAttribute("alt")));

// for (const item of countrys) {
// console.log( item.alt );
// }
 

// Todo 
// let A = [], B = [];
// inputArray.forEach(element => {
//   element.P ? A.push(element) : B.push(element);
// });

