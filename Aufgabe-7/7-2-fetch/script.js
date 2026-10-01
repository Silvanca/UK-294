const API = "https://jsonplaceholder.typicode.com/posts";
document.addEventListener("submit", post);
const form = document.forms.Post

function post(e){
    e.preventDefault();
    const FormData = new FormData(form);
    const title = FormData.get("title");
    const text = FormData.get("text");

    const PostData = {title: title, body: text};

    fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PostData)
    })
    
    
}