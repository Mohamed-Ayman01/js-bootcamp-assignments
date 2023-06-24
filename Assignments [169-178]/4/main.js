let req = new XMLHttpRequest();

req.open("GET", "./article.json");

req.send();

req.onreadystatechange = function () {
  if (req.readyState === 4 && req.response !== "") {
    let dataDiv = document.createElement("div");
    dataDiv.id = "data";

    for (i of JSON.parse(req.response)) {
      let div = document.createElement("div");

      let title = document.createElement("h2");
      title.textContent = i.title;
      div.append(title);

      let id = document.createElement("p");
      id.textContent = `Book number ${i.id}`;
      div.append(id);

      let author = document.createElement("p");
      author.textContent = `Author: ${i.author}`;
      div.append(author);

      let section = document.createElement("p");
      section.textContent = `Section: ${i.section}`;
      div.append(section);

      dataDiv.append(div);
    }

    document.body.append(dataDiv);
  }
};
