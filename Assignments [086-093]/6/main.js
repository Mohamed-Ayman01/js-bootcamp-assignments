let form = document.forms[0];
let elNumInput = document.querySelector("form input[name='elements']");
let elTextInput = document.querySelector("form input[name='texts']");
let typeSelect = document.querySelector("form select");
let submitBtn = document.querySelector("form input[name='create']");
let resultsDiv = document.querySelector(".results");

form.addEventListener("submit", (e) => {
  let numberOfElement = elNumInput.value;
  let elementsText = elTextInput.value;
  let elementsType = typeSelect.value;

  resultsDiv.innerHTML = "";

  for (let i = 0; i < numberOfElement; i++) {
    let newEl = document.createElement(`${elementsType}`);
    newEl.className = "box";
    newEl.title = "Element";
    newEl.id = `id-${i + 1}`;
    newEl.textContent = elementsText || "Default";

    resultsDiv.append(newEl);
  }

  e.preventDefault();
});
