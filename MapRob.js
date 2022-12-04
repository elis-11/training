const product = [
  {
    title: "Toaster",
    price: 5.99,
  },
];
console.log("0-product:", product);
// Challenge #1:
// Update Price von Produkt um 1.50 in einer COPY (=Immutability)
const immutablePrice = product.map((item) => {
  return { ...item, price: item.price + 1.5 };
});
console.log("1-immutablePrice: ", immutablePrice);
console.log("1-product: ", product);

// Challenge #2:
// Update Price von Produkt um 1.50 im ORIGINAL Object (=Mutation):
const muttablePrice = product.map((item) => {
  item.price = item.price + 1.5
  return product
});
console.log("2-muttablePrice: ", muttablePrice);
console.log("2-product: ", product);

// Challenge #3:
// Wir haben jetzt einen Array von Products:
const products = [
  {
    title: "Toaster",
    price: 5.99,
  },
  {
    title: "Hairdryer",
    price: 12.99,
  },
];
console.log("0-products:", products);

// Alles wird teurer!
// Wir erhöhen alle Preise um 5 EUR
// #1 In COPY (mit map und SPREAD Operator)
const immPrice = products.map(product =>{
return {...product, price: Number((product.price + 5).toFixed(2))};
})
console.log('3-immPrice:',immPrice)
console.log('3-products:',products)

// #2 Im Original (mit map und MUTATION)
const mutPrice = products.map((product) =>{
  // return {product, price: Number((product.price + 5).toFixed(2))}
  product.price= Number((product.price + 5).toFixed(2))
  return product 
})
console.log('4-mutPrice', mutPrice)
console.log('4-products', products)

// Und am Ende:
// Schreibe eine Function, mit der wir ein Produkt per "title" suchen können und den Preis erhöhen können!
// Die Function bekommt Title und das Preis-Update als Parameter.
// Beispiel:
// const updateProductPrice = (title, priceUpsell) => { ... ??? ... }

//updateProductPrice("Toaster", 3)

// => OUTPUT:
/** [
  {
     title: "Toaster",
     price: 8.99 // increases by 3 EUR - from 5.99 to 8.99
  },
  {
     title: "Hairdryer",
     price: 12.99
  }
] 
*/
