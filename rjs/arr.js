const names = ['Lisa', 'Kira', 'Lord', 'Lisa', 'Kira']

const allNames = names.length
console.log('allNames:', allNames)

const totalVolume = names.reduce((total, name)=>{
    total[name] = total[name] ? total[name] + 1 : 1
    return total
}, {})
console.log('totalVolume:', totalVolume)

const nums = [1, 2, 3, 4, 3, 1, 5]

const numsLength = nums.length
console.log('numsLength:', numsLength)

const totalNums = nums.reduce((total, item)=> {
    total[item] = total[item] ? total[item] + 1 : 1
    return total
}, {})
console.log('totalNums:', totalNums)

const sumNums = nums.reduce((all, item)=> all + item, 0)
console.log('sumNums:', sumNums)