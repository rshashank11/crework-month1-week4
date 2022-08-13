const inputMail = document.querySelector("#input-mail");
const inputPw = document.querySelector("#input-pw");

const emailError = document.querySelector("#email-error");
const pwError = document.querySelector("#pw-error");

const btnSignIn = document.querySelector('#btn-sign-in');
const btnClose = document.querySelector(".btn-close");

const messageContainer = document.querySelector(".message-container")
const message = document.querySelector('.message');

let emailValid = false;
let pwValid = false;

messageContainer.style.display = "none";
emailError.style.display = "none";
pwError.style.display = "none";

inputMail.addEventListener("input", emailValidation);
inputPw.addEventListener("input", passwordValidation);

/*Email input validation */
function emailValidation() {
    const mailValue = inputMail.value;
    if (mailValue.includes(".com") && mailValue.includes("@")) {
        inputMail.style.outline = "none";
        inputMail.style.border = "1px solid #238636";
        inputMail.style.background = "rgba(35, 134, 54, 0.3)";
        emailValid = true;
    } else {
        inputMail.style.outline = "none";
        inputMail.style.border = "1px solid #54aeff";
        inputMail.style.background = "#0d1117";
        emailValid = false;
    }
}

/*Password input validation*/
function passwordValidation() {
    const pwValue = inputPw.value;
    if (pwValue.length < 4 || pwValue.length > 12) {
        inputPw.style.outline = "none";
        inputPw.style.border = "1px solid #54aeff";
        inputPw.style.background = "#0d1117";
        pwValid = false;
    } else {
        messageContainer.style.display = "none";
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


/*Sign in button*/
btnSignIn.addEventListener("click", function () {
    btnSignIn.innerText = "Sign in"
    const mailValue = inputMail.value;
    const pwValue = inputPw.value;
    if (mailValue === "" || pwValue === "") {
        emailError.style.display = "none";
        pwError.style.display = "none";
        messageContainer.style.display = "flex";
        message.innerText = "Please enter the email and password."
    } else if (emailValid === false) {
        emailError.style.display = "block";
        pwError.style.display = "none";
        emailError.innerText = 'Please enter a valid mail(Must contain "@" and ".com").';
    } else if (pwValid === false) {
        emailError.style.display = "none";
        pwError.style.display = "block";
        pwError.innerText = "Please enter a valid password(Must contain at least one number(0-9) and at least one uppercase alphabet)."
    } else {
        btnSignIn.innerText = "Signing in..."
        emailError.style.display = "none";
        pwError.style.display = "none";
    }
});


/*Error message close button*/
btnClose.addEventListener("click", function () {
    messageContainer.style.display = "none";
})