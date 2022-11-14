const prod = [
    {_id: "p1",status: "1",name: "Broccoli",volume: 7,price: 1.5,category: "vegetable",inside: false,},
    {_id: "p2",status: "1",name: "Mango",volume: 8,price: 1,category: "fruit",inside: true,},
    {_id: "p3",status: "1",name: "Philadelphia",volume: 12,price: 3.5,category: "cheese",inside: false,},
    {_id: "p4",status: "1",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},
    {_id: "p5",status: "1",name: "Mango",volume: 8,price: 1,category: "fruit",inside: false,},
    {_id: "p6",status: "0",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},
    {_id: "p7",status: "0",name: "Tomato",volume: 5,price: .5,category: "vegetable",inside: true,},  
]
const allProd = prod.length
console.log('allProd:', allProd)

const sumPrice = prod.reduce((all, item)=> all + item.price,0)
console.log('sumPrice:', sumPrice)