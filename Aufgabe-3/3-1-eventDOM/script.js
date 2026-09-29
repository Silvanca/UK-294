let h1 = document.createElement("h1");
let zahl = 0;
h1.textContent = zahl; 

const button = document.querySelector("button");
button.before(h1);

document.querySelector("button").addEventListener('click', hello);

let counter = document.createElement("h1")
let count1 = 0;
counter.textContent = count1;
button.after(counter);

let button2 = document.createElement("button")
button2.textContent = "Count"
counter.after(button2);


document.querySelectorAll("button")[1].addEventListener('click', count)


let style = document.createElement("style")
style.textContent = `
    .field{
        height: 400px;
        width: 900px;
        background-color: green;
        margin-top: 1rem;
    }
`
document.head.appendChild(style); 

const feld = document.createElement("div")
feld.classList.add("field");
feld.style.position = "relative";
document.body.append(feld);

feld.addEventListener("mousedown", getPosition)

let ballcss = document.createElement("style")
ballcss.textContent = `
    #football {
        width: 50px;
    }
`
feld.appendChild(ballcss); 

let ball = document.createElement("img");
ball.src = "https://images.vexels.com/media/users/3/158409/isolated/preview/b0af06a4c1a8e7a31ce379250130d26c-ball-fussball-pentagon-silhouette.png"
ball.alt = "Ball"
ball.id = "football"
ball.style.position = "absolute";
ball.style.left = "0";
ball.style.top = "0";
feld.append(ball);


function getPosition(event){
    const rect = feld.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}

function hello(){
    alert("Hallo, Welt")
    zahl++;
    h1.innerText = zahl;
}

function count(){
    count1++;
    counter.innerText = count1;
} 