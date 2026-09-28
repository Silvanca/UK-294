let zahl = Math.floor(Math.random() * 100);

let gefunden = false;

while(!gefunden){
    
    let guesse = prompt("Rate");

    if(guesse > zahl){
        alert("Deine Zahl ist grösser")
    }else if(guesse < zahl){
        alert("Deine Zahl ist kleiner")
    }else{
        alert("Du hast sie richtig errarten!")
    }
}