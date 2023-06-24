let input = prompt("Print Number From - To", "Example: 5-20");

function printNumbers(value) {
  let numsList = value.split("-");
  
  numsList = numsList.map((el) => +el).sort();

  for (let i = numsList[0]; i <= numsList[1]; i++) {
    document.write(`<p>${i}</p>`);
  }
}
printNumbers(input);
