let addButton = document.getElementById('add');
let inputTask = document.getElementById('new-task');
let unfinishedTasks = document.getElementById('unfinished-tasks');
let finishedTasks = document.getElementById('finished-tasks');

function createNewElement(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('button');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
    let label = document.createElement('label');
    label.innerText = 'task';
    let input = document.createElement('input');
    input.type="text";
    let editButton = document.createElement('button');
    editButton.className = "material-icons edit";
    editButton.innerHTML = "<i class='material-icons'>edit</i>";
    let deleteButton = document.createElement('button');
    deleteButton.className = "material-icons delete";
    deleteButton.innerHTML = "<i class='material-icons'>delete</i>";
    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;
}

function addTask() {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value, false);
        unfinishedTasks.appendChild(listItem);
        inputTask.value = "";
    }
}
addButton.onclick = addTask;

