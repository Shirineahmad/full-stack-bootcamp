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
// ## Step 2:
let h1 = document.createElement("h1");
h1.textContent = "break";
document.body.appendChild(h1);
h1.style.border = "10px dotted green";


let isHidden = true;
document.addEventListener("keydown", (event) => {
   
    switch (event.key) {
        case 'a':
        case 'A':
            h1.style.color = "red";
            break;
        case 's':
        case 'S':
            h1.style.marginLeft = "10px";
            break;
        case 'd':
        case 'D':
            let j = document.createElement("p");
            j.textContent ="Key D was pressed!"
            document.body.appendChild(j);
            break;
        case 'w':
        case 'W':
            
            if (isHidden) {
                h1.style.display = "flex";
            } else {
                h1.style.display = "none";
            }
            
            isHidden = !isHidden; 
            break;
        case ' ':
            h1.style.fontSize = "large";
            break;

    }
})
// Step 3:
let newForm = document.createElement("form");
document.body.appendChild(newForm);
let fullName = document.createElement("input");
fullName.type = "text";
let emailAdress = document.createElement("input");
emailAdress.type = "email";
let password = document.createElement("input");
password.type = "password";
let confirmPassord = document.createElement("input");
confirmPassord.type = "password";
let submitButton = document.createElement("input");
submitButton.type = "submit";
newForm.appendChild(fullName);
newForm.appendChild(emailAdress);
newForm.appendChild(password);
newForm.appendChild(confirmPassord);
newForm.appendChild(submitButton);
newForm.addEventListener("submit", (event) => {
    
       
    if (password.value !== confirmPassord.value) {
        event.preventDefault(); // Prevent form submission
        let errorDiv = document.createElement("div");
        errorDiv.textContent = "Passwords do not match"; // Display error message
    } else {
        errorDiv.textContent = ""; // Clear error message if passwords match
    }
    document.body.appendChild(errorDiv);
})



