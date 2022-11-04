//! 1- setTimeout() callback
// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     console.log(i); // 0
//   }, 0);
// }

//! 2- whay this function is working
const a = "abc";
const b = a.length;
console.log(a); // abc

//! 3- unpossibly change this symbol 'abc'
let c = "abc";
c[0] = "d";
console.log(c); // abc
//! 3.1- possibly change this array 'abc'
let d = ["a,", "b", "d"];
d[0] = "d";
console.log(d.join(" ")); // d b c

//! 4- sum of elements
const arr = [[1, 2, [3, 4]], [9], [10, 18]];
//! 4.1 recursive + sum
const result = arr.flat(Infinity).reduce((acc, next) => acc + next);
console.log(result);
//! 4.2 create methode 'flat' + sum
const arr2 = [[1, 2, [3, 4]], [9], [10, 15]];
const flat = (n) => {   //creating flat
  let res = [];
  n.forEach((item) => {
    if (Array.isArray(item)) {
      //   res = res.concat(flat(item)); =
      res = [...res, ...flat(item)];
    } else {
      res.push(item);
    }
  });
  return res;
};
const result2 = flat(arr2).reduce((acc, next) => acc + next);
console.log(result2);

//! 5-
console.log(1); // vnesnij 1
const x = new Promise((resolve, reject) => resolve(console.log(2))); // async 2

x.then((res) => console.log(3)); // 3
setTimeout(() => {
  console.log(4);
}, 0);
console.log(5); // async 3
// terminal- 1 2 5 3 4
// browser-  1 2 5 3 4

//! 6-response-API
// 6.1 fetch-response

// const req = fetch('url', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   })
//   return Response.join()
// or
// const API_URL = process.env.REACT_APP_API_URL;
// export const fetchEmployeesApi = async () => {
//   const response = await fetch(`${API_URL}/employees`, {
//     credentials: "include",
//   });
//   return response.json();
// };
// or
// const data = { username: "example" };
// fetch("https://example.com/profile", {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// 6.2
// const req = new XMLHttpRequest()
// req.open("GET", "https://api.com")
// req.send()
// req.onload= function(){
//   console.log(req.response)
// }
