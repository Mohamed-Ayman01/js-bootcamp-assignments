let theName = "Elzero";

console.log(theName.split(""));

console.log([...theName]);

console.log(Array.from(theName));

let arr = [];

for (const l of theName) arr.push(l);

console.log(arr);

console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']