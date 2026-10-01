const API = "https://jsonplaceholder.typicode.com/posts";
const form = document.forms.Post
form.addEventListener("submit", post);

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

function post(e){
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const text = formData.get("text");

    const PostData = {title: title, body: text};

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PostData)
    })
    .then((response) => response.json())
    .then((data) => {
        const postElement = document.createElement("div");

        postElement.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <button class="delete" data-id="${data.id}">Delete</button>
            <button class="update" data-id="${data.id}">Update</button>
            <hr>
        `

        form.after(postElement)

        const deleteButton = postElement.querySelector(".delete");
        deleteButton.addEventListener("click", deletePost);

        const updateButton = postElement.querySelector(".update");
        updateButton.addEventListener("click", updatePost)
    })
}



function deletePost(event){
    const postID = event.target.dataset.id
    console.log(postID)
    fetch(API + "/" + postID, { method: "Delete" })
    .then((response) => {
        event.target.parentElement.remove()
    })
}

function updatePost(event){
    const postId = event.target.dataset.id
    fetch(API + "/" + postId)
    .then((response) => response.json())
    .then((data) => {
        const post = event.target.parentElement;
        post.innerHTML = `
            <form name="PostForm">
                <input type="text" name="title" id="title">
                <textarea name="text" id="text"></textarea>
                <button class="delete">Delete</button>
                <button type="submit" class="save">Save</button>
            </form>
            <hr>
        `;

        const postForm = document.forms.PostForm;
        postForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formdata = new FormData(postForm);
            const Title = formdata.get("title");
            const Text = formdata.get("text");

            const postData = {title: Title, body: Text};

            console.log(postId)

            fetch(API + "/" + postId, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData)
            })
            .then((response) => response.json())
            .then((data) => {

                post.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                    <button class="delete" data-id="${data.id}">Delete</button>
                    <button class="update" data-id="${data.id}">Update</button>
                    <hr>
                `

                const deleteButton = post.querySelector(".delete");
                deleteButton.addEventListener("click", deletePost);

                const updateButton = post.querySelector(".update");
                updateButton.addEventListener("click", updatePost);
            })
        })
    })
}