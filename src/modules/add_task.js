// Is this only DOM?
const addTaskBtn = document.querySelector('#addTask');

// Task editor elements
const taskTitle = document.querySelector('#taskTitle');
const taskDescription = document.querySelector('#taskDescription');

// wtf so i do when on click
addTaskBtn.addEventListener('click', function() {
    taskTitle.focus();
})