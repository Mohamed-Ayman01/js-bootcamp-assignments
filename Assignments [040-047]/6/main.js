let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1, arr2).sort().slice(-(arr1.length)).join("").toLowerCase()); // fxy