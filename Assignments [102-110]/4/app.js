let ele = document.querySelector("h2");

let handler = setInterval(function () {
  ele.textContent -= 1;
  if (ele.textContent === "5") {
    window.open("https://elzero.org/", "_self")
  }
}, 1000)