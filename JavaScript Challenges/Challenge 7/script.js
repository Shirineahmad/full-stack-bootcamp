let divContainer = document.createElement("div");
let divLoginContainer = document.createElement("div");
let divLoginSignin = document.createElement("div");
let divLoginSigninNow = document.createElement("div");
let h1SignUp = document.createElement("h1");
let h3EnterDetails = document.createElement("h3");
let containerForm = document.createElement("form");
let labelEmail = document.createElement("label");
let inputEmail = document.createElement("input");
let labelPassword = document.createElement("label");
let inputPassword = document.createElement("input");
let labelConfirmPassword = document.createElement("label");
let inputConfirmPassword = document.createElement("input");
let buttonSubmit = document.createElement("button");
let errorEmail = document.createElement("p");
let errorPass = document.createElement("p");
let errorConfirm = document.createElement("p");
divContainer.className = "container";
divLoginContainer.className = "login__container";
divLoginSignin.className = "login__signin";
divLoginSigninNow.className = "login__signin-now";
inputEmail.className = "input-field";
inputPassword.className = "input-field";
inputConfirmPassword.className = "input-field";
buttonSubmit.className = "filled-btn";
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.required;
inputPassword.type = "password";
inputPassword.placeholder = "Password";
inputPassword.required;
inputConfirmPassword.type = "password";
inputConfirmPassword.placeholder = "Confirm Password";
inputConfirmPassword.required;
buttonSubmit.id = "submit-btn";
h1SignUp.textContent = "Sign up NOW!";
h3EnterDetails.textContent = "Enter your details";
labelEmail.textContent = "Email";
labelPassword.textContent = "Password";
labelConfirmPassword.textContent = "Confirm Password";
buttonSubmit.textContent = "Submit";
errorConfirm.style.marginLeft = "200px";
errorEmail.style.marginLeft = "200px";
errorPass.style.marginLeft = "200px"
errorConfirm.style.color = "red";
errorEmail.style.color = "red";
errorPass.style.color = "red"
labelConfirmPassword.appendChild(errorConfirm)
labelConfirmPassword.appendChild(inputConfirmPassword);
labelPassword.appendChild(errorPass);
labelPassword.appendChild(inputPassword);
labelEmail.appendChild(errorEmail);
// labelEmail.appendChild(errorEmail);
labelEmail.appendChild(inputEmail);
containerForm.append(labelEmail, labelPassword, labelConfirmPassword, buttonSubmit);
divLoginSigninNow.append(h1SignUp, h3EnterDetails, containerForm);
divLoginSignin.appendChild(divLoginSigninNow);
divLoginContainer.appendChild(divLoginSignin);
divContainer.appendChild(divLoginContainer);
document.body.appendChild(divContainer);
// inputEmail.value = "shirine.ahmad@hotmail.com";
// console.log(inputEmail);
// inputPassword.value = "1234567";


buttonSubmit.addEventListener("click", function (evet) {
    const data = { mail: "shirine.ahmad@hotmail.com", pass: "123456" }
   
   
    
    if (inputEmail.value === data.mail) {
       
        if (inputPassword.value === data.pass) {
            if (inputConfirmPassword.value === inputPassword.value) {
                window.location.href = "./quotes.html";
            } else {
                errorConfirm.textContent=" doesn't match the password!"
            }

        }
        else {
            errorPass.textContent = "Invalid Password!"
        }

    } else {
        errorEmail.textContent = 'email is invalid';

    }
   event.preventDefault()
    
})

