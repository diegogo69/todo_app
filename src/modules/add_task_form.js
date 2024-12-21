function createAddTaskForm() {
    const form = document.createElement('form');


    const taskTitle = document.createElement('textarea');
    taskTitle.id = "taskTitle";
    taskTitle.spellcheck = "false";
    taskTitle.placeholder = "Add new task..."
    taskTitle.autofocus = true;

    form.appendChild(taskTitle);

    const taskDescription = document.createElement('textarea');
    taskDescription.id = "taskDescription";
    taskDescription.spellcheck = "false";
    taskDescription.placeholder = "Notes";


    form.appendChild(taskDescription);


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";

    form. appendChild(subtaskHeading);


    const subtaskUl = document.createElement('ul');
    const subtaskLi = document.createElement('li');
    const subtask = document.createElement('textarea');

    subtask.rows = "1";
    subtask.spellcheck = "false";
    subtask.classList.add('subtask');
    subtask.placeholder = "Add a new subtask";

    subtaskLi.appendChild(subtask);
    subtaskUl.appendChild(subtaskLi);
    form.appendChild(subtaskUl);


    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";

    form.appendChild(submitBtn);


    return form;
}

export { createAddTaskForm }