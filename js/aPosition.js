// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// 1 - version

const position = abc => `Position of alphabet: ${abc.charCodeAt() - 96}`

console.log(position('a')) // 1
console.log(position('l')) // 12


