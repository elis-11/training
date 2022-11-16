const arr = [
    {_id: "p1",status: "1",name: "Broccoli",volume: 8,category: "vegetable", price: 2,inside: false,},
    {_id: "p2",status: "1",name: "Mango",volume: 8,category: "fruit", price: 1.5,inside: true,},
    {_id: "p3",status: "2",name: "Philadelphia",volume: 12,category: "cheese", price: 5.5,inside: false,},
    {_id: "p4",status: "1",name: "Tomato",volume: 5,category: "vegetable", price: .5,inside: true,},
    {_id: "p5",status: "1",name: "Mango",volume: 8,category: "fruit", price: 1.5,inside: true,},
    {_id: "p6",status: "2",name: "Tomato",volume: 5,category: "vegetable", price: .5,inside: true,},
  ];
  //! filter
  const countProducts = arr.length
  console.log('countProducts',countProducts)

  const countPrice = arr.reduce((total, item)=> total + item.price, 0)
  console.log('countPrice', countPrice)

  const countFilter = arr.filter(item => item.name === 'Mango').length
  console.log('countFilter', countFilter)

  const countReduce = arr.reduce((total, item)=>item.name === 'Mango' ? total + 1 : total, 0)
  console.log('countReduce', countReduce)

  const mangosPrice = arr.reduce((total, item)=> item.name === 'Mango' ? total + item.price : total, 0)
  console.log('mangosPrice', mangosPrice, 'Euro')

