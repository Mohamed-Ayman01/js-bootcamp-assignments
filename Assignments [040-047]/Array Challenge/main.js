/*
  Arrays Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
console.log(my.reverse().slice(counter - (counter / counter))); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(counter, -(counter / counter))); // ["Elham", "Mazero"]

//
console.log(`${my.slice(counter, -(counter / counter))[zero].slice(zero, counter - counter / counter)}${my.slice(counter, -(counter / counter))[counter / counter].slice(-(counter + (counter / counter)))}`); // "Elzero"

console.log(`${my.slice(counter, -(counter / counter))[counter / counter][counter + (counter / counter)]}${my.slice(counter, -(counter / counter))[counter / counter].slice(-(counter/counter)).toUpperCase()}`); // "rO"