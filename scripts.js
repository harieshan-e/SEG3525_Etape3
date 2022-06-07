var email; 

function displayEmail() {
    email = document.getElementById("emailApp").value;  
    document.getElementById("showEmail").innerHTML = "Un membre de notre équipe vous contactera au courriel " + email.bold() + " bientôt."
}
