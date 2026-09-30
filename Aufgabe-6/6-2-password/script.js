document.addEventListener("submit", check);

function check(e){
    e.preventDefault();
    const form = document.forms.Login
    const data = new FormData(form)
    const password = data.get("password");
    const pconfirm = data.get("passwordConfirm")
    if(password === pconfirm){
        passwordConfirm.setCustomValidity("");
        form.reset();
        alert("Registriert");
    }else{
        passwordConfirm.setCustomValidity("Die Passwörter stimmen nicht überein.");
    }

}