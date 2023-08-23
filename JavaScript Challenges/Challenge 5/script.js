// Step 1: DOM Creation and Navigation

// DOM Tree Navigation
let menuDiv = document.querySelector(".menu");
let header = document.querySelector("header");
let footer = document.querySelector("footer");

for (let i = 0; i < menuDiv.children.length; i++){
    console.log("menu child", menuDiv.children[i]);
}
for (let i = 0; i < header.children.length; i++) {
    console.log("header child", header.children[i]);
}
for (let i = 0; i < footer.children.length; i++) {
    console.log("footer child", footer.children[i]);
}
// DOM Element Creation
let div = document.createElement("div");
div.className = "container";
let p = document.createElement("p");
p.innerText = "Hello, World";
// textContent
document.body.appendChild(div);
div.appendChild(p);

//Element Styling

//  Using JavaScript:
div.style.color = "white";
p.style.fontSize = "24px";
p.style.fontWeight = "helvetica";
p.style.border = "1px solide black";
let v = document.querySelector("h1");
v.style.fontStyle = "italic";