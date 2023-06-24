let addClassInput = document.querySelector(".classes-to-add");
let removeClassInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("div[title='Current']");
let showClassesBox = document.querySelector(".classes-list > div");

function createClassesBoxes() {
  showClassesBox.textContent = "";

  let classesToShow = Array.from(currentElement.classList).sort();

  if (classesToShow.length >= 1) {
    for (let i = 0; i < classesToShow.length; i++) {
      let classEl = document.createElement("div");
      classEl.textContent = classesToShow[i];
  
      showClassesBox.append(classEl);
    }
  } else {
    showClassesBox.textContent = "No Classes To Show :(";
  }

}
createClassesBoxes();

function addClasses() {
  if (this.value.trim() !== "") {
    let classesToAdd = this.value.trim().toLowerCase().split(" ");

    for (let i = 0; i < classesToAdd.length; i++) {
      if (!currentElement.classList.contains(classesToAdd[i])) {
        currentElement.classList.add(classesToAdd[i]);
      }
    }
  }

  this.value = "";

  createClassesBoxes();
}

function removeClasses() {
  let classesToRemove = this.value.trim().toLowerCase().split(" ");

  for (let i = 0; i < classesToRemove.length; i++) {
    if (currentElement.classList.contains(classesToRemove[i])) {
      currentElement.classList.remove(classesToRemove[i]);
    }
  }

  this.value = "";

  createClassesBoxes();
}

addClassInput.addEventListener("blur", addClasses);
removeClassInput.addEventListener("blur", removeClasses);
