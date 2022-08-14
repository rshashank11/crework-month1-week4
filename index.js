const inputMail = document.querySelector("#input-mail");
const inputPw = document.querySelector("#input-pw");

const emailError = document.querySelector("#email-error");
const pwError = document.querySelector("#pw-error");

const btnSignIn = document.querySelector('#btn-sign-in');
const btnClose1 = document.querySelector(".btn-close1");
const btnClose2 = document.querySelector(".btn-close2");

const messageContainer1 = document.querySelector(".message-container1")
const message1 = document.querySelector('.message1');


const messageContainer2 = document.querySelector(".message-container2")
const message2 = document.querySelector('.message2');

let emailValid = false; //Variable for keeping check of email validity.
let pwValid = false; //Variable for keeping check of password validity.

//Initial display of error and success messages.
messageContainer1.style.display = "none";
messageContainer2.style.display = "none";
emailError.style.display = "none";
pwError.style.display = "none";

//Using input event to check validity as user types.
inputMail.addEventListener("input", emailValidation);
inputPw.addEventListener("input", passwordValidation);

/*Email input validation */
function emailValidation() {
    const mailValue = inputMail.value;
    if (mailValue === "") {
        inputMail.style.outline = "none";
        inputMail.style.background = "#0d1117";
        inputMail.style.border = "1px solid #30363d";
    } else {
        if (mailValue.includes(".com") && mailValue.includes("@")) {
            inputMail.style.outline = "none";
            inputMail.style.border = "1px solid #238636";
            inputMail.style.background = "rgba(35, 134, 54, 0.3)";
            emailValid = true;
        } else {
            inputMail.style.outline = "none";
            inputMail.style.background = "#0d1117";
            inputMail.style.border = "1px solid #54aeff";
            emailValid = false;
        }
    }
}

/*Password input validation*/
function passwordValidation() {
    const pwValue = inputPw.value;
    if (pwValue === "") {
        inputPw.style.outline = "none";
        inputPw.style.background = "#0d1117";
        inputPw.style.border = "1px solid #30363d";
    } else {
        if (pwValue.length < 4 || pwValue.length > 12) {
            inputPw.style.outline = "none";
            inputPw.style.border = "1px solid #54aeff";
            inputPw.style.background = "#0d1117";
            pwValid = false;
        } else {
            messageContainer1.style.display = "none";
            const numbers = new RegExp(/\d/);
            const capitals = new RegExp(/[A-Z]/);
            console.log(numbers);
            if (numbers.test(pwValue) && capitals.test(pwValue)) {
                inputPw.style.outline = "none";
                inputPw.style.border = "1px solid #238636";
                inputPw.style.background = "rgba(35, 134, 54, 0.3)";
                pwValid = true;
            } else {
                inputPw.style.outline = "none";
                inputPw.style.border = "1px solid #54aeff";
                inputPw.style.background = "#0d1117";
                pwValid = false;
            }
        }
    }
}


/*Sign in button validation*/
btnSignIn.addEventListener("click", function () {
    btnSignIn.innerText = "Sign in"
    const mailValue = inputMail.value;
    const pwValue = inputPw.value;
    if (mailValue === "" || pwValue === "") { //Error message if either email or password not entered.
        emailError.style.display = "none";
        pwError.style.display = "none";
        messageContainer1.style.display = "flex";
        message1.innerText = "Please enter the email and password."
    } else if (emailValid === false) { //Invalid email.
        emailError.style.display = "block";
        pwError.style.display = "none";
        emailError.innerText = '⚠️ Please enter a valid mail(Must contain "@" and ".com").';
    } else if (pwValid === false) { //Invalid password.
        emailError.style.display = "none";
        pwError.style.display = "block";
        pwError.innerText = "⚠️ Please enter a valid password(Must contain at least one number(0-9) and at least one uppercase alphabet)."
    } else { //Checking if password contains the username part of the mail.
        const userName = mailValue.substring(0, mailValue.indexOf("@"));
        if(pwValue.includes(userName)) { //True
            emailError.style.display = "none";
            pwError.style.display = "none";
            messageContainer2.style.display = "flex";
            message2.innerText = "Success."
            btnSignIn.innerText = "Signing in..."
        } else { //False
            btnSignIn.innerText = "Signing in..."
        }
    }
});


/*Error message close buttons*/
btnClose1.addEventListener("click", function () {
    messageContainer1.style.display = "none";
})

btnClose2.addEventListener("click", function () {
    messageContainer2.style.display = "none";
})