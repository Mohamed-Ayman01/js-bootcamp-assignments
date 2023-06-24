window.onload = () => {
  if (sessionStorage.length >= 1) {
    inputFields.forEach((input) => {
      if (sessionStorage.getItem(input.id)) {
        input.value = sessionStorage.getItem(input.id);
      }
    });
  }
};

let inputFields = document.querySelectorAll("input, select");

inputFields.forEach((element) => {
  element.oninput = () => {
    if (element.value !== "") {
      sessionStorage.setItem(element.id, element.value);
    } else {
      sessionStorage.removeItem(element.id);
    }
  };
});
