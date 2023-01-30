console.log('Hello, world!')
const str = '5'
const str1 = +'6'
const num = 4
console.log(typeof(str), typeof(str1), typeof(num),typeof(str + num))

const inputText = '2 Äpfel'
const inputNumber = parseInt(inputText)
console.log(inputText, inputNumber, num+inputNumber, typeof inputText, typeof inputNumber)

const pizzaName = "Quattro Formaggi" 
console.log(pizzaName, "maggi", pizzaName.includes("maggi")) // true
console.log(pizzaName, "maggi", pizzaName.indexOf("maggi")) // 11 (position of string) 
console.log(pizzaName, "maddy", pizzaName.includes("maddy")) // false

// operators 
// modulo und ternary
console.log( "10 % 5", 10 % 5 ) // 0
console.log( "10 % 3", 10 % 3 ) // 1
console.log( "10 % 1", 10 % 1 ) // 0

// prozent-rechnung
console.log( 25 / 200 ) // => 0.125 => 12.5 Prozent
console.log( 100 * (25/200) ) // 12.5
console.log( (25 * 100) / 200 ) // 12.5
console.log( 200 * 0.1, "10 Prozent von 200" ) 
console.log( 200 * 0.30, "30 Prozent von 200" )
console.log( 200 * 2.5, "250 Prozent von 200" )