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
// Step 2: Event Handling
// Multiple Event Listeners
let button = document.createElement("button");
button.innerText = "follow";
document.body.appendChild(button);
button.addEventListener("mouseover",  ()=> {
    button.style.backgroundColor = "orange";
})
button.addEventListener("mouseout", ()=> {
    button.style.backgroundColor = "red";
})
// Event Delegation
let div1 = document.getElementById("original");

    let div2 = document.querySelector(".container");

    let buttons = document.querySelectorAll("#buttonContainer");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            console.log("Clicked button text:", button.textContent);
        });
    });
// Form Data Extraction
let formData = document.createElement("form");
let inputName = document.createElement("input");
inputName.type = "text";
let inputEmail = document.createElement("input");
inputName.type = "email";
let buttonForm = document.createElement("button");
buttonForm.type = "submit";
buttonForm.textContent = "Submit";
document.body.appendChild(formData);
formData.appendChild(inputName);
formData.appendChild(inputEmail);
formData.appendChild(buttonForm);
formData.style.display = "flex";
formData.style.flexDirection = "column";
 buttonForm.style.width ="100px";
inputName.style.width = "300px";
inputEmail.style.width = "300px";
buttonForm.addEventListener("click", () => {
    console.log(inputName.value,inputEmail.value);

})

