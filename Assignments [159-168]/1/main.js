let myBirthday = new Date("2005-10-6"),
    currentDate = new Date();

let timeDifference = currentDate - myBirthday; 


console.log(`${Math.round(timeDifference / 1000)} seconds`);
console.log(`${Math.round(timeDifference / 1000 / 60)} minutes`);
console.log(`${Math.round(timeDifference / 1000 / 60 / 60)} hours`);
console.log(`${Math.round(timeDifference / 1000 / 60 / 60 / 24)} days`);
console.log(`${Math.round(timeDifference / 1000 / 60 / 60 / 24 / 30)} month`);
console.log(`${Math.round(timeDifference / 1000 / 60 / 60 / 24 / 30 / 12)} years`);