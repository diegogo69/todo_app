import { handlers } from "./event_handlers.js";

function createAddTaskForm() {
    const form = document.createElement('form');
    form.classList.add('taskForm');
    form.id = "addTaskForm";
    form.dataset.formType = "task";
    // On submit event listener
    form.addEventListener('submit', handlers.taskSubmit);


    const taskTitle = document.createElement('textarea');
    // taskTitle.id = "taskTitle";
    // taskTitle.classList.add('taskTitleInput');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = "TITLE FOR DOM NEWLY CREATED TASK YEIII";


    form.appendChild(taskTitle);

    const taskDescription = document.createElement('textarea');
    // taskDescription.id = "taskDescription";
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

    const projectIndex = document.createElement('input');
    projectIndex.classList.add('project-index')
    projectIndex.type = "hidden";
    
    projectIndex.value = 0;

    form.appendChild(projectIndex);
    
    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createAddTaskForm }