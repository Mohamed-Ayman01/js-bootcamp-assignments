// “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”


let images = Array.from(document.images);

images.forEach(function (el) {
  el.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  el.setAttribute("alt", "Elzero Logo")
});