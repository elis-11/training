const prod = [
    {_id: "p1",status: "1",name: "Broccoli",volume: 7,price: 1.5,category: "vegetable",inside: false,},
    {_id: "p2",status: "1",name: "Mango",volume: 8,price: 1,category: "fruit",inside: true,},
    {_id: "p3",status: "1",name: "Philadelphia",volume: 12,price: 3.5,category: "cheese",inside: false,},
    {_id: "p4",status: "1",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},
    {_id: "p5",status: "1",name: "Mango",volume: 8,price: 1,category: "fruit",inside: false,},
    {_id: "p6",status: "0",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},
    {_id: "p7",status: "0",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},  
]
const total = prod.length

console.log('totalProducts:', total)

const totalPrice = prod.reduce((total, item)=>total + item.price, 0 )
console.log('totalPrice:', totalPrice)

const totalVolume = prod.reduce((total, item)=> total + item.volume, 0)
console.log('totalVolume:', totalVolume)

const status1 = prod.reduce((total, {status})=>status=== '1' ? total += 1 : total, 0)
console.log('status:', status1)

const totalTrue = prod.reduce((total, {inside})=> total + inside, 0)
console.log('totalTrue:', totalTrue)

const biggest = prod.reduce((big, item)=> big.volume > item.volume ? big : item)
console.log('biggest:', biggest)

const mangoVolume = prod.reduce((total, item)=>item.name === 'Mango' ? total + item.volume : total, 0)
console.log('mangoVolume:', mangoVolume)

const names = ["Lisa", "Igor", "Tiana", "Lisa", "Igor"];
const count = names.reduce((all, name)=>{
    all[name] = all[name] ? all[name] + 1 : 1
    return all
}, {})
console.log(count) // { Lisa: 2, Igor: 2, Tiana: 1 }

const countProd = prod.reduce((products, prod)=> {
    products[prod.name] = products[prod.name] ? products[prod.name] + 1 : 1
    return products
}, {})
console.log('countProducts', countProd)