function orufunction(){
    document.getElementById("first-name")
    document.getElementById("Last name")
    document.getElementById("street-address")
    document.getElementById("city-name")
    document.getElementById("state")
    document.getElementById("pincode")
    document.getElementById("card-number")
}
function mysubmit(){
    var firstname=firstnamevalidating()
    console.log(firstname,"firstname")
    var lastname=lastnamevalidating()
    console.log(lastname,"lastname")
    var streetaddress=streetaddressvalidating() 
    console.log(streetaddress,"streetaddress")
    var cityname=citynamevalidating()
    console.log(cityname,"cityname")
    var state=statevalidating()
    console.log(state,"state")
    var pincode=pincodevalidating()
    console.log(pincode,"pincode")
    var cardnumber=cardnumbervalidating()
    console.log(cardnumber,"cardnumber")
    if(firstname==true && lastname==true && streetaddress==true && cityname==true && state==true && pincode==true && cardnumber==true){
        alert("YOUR ACCOUNT IS CREATED SUCCESSFULLY")

    let palyload = {

        "firstname":document.getElementById("first-name").value,
        "lastname":document.getElementById("last-name").value,
        "streetaddress":document.getElementById("street-address").value,
        "cityname":document.getElementById("city-name").value,
        "state":document.getElementById("state").value,
        "pincode":document.getElementById("pincode").value,
        "cardnumber":document.getElementById("card-number").value
    }
    console.log(palyload)
    }
}
function firstnamevalidating() {
    const firstname = document.getElementById("first-name").value;
    const errorMessage = document.getElementById("first-name-error");
    const pattern = /^[a-zA-Z-]{3,20}$/ // Valid username pattern
    const valid = pattern.test(firstname);
    if (firstname === "") {
        errorMessage.textContent = "First Name is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid First Name format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(firstname);
    return true;
}

function lastnamevalidating() {
    const lastname = document.getElementById("last-name").value;
    const errorMessage = document.getElementById("last-name-error");
    const pattern = /^[a-zA-Z-]{3,20}$/ // Valid username pattern
    const valid = pattern.test(lastname);
    if (lastname === "") {
        errorMessage.textContent = "Last Name is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid Last Name format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(lastname);
    return true;
}

function streetaddressvalidating() {
    const streetaddress = document.getElementById("street-address").value;
    const errorMessage = document.getElementById("street-address-error");
    const pattern = /^([A-Za-z0-9\s]{3,20})$/; // Valid username pattern
    const valid = pattern.test(streetaddress);
    if (streetaddress === "") {
        errorMessage.textContent = "Street Address is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid Street Address format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(streetaddress);
    return true;
}


function citynamevalidating() {
    const cityname = document.getElementById("city-name").value;
    const errorMessage = document.getElementById("city-name-error");
    const pattern = /^[a-zA-Z-]{3,20}$/; // Valid username pattern
    const valid = pattern.test(cityname);
    if (cityname === "") {
        errorMessage.textContent = "City Name is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid City Name format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(cityname);
    return true;
}

function statevalidating() {
    const state = document.getElementById("state").value;
    const errorMessage = document.getElementById("state-error");
    const pattern = /^[a-zA-Z-]{3,20}$/; // Valid username pattern
    const valid = pattern.test(state);
    if (state === "") {
        errorMessage.textContent = "State is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid State format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(state);
    return true;
}

function pincodevalidating() {
    const pincode = document.getElementById("pincode").value;
    const errorMessage = document.getElementById("pincode-error");
    const pattern = /^[0-9]{6}$/; // Valid username pattern
    const valid = pattern.test(pincode);
    if (pincode === "") {
        errorMessage.textContent = "Pincode is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid Pincode format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(pincode);
    return true;
}
function cardnumbervalidating() {
    const cardnumber = document.getElementById("card-number").value;
    const errorMessage = document.getElementById("card-number-error");
    const pattern = /^[0-9]{16}$/; // Valid username pattern
    const valid = pattern.test(cardnumber);
    if (cardnumber === "") {
        errorMessage.textContent = "Card Number is required";
        errorMessage.style.display = "flex";
        return false;
    } else if (!valid) {
        errorMessage.textContent = "Invalid Card Number format!";
        errorMessage.style.display = "flex";
        return false;
    } else {
        errorMessage.style.display = "none";
    }
    console.log(cardnumber);
    return true;
}