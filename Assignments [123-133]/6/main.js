// Case 1
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// Case 2
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// Case 3
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

function swapNumbersIn(arr) {
  let numsArr = [];

  for (i of arr) {
    if (typeof i === "number") numsArr.push(i);
  }

  arr = arr.filter((el) => typeof el === "string");

  arr.unshift(...numsArr);

  arr.copyWithin(0, numsArr.length, numsArr.length*2);

  return arr;
}

console.log(swapNumbersIn(chars));
