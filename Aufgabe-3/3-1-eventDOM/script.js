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
    .goal{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 60px;
        height: 150px;
        border: 3px solid white;
        box-sizing: border-box;
    }
    .goal.left{
        left: 0;
        border-left: none;
    }
    .goal.right{
        right: 0;
        border-right: none;
    }
`
document.head.appendChild(style); 

const feld = document.createElement("div")
feld.classList.add("field");
feld.style.position = "relative";
document.body.append(feld);

feld.addEventListener("mousedown", getPosition)

const goalLeft = document.createElement("div");
goalLeft.classList.add("goal", "left");
feld.append(goalLeft);

const goalRight = document.createElement("div");
goalRight.classList.add("goal", "right");
feld.append(goalRight);

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

    ball.style.left = (x - ball.offsetWidth / 2) + "px";
    ball.style.top = (y - ball.offsetHeight / 2) + "px";

    if (isInGoal(goalLeft) || isInGoal(goalRight)){
        count1++;
        counter.textContent = count1;
        resetBall();
    }
}

function isInGoal(goal){
    const b = ball.getBoundingClientRect();
    const g = goal.getBoundingClientRect();

    // Mittelpunkt des Balls
    const cx = b.left + b.width / 2;
    const cy = b.top + b.height / 2;

    return cx > g.left && cx < g.right && cy > g.top && cy < g.bottom;
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