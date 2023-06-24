let myString = "EElllzzzzzzzeroo";

let newArr = myString.split("").filter((el, ind, arr) => {
  let previousLetter = arr[ind - 1];

  if (el === previousLetter) {
    return false;
  } else {
    return true
  }
}).join("");

console.log(newArr)
// Elzero