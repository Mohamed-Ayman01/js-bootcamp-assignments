let promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();

  request.onload = () => {
    if ((request.readyState = request.DONE && +request.status === 200)) {
      resolve(JSON.parse(request.responseText));
    } else {
      reject(Error("DATA FETCHING FAILED"));
    }
  };

  request.open("GET", "./articles.json");

  request.send();
});

promise
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let articleBox = document.createElement("div");

      let articleHeader = document.createElement("h3");
      articleHeader.innerText = data[i].title;
      
      let articleDesc = document.createElement("p");
      articleDesc.innerText = data[i].description;
      
      articleBox.append(articleHeader, articleDesc);
      document.body.append(articleBox);
    }
  })
  .catch((reason) => {
    console.log(reason);
  });
