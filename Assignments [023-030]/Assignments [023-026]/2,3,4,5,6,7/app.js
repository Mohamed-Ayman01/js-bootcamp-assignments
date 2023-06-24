// Assignmnet 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// Assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Assignment 5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// Assignmnet 6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Number.parseInt(flt.toString())); // 10

// Assignment 7

let getRandomNum = function (start, range) {
  let randomNum = Math.floor((Math.random() * range) + start);

  while (randomNum > range) {
    randomNum = Math.floor((Math.random() * range) + start);
  }

  return randomNum;
};

console.log(getRandomNum(1, 4)); // 0 || 1 || 2 || 3 || 4
