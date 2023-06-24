document.querySelector("p").remove();

let startElement = document.createElement("div");
startElement.textContent = "Start";
startElement.classList.add("start");
startElement.setAttribute("title", "Start Element");
startElement.setAttribute("data-value", "Start");

let endElement = document.createElement("div");
endElement.textContent = "End";
endElement.classList.add("end");
endElement.setAttribute("title", "End Element");
endElement.setAttribute("data-value", "End")

let ourElement = document.querySelector(".our-element");
ourElement.before(startElement);
ourElement.after(endElement)