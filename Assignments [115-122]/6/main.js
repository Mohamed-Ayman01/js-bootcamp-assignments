let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
function printDataOf({title, age, available, skills: [, skill2]}) {
  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Available");
  console.log(skill2);
}
printDataOf(myFriends[chosen - 1]);


// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"