document.getElementById("main").remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory";

const textNode = document.createTextNode("grieve is the champion");
newHeader.appendChild(textNode);