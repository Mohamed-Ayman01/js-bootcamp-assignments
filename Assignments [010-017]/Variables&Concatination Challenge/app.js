// ### Variables & Concatination Challenge
let theTitle = "Elzero",
  theDesc = "Elzero Web School",
  theDate = "25/10";

let cardMarkup = `<div class="card">
  <h3>${theTitle}</h3>
  <p>${theDesc}</p>
  <span>${theDate}</span>
</div>`;

document.write(cardMarkup.repeat(4))