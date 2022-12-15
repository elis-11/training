// Weg 1: ohne return (=implicit return):
const productsCopy1 = products.map(product => 
    product._id === id 
    ? { ...product, quantity: quantityNew } 
    : product )

// Weg 2: mit return
const productsCopy2 = products.map(product => {
   return product._id === id 
   ? { ...product, quantity: quantityNew } 
   : product 
})

// Weg 3: mit if / else
const productsCopy3 = products.map(product => {
   if(product._id === id)
      return { ...product, quantity: quantityNew }
   else
      return product
})

// Und auch nochmal alle 3 Wege bei Filter:
// Weg 1: ohne return (=implicit return):
const productsCopy4 = products.filter(product => 
    product._id !== id 
    )

// Weg 2: mit return
const productsCopy5 = products.filter(product => {
   return product._id !== id 
})

// Weg 3: mit if / else
const productsCopy = products.filter(product => {
    if(product._id !== id)
       return true // adds item to new filtered array (= productsCopy)
    else
       return false // do not include / ignore item in new filtered array
 })