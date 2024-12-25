import { handlers } from "./event_handlers.js";

function createTaskWrapper(task) {
    const form = document.createElement('form');
    form.classList.add('taskForm');
    // form.id = "addTaskForm";
    form.dataset.formType = "task";
    // On submit event listener
    // form.addEventListener('submit', handlers.taskSubmit);


    const taskTitle = document.createElement('textarea');
    // taskTitle.id = "taskTitle";
    // taskTitle.classList.add('taskTitleInput');
    taskTitle.classList.add('formTitle');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = task.title


    form.appendChild(taskTitle);

    const taskDescription = document.createElement('textarea');
    // taskDescription.id = "taskDescription";
    taskDescription.classList.add('formDescription');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    taskDescription.value = task.description;

    form.appendChild(taskDescription);


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";

    form.appendChild(subtaskHeading);


    const subtaskUl = document.createElement('ul');


    for (let i = 0; i <= task.subtasks.length; i++ ) {
        const lastIteration = i === task.subtasks.length;

        const subtaskLi = document.createElement('li');
        const subtask = document.createElement('textarea');
        subtask.rows = "1";
        subtask.spellcheck = "false";
        subtask.classList.add('subtask');
        subtask.placeholder = "Add a new subtask";

        if(!lastIteration) {
            subtask.value = task.subtasks[i].title;
        }

        subtaskLi.appendChild(subtask);
        subtaskUl.appendChild(subtaskLi);
    }

    
    form.appendChild(subtaskUl);


    const projectIndex = document.createElement('input');
    projectIndex.classList.add('projectIndex')
    projectIndex.type = "hidden";
    
    projectIndex.value = task.project;

    form.appendChild(projectIndex);
    
    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createTaskWrapper }