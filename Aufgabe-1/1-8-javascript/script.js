let zahlen = [];

while(true){
    let eingabe = prompt("Gib eine Zahl ein");
    
    let zahl = Number(eingabe);

    if (Number.isNaN(zahl)) {
        break;
    }
    if(!eingabe){
        break
    }

    zahlen.push(zahl);
}

let result = zahlen.reduce((sum, current)=> sum + current, 0);
alert(result)