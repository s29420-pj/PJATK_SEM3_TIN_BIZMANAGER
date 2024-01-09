function onClickTasks() {
    let mainTitleElement = document.getElementById("mainTitle");
    let newContactButton = document.getElementById("newContactButton");
    let hideContactContent = document.getElementById("contactTable");
    let showNewTaskButton = document.getElementById("newTaskButton");
    let showTaskContainter = document.getElementById("taskContainer");

    mainTitleElement.textContent = "Tasks";
    newContactButton.style.display = "none";
    hideContactContent.style.display = "none";

    if (showNewTaskButton) {
        showNewTaskButton.style.display = "flex";
    } else {
        console.error("Element with id 'newTaskButton' not found");
    }

    if (showTaskContainter) {
        showTaskContainter.style.display = "flex";
    } else {
        console.error("Element with id 'taskContainer' not found");
    }

    console.log("Changed tab to Tasks.")
    updateTasks();
}

function updateTasks() {
    let taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';

    Tasks.forEach(function (task) {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('taskItem');
        taskDiv.setAttribute('data-id', task.id);

        let taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('doneOrRemove');

        if (task.isDone) {
            taskDiv.style.color = '#008000';
        }

        let removeButton = document.createElement('a');
        removeButton.href = "#";
        removeButton.classList.add('removeTaskButton');
        removeButton.onclick = function (event) {
            event.stopPropagation(); // Zapobiegaj przechwytywaniu kliknięć przez rodzica (taskDiv)
            removeTask(task.id);
        };

        let removeIcon = document.createElement('i');
        removeIcon.classList.add('bx', 'bx-task-x');
        removeIcon.style.color = '#CE1313';
        removeIcon.style.fontSize = '30px';
        removeButton.appendChild(removeIcon);

        let doneButton = document.createElement('a');
        doneButton.href = "#";
        doneButton.classList.add('doneTaskButton');
        doneButton.onclick = function (event) {
            event.stopPropagation();
            completeTask(task.id, taskDiv);
        };

        let doneIcon = document.createElement('i');
        doneIcon.classList.add('bx', 'bx-task');
        doneIcon.style.color = '#66d606';
        doneIcon.style.fontSize = '30px';
        doneButton.appendChild(doneIcon);

        buttonsContainer.appendChild(doneButton);
        buttonsContainer.appendChild(removeButton);

        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(buttonsContainer);
        taskContainer.appendChild(taskDiv);
    });

}

function newTask() {
    console.log("New Task Button clicked");
    let description = prompt("What is there to do?");
    let isDone = false;
    let idCount = Tasks.length + 1;

    if (description === null) {
        alert("Data entry canceled.");
    } else {
        let newTask = {
            id: idCount,
            description: description,
            isDone: isDone
        };

        Tasks.push(newTask);
        updateTasks();
    }
}

function removeTask(id) {
    Tasks = Tasks.filter(task => task.id !== id);
    updateTasks();
}

function completeTask(id, taskDiv) {
    const taskToComplete = Tasks.find(task => task.id === id);

    if (taskToComplete && !taskToComplete.isDone) {
        taskToComplete.isDone = true;
        taskDiv.style.color = '#008000';
    }
}
