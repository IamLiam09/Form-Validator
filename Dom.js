const username = document.getElementById("username")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form_control error"
    const small = formControl.querySelector("small");
    small.innerText = message;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form_control success"
};
function checkUsername(){
    if(username.value === ""){
        showError(username, "Username is required")
    }else{
        showSuccess(username);
    }
}
function Checkpassword(){
    if(password.value === ""){
        showError(password, "password is required")
    }else{
        showSuccess(password)
    }
}
function CheckConfirmpassword(){
    if(password2.value === ""){
        showError(password2, "Please confirm the password")
    }else{
        showSuccess(password2)
    }
};
function CheckPasswordMatch(){
    if(password.value !== password2.value) {
        showError(password2, "Password do not match");
    }
}
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkUsername();
    Checkpassword();
    CheckConfirmpassword();
    CheckPasswordMatch();
});