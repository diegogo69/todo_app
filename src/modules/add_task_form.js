import { handlers } from "./event_handlers.js";

DEFAULT_PROJECT = 0;

function createAddTaskForm() {
    const form = document.createElement('form');
    form.classList.add('task-form');
    form.dataset.formType = "task";
    form.dataset.projectIndex = DEFAULT_PROJECT;
    // On submit event listener
    form.addEventListener('submit', handlers.taskSubmit);


    const taskTitle = document.createElement('textarea');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = "TITLE FOR DOM NEWLY CREATED TASK YEIII";

    form.appendChild(taskTitle);


    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('form-description');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    taskDescription.value = "DESCRIPTION FOR DOM NEWLY TASK CREATED BBBBB";

    form.appendChild(taskDescription);


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";

    form.appendChild(subtaskHeading);


    const subtaskUl = document.createElement('ul');
    const subtaskLi = document.createElement('li');
    const subtask = document.createElement('textarea');

    subtask.rows = "1";
    subtask.spellcheck = "false";
    subtask.classList.add('subtask');
    subtask.placeholder = "Add a new subtask";
    subtask.value = "DOM NEWLY CREATED TASK YEIII";

    subtaskLi.appendChild(subtask);
    subtaskUl.appendChild(subtaskLi);
    form.appendChild(subtaskUl);


    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(submitBtn);
    
    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createAddTaskForm }