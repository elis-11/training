const x = [100,101,102,103,104,105,106,107].find(function (el) {
    return el > 101;
});
console.log(x);  // 102

// 2
const array = [4, 33, 8, 56, 23];

const found = array.find(element => {
  return element > 50;
});

console.log(found);   //  56