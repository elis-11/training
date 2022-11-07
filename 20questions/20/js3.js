const sum = (n) => {
 return function accomulate(i) {
    if (typeof i === "number") {
      n += i;
      return accomulate;
    }
    return n
  };
};
console.log(sum(1)(2)(3)()); //6
console.log(sum(10)(10)(10)()); //50

//---
const p = sum(10)(10)  //20
const p2 = p(10)(10)(10)  
console.log(p2())  //  p+(10)(10)(10)=20+30=50
