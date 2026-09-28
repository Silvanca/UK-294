let name = prompt("Dein name?");

let jetzt = new Date();
let stunde = jetzt.getHours();

let begruessung; 

if(stunde < 12 && stunde > 6){
    begruessung = "Guten Morgen"
}else if(stunde < 18 && stunde > 12){
    begruessung = "Guten Tag"
}else if(stunde < 22 && stunde > 18){
    begruessung = "Guten Abend"
}else{
    begruessung = "Gute Nacht"
}

alert(begruessung + " " + name + "!");