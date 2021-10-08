function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

const signupbtnpress = document.getElementById("sign");
var username = document.getElementById("signupUsername").value;
var emailcheck = document.querySelector(".form__input").value;


 signupbtnpress.addEventListener("click",function (e){
     e.preventDefault();
    const signupbtn = document.getElementById("checPassword").value;
    const signupbtnconfirm = document.getElementById("checkpass1").value;
    const email = document.getElementById("emailvali").value;
    const usern = document.getElementById("signupUsername").value;
    if(usern == ""){
        alert("please enter username");
    }    
   else if(email == ""){
        alert("please enter email");
    }
    else if(signupbtn == "" || signupbtnconfirm == ""){
        alert("Enter both password")
    }
    else if(signupbtn != signupbtnconfirm){
         alert("password and confirm password does not match");
        }
    else{
         alert("Signup succesful please login")
     }
 })
 