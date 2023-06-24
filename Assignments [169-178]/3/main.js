let req = new XMLHttpRequest();

req.open("GET", "./article.json");

req.send();

req.onreadystatechange = function () {
  if (req.readyState === 4 && req.response !== "") {
    let mainData = JSON.parse(req.response);

    for (i of mainData) {
      i["section"] = "All";
    }

    console.log(mainData);

    let updatedData = JSON.stringify(mainData);

    console.log(updatedData);
  }
};
