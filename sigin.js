function ourfunction() {  
    document.getElementById("username");  
    document.getElementById("mail");  
    document.getElementById("pass");  
} 
function sigin(){
    var username=usernamevalidating()
    console.log(username,"username")
    var mail=mailvalidating()
    console.log(mail,"mail")
    var pass=passwordValidation()
    console.log(pass,"pass")
    if(username==true && mail==true && pass==true){
        alert("YOUR ACCOUNT IS CREATED SUCCESSFULLY")
        let palyload = {
            "username":document.getElementById("username").value,
            "mail":document.getElementById("mail").value,
            "pass":document.getElementById("pass").value
        }
        console.log(palyload)
    }
} 

function usernamevalidating() {  
    var username = document.getElementById("username").value;  
    const errorMessage = document.getElementById("username-error");  
    const pattern = /^[a-zA-Z-]{3,20}$/; // Valid username pattern  
    const valid = pattern.test(username);  

    if (username === "") {  
        errorMessage.textContent = "Username is required";  
        errorMessage.style.display = "flex";  
        return false;  
    } else if (!valid) {  
        errorMessage.textContent = "Invalid username format!";  
        errorMessage.style.display = "flex";  
        return false;  
    } else {  
        errorMessage.style.display = "none";  
    }  

    console.log(username);  
    return true;  
}

function mailvalidating() {  
    var mail = document.getElementById("mail").value;  
    const errorMessage = document.getElementById("username-error");  
    const pattern = /^[a-z0-9._%+-]+@gmail\.com$/;; // Valid username pattern  
    const valid = pattern.test(mail);  

    if (mail === "") {  
        errorMessage.textContent = "Mail ID is required";  
        errorMessage.style.display = "flex";  
        return false;  
    } else if (!valid) {  
        errorMessage.textContent = "Invalid Mail ID format!";  
        errorMessage.style.display = "flex";  
        return false;  
    } else {  
        errorMessage.style.display = "none";  
    }  

    console.log(mail);  
    return true;  
}

function passwordValidation(){
    const pass = document.getElementById("pass").value;
    const errorMessage = document.getElementById("pass-error");
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(pass);
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasDigit = /\d/.test(pass);
    const hasSpecialChar = /[@$!%*?&]/.test(pass);
  
    if (pass === "") {
        errorMessage.textContent = "Password is required.";
        errorMessage.style.display = "flex";
        return false;
    } else if (pass.length < minLength) {
        errorMessage.textContent = `Password must be at least ${minLength} characters long.`;
        errorMessage.style.display = "flex";
        return false;
    } else if (!hasLowerCase) {
        errorMessage.textContent = "Password must contain at least one lowercase letter.";
        errorMessage.style.display = "flex";
        return false;
    } else if (!hasUpperCase) {
        errorMessage.textContent = "Password must contain at least one uppercase letter.";
        errorMessage.style.display = "flex";
        return false;
    } else if (!hasDigit) {
        errorMessage.textContent = "Password must contain at least one digit.";
        errorMessage.style.display = "flex";
        return false;
    } else if (!hasSpecialChar) {
        errorMessage.textContent = "Password must contain at least one special character.";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
  
    console.log(pass);
    return true;
  }
