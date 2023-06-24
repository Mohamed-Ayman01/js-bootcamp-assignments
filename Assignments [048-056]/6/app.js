let start = 0;
let swappedName = "elZerO";

let newName = [];
for (let i = start; i < swappedName.length; i++) {
  let letter = swappedName[i];

  if (letter === letter.toLowerCase()) {
    newName.push(letter.toUpperCase());
  } else {
    newName.push(letter.toLowerCase());
  }
}
swappedName = newName.join("");

console.log(`${swappedName}`);
// Output "ELzERo"