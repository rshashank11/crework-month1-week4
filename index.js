const inputMail = document.querySelector("#input-mail");
const inputPW = document.querySelector("#input-pw");
const btnSignIn = document.querySelector('#btn-sign-in');
const btnClose = document.querySelector(".btn-close");
const messageContainer = document.querySelector(".message-container")
const message = document.querySelector('.message');

messageContainer.style.display = "none";

inputMail.addEventListener("input" ,function() {
    const mailValue = inputMail.value;
    if(mailValue.includes(".com") && mailValue.includes("@")) {
        inputMail.style.outline = "none";
        inputMail.style.border = "1px solid #238636";
        inputMail.style.background = "rgba(35, 134, 54, 0.4)";
       }
       else {
        inputMail.style.outline = "none";
        inputMail.style.border = "1px solid #54aeff";
        inputMail.style.background = "#0d1117";
       }
    });

    

    btnSignIn.addEventListener("click", function(){
        const mailValue = inputMail.value;
        const pwValue = inputPW.value;

        if(mailValue === "" || pwValue === "") {
            messageContainer.style.display = "flex";
            message.innerText = "Please enter the email and password."
        }
    });

btnClose.addEventListener("click", function() {
    messageContainer.style.display = "none";
})