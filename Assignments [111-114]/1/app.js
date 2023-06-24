let testTextBox = document.querySelector(".sample-text");
let fontFamSelect = document.querySelector("select#font-family");
let colorSelect = document.querySelector("select#color");
let fontSizeSelect = document.querySelector("select#font-size");
let allSelects = document.querySelectorAll("select");

function fetchLocalStorage() {
  if (window.localStorage.length < 1) {
    // set Default Styling Values
    testTextBox.style.fontFamily = `${fontFamSelect.value}`;
    testTextBox.style.color = `${colorSelect.value}`;
    testTextBox.style.fontSize = `${fontSizeSelect.value}`;
  } else {
    // set Text Styling Values Into The Select Boxes
    allSelects.forEach((select) => {
      if (localStorage.getItem(select.id) !== null) {
        select.value = localStorage.getItem(select.id);
      }
    });
    // set Text Styling From Updated Selects Values
    testTextBox.style.fontFamily = `${fontFamSelect.value}`;
    testTextBox.style.color = `${colorSelect.value}`;
    testTextBox.style.fontSize = `${fontSizeSelect.value}px`;
  }
}
fetchLocalStorage();

allSelects.forEach((select) => {
  select.addEventListener("input", () => {
    window.localStorage.setItem(`${select.id}`, select.value);
    fetchLocalStorage();
  });
});
