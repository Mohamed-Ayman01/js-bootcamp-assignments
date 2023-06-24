function showPopup () {
  let popup = document.createElement("div");
  popup.classList.add("popup", "opened");

  let heading = document.createElement("h2");
  heading.textContent = "welcome";
  
  let paragraph = document.createElement("p");
  paragraph.textContent = "welcome to elzero web school";
  
  let exitBtn = document.createElement("button");
  exitBtn.classList.add("exit")
  exitBtn.textContent = "x";

  popup.append(heading, paragraph, exitBtn);

  document.body.append(popup)
}

setTimeout(showPopup, 5000);

function closePopup () {

}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("exit")) {
    let popup = document.querySelector(".popup");
    popup.classList.remove("opened");
    popup.classList.add("closed");

    setTimeout(() => {
      popup.remove()
    }, 900)
  }
});