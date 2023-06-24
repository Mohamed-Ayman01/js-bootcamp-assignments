/*
  Higher Order Functions Challenge

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In This Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important 
  - All In One Chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").map(function (el) {
  return el === "," || +el === "".length ? "" : el === "_" ? " " : el;
}).filter(function (el) {
  return !Boolean(parseInt(el));
}).slice( undefined, -true).reduce(function (acc, el) {
  if (acc === el) {
    return acc;
  } else {
    return acc + el;
  }
});

console.log(solution) //Elzero Web School