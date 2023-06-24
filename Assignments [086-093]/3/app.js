let inputField = document.querySelector("form input[name='dollar']");
let resultDiv = document.querySelector("div.result");

inputField.addEventListener("input", (e) => {
  let val = inputField.value;
  if (val >= 0 ) {
    resultDiv.innerHTML = `<span>{${val}}</span> USD Dollar = <span>{${(val * 15.6).toFixed(2)}}</span> Egyption Pound`;
  } else {
    resultDiv.innerHTML = `<span>{${0}}</span> USD Dollar = <span>{${0}}</span> Egyption Pound`;
  }
});