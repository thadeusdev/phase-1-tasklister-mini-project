// make our todo list
const newTaskDescription = document.getElementById("new-task-description");
const toDoList = document.getElementById("tasks");

const createNewTask = (event) => { 
  event.preventDefault(); 
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDescription.value;
  createButton(newTask);
  toDoList.appendChild(newTask);

  event.target.reset();
};

const createButton = (task) => {
   const btn = document.createElement('button');
    btn.innerText = "X";

    task.appendChild(btn);
    btn.addEventListener('click',  (e) => deleteTask(e));
}

const deleteTask = (e) => {
  const selectedTask = e.target.parentElement;
  toDoList.removeChild(selectedTask);
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))