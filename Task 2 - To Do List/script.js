var tasks = [];

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dueDateInput = document.getElementById("dueDateInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var task = {
            name: taskInput.value,
            dueDate: dueDateInput.value,
            completed: false
        };

        tasks.push(task);

        renderTask(task, taskList);

        taskInput.value = "";
        dueDateInput.value = "";
    }
}

function renderTask(task, taskList) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task.name));

    if (task.dueDate) {
        var dueDateSpan = document.createElement("span");
        dueDateSpan.innerHTML = "Due Date: " + task.dueDate;
        dueDateSpan.classList.add("due-date");
        li.appendChild(dueDateSpan);
    }

    li.onclick = function() {
        task.completed = !task.completed;
        updateTaskList(taskList);
    };

    if (task.completed) {
        li.classList.add("completed");
    }

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function(event) {
        event.stopPropagation();
        tasks.splice(tasks.indexOf(task), 1);
        updateTaskList(taskList);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

function updateTaskList(taskList) {
    taskList.innerHTML = "";
    tasks.forEach(function(task) {
        renderTask(task, taskList);
    });
}
