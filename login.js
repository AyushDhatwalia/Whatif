const validUsername = "user";
const validPassword = "password";
function validateLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === validUsername && password === validPassword) {
        window.location.href = "account.html";
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
}