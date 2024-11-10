function loginvalidation() {
    const login = document.getElementById("login").value;
    const errorMessage = document.getElementById("login-error");
    const pattern = /^[a-z0-9._%+-]+@gmail\.com$/;
    const valid = pattern.test(login);

    if (login === "") {
        errorMessage.textContent = "Mail ID is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Given Mail ID is not valid!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }

    console.log(login);
    return true;
}

function mysubmit() {
    const isValid = loginvalidation();
    const rememberMeChecked = document.getElementById("rememberMe").checked;

    if (isValid) {
        if(rememberMeChecked){
        alert("LOGIN SUCCESSFUL");

        let payload = {
            "login": document.getElementById("login").value,
            "rememberMe": true
        };

        console.log(payload);
    }else{
        alert("please check the 'remember me' box to proceed");
    }
    }
}

// This function is not used in your current code, you can remove it if not needed
function ourfunction() {
    document.getElementById("login");
}

document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });
});
