// Challenge 5.1
// step1
let button1 = document.createElement("button");
button1.textContent = "hello";
document.body.appendChild(button1);
button1.style.padding = "10px 20px";
button1.style.fontSize = "16PX";
button1.style.backgroundColor = "#3498db";
button1.style.color = "#FFFFFF";
button1.style.border = "none";
button1.style.cursor = "pointer";
button1.addEventListener("click", () => {
    button1.style.backgroundColor = "red";
    button1.style.color = "white";
    let random = Math.floor((Math.random() * 100) + 1);
    button1.textContent = `Clicked ${random}!`;
})