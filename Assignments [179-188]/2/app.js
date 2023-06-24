async function getArticles() {
  try {
    let httpResponse = await fetch("./articles.json");

    let articles = await httpResponse.json();

    let numberOfArticles = 5;

    for (let i = 0; i < numberOfArticles; i++) {
      let box = document.createElement("div");
      box.style = `
        padding: 1rem;
        margin: .5rem auto;
        background-color: rgb(46 131 146);
        font-family: arial, tahoma;
        color: white
      `;

      let title = document.createElement("h3");
      title.innerText = articles[i].title;

      let description = document.createElement("p");
      description.innerText = articles[i].description;

      box.append(title, description);

      document.body.append(box);
    }
  } catch {
    throw Error("FETCHING ARTICLES FAILED");
  }
}

getArticles();
