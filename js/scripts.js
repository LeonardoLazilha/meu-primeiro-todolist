const btn = document.querySelector(".button-task");
const inputValue = document.querySelector(".input-task");
const completeTasks = document.querySelector(".list-tasks");
let list = [];

function getInputValue() {
  list.push({
    item: inputValue.value,
    done: false,
  });
  inputValue.value = "";
  showTasks();
}

function showTasks() {
  let newLi = "";
  list.forEach((task, index) => {
    newLi += `
        <li class="task ${task.done ? "done" : ""}">
            <img src="img/checked.png" alt="checked-icon" onclick="checked(${index})">
            <p>${task.item}</p>
            <img src="img/trash.png" alt="trash-icon" onclick="deleteTask(${index})">
        </li>
        `;
  });
  localStorage.setItem("lista", JSON.stringify(list));
  completeTasks.innerHTML = newLi;
}

function checked(index) {
  list[index].done = !list[index].done;
  showTasks();
}

function deleteTask(index) {
  list.splice(index, 1);
  showTasks();
}

function reloadTasks() {
  const localStorageTasks = localStorage.getItem("lista");
  list = JSON.parse(localStorageTasks) || [];
  showTasks();
}

reloadTasks();
btn.addEventListener("click", getInputValue);
