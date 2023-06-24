let div = document.querySelector(".count-div");

let handler = setInterval(function () {
  div.textContent -= 1;
  if (div.textContent === "0") {
    clearInterval(handler)
  }
}, 1000)