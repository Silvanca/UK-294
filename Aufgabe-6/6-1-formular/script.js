const form = document.forms.Ratespiel
let zahl = Math.floor(Math.random() * 100);
const output = document.querySelector("#output")


function check(e){
    e.preventDefault();
    const formData = new FormData(form);
    const guesse = formData.get("guess");

    if(guesse > zahl){
        output.innerText = "Die Zahl ist kleiner"
        //alert("Die Zahl ist kleiner");
        console.log("Hallo")
    }else if(guesse < zahl){
        output.innerText = "Die Zahl ist Grösser"
        //alert("Die Zahl ist Grösser");
    }else{
        //alert("Du hast gewonnen");
        output.innerText = "Du hast gewonnen";
    }

}


document.addEventListener("submit", check)