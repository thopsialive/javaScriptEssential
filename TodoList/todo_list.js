// Step 2: Defining variables to access data
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Practice Task
const clearAllTasksBtn = document.getElementById("clearAllTasksBtn");

let tasks = [];

// Step 3: Defining various functions to access data
function addTask() {
    const taskText = taskInput.value.trim(); //trimming any leading or trailing whitespace
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = 
            `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index)); // When the checkbox state changes, it triggers the toggleTask() function,
        taskList.appendChild(li); // <ul> is the Parent
    });
}

// This toggleTask function toggles the completion status of a specific task in the tasks array based on the provided index
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
displayTasks();
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Practice Task
function clearAllTasks() {
    tasks = [];
    displayTasks();
}

clearAllTasksBtn.addEventListener("click", clearAllTasks);
