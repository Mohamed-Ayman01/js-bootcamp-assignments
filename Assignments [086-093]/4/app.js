let one = document.querySelector("div.one");
let two = document.querySelector("div.two");
let num = Array.from(document.querySelectorAll("div")).indexOf(two);
let oneContent = one.textContent;
let TwoContent = two.textContent;
let oneTitle = one.title;
let TwoTitle = two.title;

one.setAttribute("title", TwoTitle)
two.setAttribute("title", oneTitle)
one.textContent = TwoContent;
two.textContent = `${oneContent} ${++num}`

