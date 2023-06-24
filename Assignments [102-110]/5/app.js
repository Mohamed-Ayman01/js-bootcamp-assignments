let ele = document.querySelector("h2");

let handler = setInterval(function () {
  ele.textContent -= 1;
  if (ele.textContent === "5") {
    window.open("https://elzero.org/", "", "width=400, height=600, top=30, left=400");
  }
  if (ele.textContent === "0") {
    clearInterval(handler);
  }
}, 1000);
