import { handlers } from "./event_handlers.js";

function createTaskSummary(task, taskIndex, projects) {
    const form = document.createElement('form');
    form.classList.add('task-form');
    form.dataset.formType = "task";
    form.dataset.taskIndex = taskIndex;
    form.dataset.projectIndex = task.project;
    // On submit event listener
    form.addEventListener('submit', handlers.taskUpdate);
    // Form sections arr. later to be added in wrapppers
    let arrFormSections = [];


    const taskTitle = document.createElement('textarea');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = task.title

    // form.appendChild(taskTitle);
    arrFormSections.push([taskTitle]);


    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('form-description');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    taskDescription.value = task.description;

    // form.appendChild(taskDescription);
    arrFormSections.push([taskDescription]);



    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";

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

    // form.appendChild(subtaskUl);
    arrFormSections.push([subtaskHeading, subtaskUl]);
        

    // DATE
    const dateLabel = document.createElement('label');
    dateLabel.for = "dateControl"
    dateLabel.textContent = "Due date:"

    const dateControl = document.createElement('input');
    dateControl.classList.add('task-due-date');
    dateControl.type = "date";
    dateControl.value = task.dueDate;

    arrFormSections.push([dateLabel, dateControl]);


    // PRIORITY
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = "Priority";

    fieldset.appendChild(legend);

    const priUl = document.createElement('ul');
    const priorityVal = [
        {text: "Low", val: 1,},
        {text: "Normal", val: 2,},
        {text: "High", val: 3,},
    ]

    for (let priority of priorityVal) {
        let priLi = document.createElement('li');

        let priLabel = document.createElement('label');
        // priLabel.for = priority.text;
        priLabel.setAttribute('for', priority.text);
        priLabel.textContent = priority.text;
        
        let priRadio = document.createElement('input');
        priRadio.type = "radio";
        priRadio.id = priority.text;
        priRadio.value = priority.val;
        priRadio.name = "priority";

        if (priority.val == task.priority) { priRadio.checked = true }

        priLi.appendChild(priRadio);
        priLi.appendChild(priLabel);
        priUl.appendChild(priLi);
    }
    fieldset.appendChild(priUl);
    arrFormSections.push([fieldset]);


    // PROJECTS LIST
    const selLabel = document.createElement('label');
    selLabel.for = "projects-select";
    selLabel.textContent = "Select project";
    const select = document.createElement('select');
    select.classList.add('task-project');
    select.id = "projects-select";

    for (let i = 0; i < projects.length; i++) {
        let opt = document.createElement('option');
        // Project index
        opt.value = i;
        opt.textContent = projects[i].title;

        if (i === task.project) { opt.selected = true }

        select.appendChild(opt);
    }

    arrFormSections.push([selLabel, select])


    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Save";

    // form.appendChild(submitBtn);
    arrFormSections.push([submitBtn]);


    // Create wrappers for form section
    for (let section of arrFormSections) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('control-wrapper');

        for (let control of section) {
            wrapper.appendChild(control);
        }
        
        form.appendChild(wrapper);
    }

    
    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createTaskSummary }