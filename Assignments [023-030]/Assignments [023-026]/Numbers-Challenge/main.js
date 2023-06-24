/*
  Number Challenege 
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integar
console.log(Math.min(a, b, c, d));

// Use Variable a + d One Time To get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 1_00_00

// Get Integar "2" From d Variable With 4 Methods
console.log(+d.toFixed(0));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));  

// Use Variables b + d To Get This Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)) // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))) // 67 => Number