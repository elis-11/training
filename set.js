const array = [1,1,1,3,3,5,5,5,7,7,2]
const unique = [...new Set(array)]
console.log(unique)

const arrReduce = [1,1,1,3,3,5,5,5,7,7,2]
const uniqueReduce = arrReduce.reduce((total, item)=>
total.includes(item) ? total : [...total, item], []
)
console.log(uniqueReduce)

