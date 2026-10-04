const button1 = document.querySelector("#minus")
const button2 = document.querySelector("#plus")
const display = document.querySelector("#num");

let zahl = 0;

function minus(){
  zahl--;
  display.innerText = zahl;
  history.replaceState(zahl, "", zahl);
}

function plus(){
  zahl++;
  display.innerText = zahl;
  history.replaceState(zahl, "", zahl);
}

button1.addEventListener("click", minus)
button2.addEventListener("click", plus)