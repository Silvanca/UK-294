document.body.style.backgroundColor = "#a31a1aff";

document.querySelector("h1").innerText = "Silvan";

document.querySelector("p").classList.add("large");

let newItem = document.createElement("li");
newItem.textContent = "PC";
document.querySelector("ul").append(newItem)

document.querySelector("ul").className = "ul_list";  
document.querySelector(".ul_list li:nth-child(2)").remove();

const h1 = document.querySelector("h1")
const img = document.createElement("img")
img.src="https://i.pinimg.com/originals/20/a2/13/20a213a46934eded2207804cfb3d5640.png";
img.width = "200"
h1.after(img)