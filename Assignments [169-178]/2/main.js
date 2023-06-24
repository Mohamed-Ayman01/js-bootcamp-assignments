let req = new XMLHttpRequest();

req.open("GET", "./article.json");

req.send();

req.onreadystatechange = () => {
  if (req.readyState === 4 && req.response !== "") {
    console.log(req.response);
  }
};

req.onload = () => console.log("Data Loaded");