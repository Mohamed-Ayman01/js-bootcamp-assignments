const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score", {
  writable: false,
  enumerable: true,
  configurable: true,
  value: 1000,
});

Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: 100,
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}