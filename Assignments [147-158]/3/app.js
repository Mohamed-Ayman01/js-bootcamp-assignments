// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    this.updateCard();
  }

  updateCard() {
    if (typeof this.#c !== "string") {
      this.#c = this.#c.toString();
    }

    // checks for a pattern in the card number and modify if not matched
    let cardRe = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/;

    if (this.#c.match(cardRe) === null) {
      let tempArr = [];
      let counter = 0;

      for (let l of this.#c) {
        if (counter === 4) {
          counter = 0;
          tempArr.push("-");
        }

        tempArr.push(l);
        counter++;
      }

      this.#c = tempArr.join("")
    }
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
