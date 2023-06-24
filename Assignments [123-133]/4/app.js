let theNumber = 100020003000;

// theNumber = theNumber.toString();
// theNumber = new Set(theNumber);
// theNumber = Array.from(theNumber.values()).filter((el) => el >= true);
// theNumber = +(theNumber.join(""));

console.log(+([...(new Set(theNumber.toString()))].filter((e) => e >= true).join("")));

// Needed Output
// 123