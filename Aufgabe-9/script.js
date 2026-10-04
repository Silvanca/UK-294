const form = document.forms.Login;
const mail = document.querySelector("#email");
const passwd = document.querySelector("#password");
const API = "http://localhost/auth/jwt"
const tasklist = document.querySelector("#taskList")



form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const mailValue = mail.value.trim();
    const passwdValue = passwd.value

    const body = {email: mailValue, password: passwdValue};

    const res = await fetch(API + "/sign", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    if(!res.ok) throw Error(`HTTP ${res.status}`);
    const data = await res.json();
    sessionStorage.setItem("token", data.token)

    await loadTasks();
})

async function loadTasks(){
    const token = sessionStorage.getItem("token");

    const taskres = await fetch(API + "/tasks", {
        headers: {Authorization: `Bearer ${token}`}
    })

    if(!taskres.ok) throw Error(`HTTP ${taskres.status}`);
    
    const task = await taskres.json();

    tasklist.replaceChildren();

    task.forEach((element) => {
        const Task = document.createElement("div");
        const status = task.completed ? "Erledigt" : "Noch offen";

        Task.innerHTML = `
            <h3>${element.title}</h3>
            <p>${status}</p>
            <button name="edit" id="edit">Bearbeiten</button>
            `
            
        tasklist.append(Task);
    })
}

const addForm = document.forms.addTask;


addForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const formData = new FormData(addForm);
    const title = formData.get("title");
    const status = formData.get("starus");
    
    const taskdata = {title: title, status: status};

    fetch(API + "/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(taskdata)
    })
    .then((response) => response.json())
    .then((data) => {
        const postTask = document.createElement("li")
        
        postTask.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.status}</p>
            <button name="edit" id="edit">Bearbeiten</button>
        `
        tasklist.append(postTask);
    })

})