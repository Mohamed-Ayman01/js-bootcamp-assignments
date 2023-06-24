let imgs = Array.from(document.images);

imgs.forEach((el) => {
  if (el.hasAttribute("alt")) {
    el.alt = "Old";
  } else {
    el.alt = "Elzero New"
  }
})