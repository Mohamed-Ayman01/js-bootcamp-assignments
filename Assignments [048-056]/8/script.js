let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "string" && friends[index][0] !== "A") {
    counter++;
    console.log(`${counter} => ${friends[index]}`);
  }
  index++;
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"
