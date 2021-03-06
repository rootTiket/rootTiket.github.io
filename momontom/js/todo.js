const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.style.color = "#0095f6";
    span.style.fontSize = "15";
    const button = document.createElement("button");
    button.innerText ="#";
    button.style.color = "#0095f6";
    button.style.fontSize ="15";
    button.style.border ="1px";
    button.style.cursor = "pointer"
    button.style.backgroundColor= "transparent"
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo, 
        id : Date.now(), 
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
