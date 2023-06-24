let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArr = myArray.reduce(function (acc, el, ind) {
  if (!Array.isArray(el)) {
    return `${acc + el}`;
  } else {
    return acc + el.reduce((acc, el) => acc + el);
  }
});

console.log(newArr);
// Elzero
