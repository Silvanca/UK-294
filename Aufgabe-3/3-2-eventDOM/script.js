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


const albums = [
  {
    id: 1,
    name: "Graduation",
    artist: "Kanye West",
    tracks: [
      { nr: 1, title: "Good Morning" },
      { nr: 2, title: "Champion" },
      { nr: 3, title: "Stronger" },
      { nr: 4, title: "I Wonder" },
      { nr: 5, title: "Good Life" },
      { nr: 6, title: "Can't Tell Me Nothing" },
      { nr: 7, title: "Barry Bonds" },
      { nr: 8, title: "Drunk and Hot Girls" },
      { nr: 9, title: "Flashing Lights" },
      { nr: 10, title: "Everything I Am" },
      { nr: 11, title: "The Glory" },
      { nr: 12, title: "Homecoming" },
      { nr: 13, title: "Big Brother" },
    ],
  },
  {
    id: 2,
    name: "DeBÍ TiRAR MáS FOToS",
    artist: "Bad Bunny",
    tracks: [
      { nr: 1, title: "NUEVAYoL" },
      { nr: 2, title: "VOY A LLeVARTE PA PR" },
      { nr: 3, title: "BAILE INoLVIDABLE" },
      { nr: 4, title: "PERFuMITO NUEVO" },
      { nr: 5, title: "WELTiTA" },
      { nr: 6, title: "VELDÁ" },
      { nr: 7, title: "EL CLúB" },
      { nr: 8, title: "KETU TeCRÉ" },
      { nr: 9, title: "BOKeTE" },
      { nr: 10, title: "KLOuFRENS" },
      { nr: 11, title: "TURiSTA" },
      { nr: 12, title: "CAFé CON RON" },
      { nr: 13, title: "PIToRRO DE COCO" },
      { nr: 14, title: "LO QUE LE PASÓ A HAWAii" },
      { nr: 15, title: "EoO" },
      { nr: 16, title: "DtMF" },
      { nr: 17, title: "LA MuDANZA" },
    ],
  },
  {
    id: 3,
    name: "One of the Boys",
    artist: "Katy Perry",
    tracks: [
      { nr: 1, title: "Hot n Cold" },
      { nr: 2, title: "Thinking of You" },
      { nr: 3, title: "I Kissed a Girl" },
      { nr: 4, title: "Waking Up in Vegas" },
      { nr: 5, title: "Ur So Gay" },
    ],
  },
  {
    id: 4,
    name: "Pink Friday: Roman Reloaded",
    artist: "Nicki Minaj",
    tracks: [
      { nr: 1, title: "Beez in the Trap" },
      { nr: 2, title: "Right by My Side" },
      { nr: 3, title: "Starships" },
      { nr: 4, title: "Pound the Alarm" },
      { nr: 5, title: "Automatic" },
    ],
  },
];

document.querySelectorAll(".Pictures").forEach(element => {
    element.addEventListener("click", () => {
        tracklist();
        song();
    })
});

let container = document.createElement("div");
document.querySelector("div:nth-of-type(3)").append(container)

function tracklist(){
    if (container != null){
        container.innerHTML = null
    }
    const random = albums[Math.floor(Math.random() * albums.length)];
    let trackn = document.createElement("h1");
    let tracka = document.createElement("h2");
    let trackt = document.createElement("ul");
    
    trackn.textContent = random.name
    tracka.textContent = random.artist

    console.log(random.name + random.artist)

    random.tracks.forEach(track => {
        let eintrag = document.createElement("li");
        eintrag.textContent = track.title
        trackt.append(eintrag);
        console.log(track.title)
    });
    
    container.append(trackn, tracka, trackt);
}

let player = document.createElement("h1");
player.textContent = "Player: -"
document.querySelector("div:nth-of-type(2)").append(player)

function song(){
    console.log("hallo")
    const random = albums[Math.floor(Math.random() * albums.length)];
    const random1 = random.tracks[Math.floor(Math.random() * random.tracks.length)];
    player.innerText = "Player: " + random1.title;
}

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

const sortb = document.createElement("button");
sortb.textContent = "Sort"
sortb.addEventListener('click', sort)

del.after(sortb)

function sort() {
    const cont = document.querySelector(".Pictures");
    const children = [...cont.children];

    children.sort(() => Math.random() - 0.5);
    console.log("Hallo")
    children.forEach(element => {
        cont.append(element);
    }) 
}