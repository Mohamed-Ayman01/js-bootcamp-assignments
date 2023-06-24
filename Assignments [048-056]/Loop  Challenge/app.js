/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let neddedAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] !== "Stop") {
    neddedAdmins.push(myAdmins[i]);
  } else break;
}

document.write(`<div>We Have ${neddedAdmins.length} Admins</div>`)
document.write(`<hr>`);

for (let i = 0; i < neddedAdmins.length; i++) {
  document.write(`<div>`);
  document.write(`<div>The Admin For Team ${i + 1} is ${neddedAdmins[i]}`);
  document.write(`<h3>Team Members:</h3>`)
  let employeesCounter = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === neddedAdmins[i][0]) {
      document.write(`<p>- ${employeesCounter++} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}