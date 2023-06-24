/* ### Challenge 1 */

let a = 10;
let b = "20";
let c = 80;

// 11 + 20 + 80 - 11 => 100
console.log(++a + +b++ + +c++ - +a++);

// 13 + 81 - 21 - (-13) + 14 => 100
console.log(++a + -b + +c++ - -a++ + +a);

// 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1  ?? => 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a]
  - Value: 11
  - Explain: pre increment
  [+]
  - Explain: Addition operator
  [+]
  - Explain: unary plus operator
  [b++]
  - Value: 20
  - Explain: post increment
  [+]
  - Explain: Addition operator
  [+]
  - Explain: unary plus operator
  [c++]
  - Value: 80
  - Explain: post increment
  [-]
  - Explain: Subtraction operator
  [+]
  - Explain: unary plus operator
  [a++]
  - Value: 10
  - Explain: post increment
*/

/*
  [++a]
  - Value: 13
  - Explain: pre increment
  [+]
  - Explain: addition operator
  [-b]
  - Value: -21
  - Explain: unary negeation operator
  [+]
  - Explain: addition operator
  [+]
  - Explain: unary plus operator
  [c++]
  - Value: 81
  - Explain: post increment
  [-]
  - Explain: subtraction operator
  [-]
  - Explain: unary negation operator
  [a++]
  - Value: 13
  - Explain: post increment
  [+]
  - Explain: addition operator
  [+a]
  - Value: 14
  - Explain: unary plus operator
*/

/*
  [--c]
  - Value: 81
  - Explain: pre decrement
  [+]
  - Explain: addition operator
  [+b]
  - Value: 21
  - Explain: unary plus operator
  [+]
  - Explain: addition operator
  [--a]
  - Value: 13
  - Explain: pre decrement
  [*]
  - Explain: multiplication opreator
  [+b++]
  - Value: 21
  - Explain: unary plus operator, post increment
  [-]
  - Explain: subtraction operator
  [+b]
  - Value: 22
  - Explain: unary plus operator
  [*]
  - Explain: multiplication operator
  [a]
  - Value: 13
  - Explain: just the var no operator
  [+]
  - Explain: addition operator
  [--a]
  - Value: 12
  - Explain:  pre decrement
  [-]
  - Explain: subtraction operator
  [+true]
  - Value: 1
  - Explain: unary plus operator
*/


/* ### Challenge 2 */
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(-d + ++f + ++e * ++g); // 173