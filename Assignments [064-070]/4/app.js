function specialMix(...data) {
  let type;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      type = "number";
      break;
    } else if (typeof data[i] === "string") {
      type = "string";
    }
  }

  if (type === "number") {
    let sum = null;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  } else if (type === "string") {
    let hasNum;

    for (let i = 0; i < data.length; i++) {
      let el = parseInt(data[i]);
      if (Boolean(el)) {
        hasNum = true;
        break;
      } else hasNum = false;
    }

    if (hasNum) {
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        let el = parseInt(data[i]);
        if (Boolean(el)) {
          sum += el;
        }
      }
      return sum;
    } else {
      return "All Is Strings";
    }
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
