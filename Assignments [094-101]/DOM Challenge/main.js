document.body.style.cssText = `min-height: 100vh; margin: 0; padding: 0; display: flex; flex-direction: column; font-family: arial, tahoma;`;

// Header 
let header = document.createElement("nav");
header.classList.add("website-head");
header.style.cssText = `padding: .5rem 1rem; display: flex; justify-content: space-between; align-items: center`;

let logo = document.createElement("div");
let logoText = document.createTextNode("Elzero");
logo.append(logoText);
logo.classList.add("logo");
logo.setAttribute("title", "Website Logo");
logo.style.cssText = `font-weight: bold; font-size: 2rem;color: rgb(35, 169, 110)`;
header.append(logo);

let menu = document.createElement("ul");
menu.style.cssText = `display: flex; list-style: none;color: #878787`;

let liTextList = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < liTextList.length; i++) {
  let li = document.createElement("li");
  li.style.cssText = `margin: 0 .5rem`;
  li.textContent = liTextList[i];
  menu.append(li)
}

header.append(menu)

document.body.append(header)

// Content DIV
let contentDiv = document.createElement("div");
contentDiv.classList.add("content")
contentDiv.style.cssText = `padding: 1rem; flex: 1 1; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); grid-gap: 1rem; background-color: #ccc; color: #878787`;

for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.classList.add("product");
  product.style.cssText = `padding: .5rem; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #fff`;

  let productNum = document.createElement("span");
  productNum.textContent = i + 1;
  productNum.style.cssText = `font-size: 3rem; font-weight: bold; color: #000`;
  product.append(productNum)
  
  let text = document.createTextNode("Product");
  product.append(text)

  contentDiv.append(product)
}

document.body.append(contentDiv)

// Footer
let footer = document.createElement("footer");
footer.classList.add("footer");
footer.textContent = "Copyright 2021";
footer.style.cssText = `padding: 1rem ; font-size: 1.5rem;text-align: center; background-color: rgb(35, 169, 110); color: white;`;
document.body.append(footer);
