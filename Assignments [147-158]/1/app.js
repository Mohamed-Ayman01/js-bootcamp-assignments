// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }
// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    console.log(`Car Is Running Now`);
  }

  stop() {
    console.log(`Car Is Stopped Now`);
  }
}

const carOne = new Car("MG", "2022", "420000");

const carTwo = new Car("rang rover", "2018", "500000");

const carThree = new Car("nissan", "2016", "340000");

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Prize Is ${carOne.p}`);

carThree.run();