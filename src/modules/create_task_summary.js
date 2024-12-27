import { handlers } from "./event_handlers.js";

function createTaskSummary(task, taskIndex) {
    const form = document.createElement('form');
    form.classList.add('task-form');
    form.dataset.formType = "task";
    form.dataset.taskIndex = taskIndex;
    form.dataset.projectIndex = task.project;
    // On submit event listener
    form.addEventListener('submit', handlers.taskUpdate);


    const taskTitle = document.createElement('textarea');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = task.title


    form.appendChild(taskTitle);

    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('form-description');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    taskDescription.value = task.description;

    form.appendChild(taskDescription);


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";

    form.appendChild(subtaskHeading);


    const subtaskUl = document.createElement('ul');

    for (let i = 0; i <= task.subtasks.length; i++ ) {
        const lastIteration = (i === task.subtasks.length);

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
        

    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(submitBtn);

    
    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createTaskSummary }