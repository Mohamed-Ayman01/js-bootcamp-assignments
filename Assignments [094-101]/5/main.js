let allElement = Array.from(document.body.children);

allElement.forEach((el) => {
  el.onclick = () => {
    console.log(`This Is ${el.tagName}`);
  };
});
