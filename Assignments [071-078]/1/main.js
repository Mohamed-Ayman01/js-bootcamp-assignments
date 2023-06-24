let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newArr = mix.map((el) => typeof el === "string" ? el : "").reduce((acc, el) => acc + el);

console.log(newArr);

// Elzero