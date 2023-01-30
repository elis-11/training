//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
const alphabet = [
'a', 'b', 'c', 'd', 'e',
'f', 'g', 'h', 'i', 'j',
'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'
];

// 2 - version
// const isPangram = (word) => {
//   return (word.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// };
// console.log(isPangram(alphabet))
// console.log(isPangram(alphabet.join('')))

// 2 - version
// const isPangram2 = str => {
//     const letters = str.toLowerCase().match(/[a-z]/g)
//     const alphabet =[...new Set(letters)]
//     return alphabet.length=== 26
// }
// console.log(isPangram2())

// 3 - version
 const isPangram = str => {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => str.toLowerCase().includes(x))
}

// 4 - version
const isPangram4 = word => new Set(word.toLowerCase().match(/[a-z]/gi)).size === 26
