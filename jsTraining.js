let str = 'artur@ed.de'
str = str.split('@')[0]
console.log(str)

const arStr = 'artur@ed.de'
newStr = arStr.split('@')[0]
console.log(newStr)

const edStr = 'ed@ed.de'
const cutEnd = edStr.split('.')[1]
console.log(cutEnd)

const concatStr = str.concat(edStr)
console.log(concatStr)

const joitStr = str.concat(cutEnd)
console.log(joitStr)