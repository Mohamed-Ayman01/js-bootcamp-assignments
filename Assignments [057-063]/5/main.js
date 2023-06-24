function createSelectBox(startYear, endYear) {
  let selectBox = document.createElement('select');

  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;

    selectBox.append(option);
  }

  document.body.append(selectBox);
}

createSelectBox(2000, 2021)