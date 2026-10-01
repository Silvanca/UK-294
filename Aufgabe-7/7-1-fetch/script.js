const API = "https://jsonplaceholder.typicode.com/posts";

fetch(API)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((post) => {
            const postElement = document.createElement("div")
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
            `
            document.body.append(postElement)
        })

        .catch((error) => {
            console.error("Fehler beim laden", error)
        })
    })