const form = document.forms.AddFriend;


document.addEventListener("submit", cfriend);


function cfriend(e){
    e.preventDefault();
    const data = new FormData(form);
    const firend = document.createElement("div");
    const surname = data.get("surname");
    const name = data.get("name");
    const streat = data.get("streat");
    const plz = data.get("plz");
    const city = data.get("city");
    const email = data.get("email");
    const anrede = data.get("anrede");
    const know = data.get("know");

    firend.innerHTML = `
        <h1>${surname} ${name}</h1>
        <p>${streat}</p>
        <p>${plz} ${city}</p>
        <p><a href="mailto:${email}">${email}</a></p>
    `;

    firend.classList.add("firends")
    document.querySelector("#friends").appendChild(firend);
    form.reset();
}