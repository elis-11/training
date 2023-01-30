// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

// 1 - version
const otherAngle = (a, b) => 180 - (a + b);
console.log(otherAngle(33, 49));
