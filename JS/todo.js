const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDoButton(LiForDeleting) {
   const li = LiForDeleting.target.parentElement;
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   li.remove();
   saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    li.className = 'todoListFontSize';
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const deletButton = document.createElement("button");
    deletButton.innerText = "❌";
    deletButton.className = 'deletTodoButton';

    deletButton.addEventListener("click", deleteToDoButton);
    li.appendChild(span);
    li.appendChild(deletButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}