let add = document.createElement("button");
add.textContent = "Add"
let del = document.createElement("button");
del.textContent = "Remove"

add.id = "uno"
del.id = "duo"

document.querySelector("#latest").after(add)
add.after(del)

document.querySelector("#duo").onclick = remove;
document.querySelector("#uno").onclick = addimg;

function addimg(){
    for (let i = 0; i < 3; i++){
        let newItem = document.createElement("img");
        newItem.src = `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
        document.querySelector(".Pictures").append(newItem);
    }
}

function remove(){
    for(let i = 0; i < 3; i++){
        const rem = document.querySelector(".Pictures img");
        rem.remove();
    }
}