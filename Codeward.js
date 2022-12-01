//Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:
//each noun containing less than 2 vowels has the article "das"
//each noun containing 2/3 vowels has the article "die"
//each noun containing more than 3 vowels has the article "der"
//Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!
//(This Kata is a joke, there is no such grammar rule!)

// 2
const reverseStr = (str) => [...str].reverse().join('');
console.log(reverseStr('word')); //drow

//3

barTriang=([A,E],[B,F],[C,D])=>[A+B+C,E+F+D].map(V=>+(V/3).toFixed(4))
// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]
