let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filterdArr = numsAndStrings.filter((el) => typeof el !== "string").map((el) => -el);

console.log(filterdArr)
// [-1, -10, 10, 20, -5, -3]