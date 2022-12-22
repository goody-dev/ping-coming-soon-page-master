function validate() {
    const x = document.getElementById('email-input').value;
    const at = document.getElementById('email-input').value.indexOf("@");
    if(x === "") {
        document.getElementById('email-input').style.borderColor = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').style.color = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').innerHTML = "<i>Whoops! It looks like you forgot to add your email</i>";
        return true;
    }else if(at === -1) {
        document.getElementById('error-message').style.color = "hsl(354, 100%, 66%)";
        document.getElementById('error-message').innerHTML = "<i>Please provide a valid email address</i>";
        return false;
    }
}