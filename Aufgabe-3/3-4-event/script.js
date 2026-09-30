const liste = document.querySelector("#destinations");
liste.classList.add("list")

const button = document.querySelector("#choose");
button.addEventListener('click', choosePlace);

const list = document.querySelectorAll("#destinations li");
let random;

function choosePlace(){
    if (random) {
        random.classList.remove("choosen");
    }
    random = list[Math.floor(Math.random() * list.length)];
    random.classList.add("choosen")
    console.log(random);
}







