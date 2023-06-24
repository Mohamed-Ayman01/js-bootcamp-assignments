let nums = [2, 12, 11, 5, 10, 1, 99];

let newArr = nums.reduce(function (acc, el) {
  if (el % 2 === 0) {
    return acc * el;
  } else {
    return acc + el;
  }
}, 1);

console.log(newArr)
// 500