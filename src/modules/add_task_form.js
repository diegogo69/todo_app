import { handlers } from "./event_handlers.js";
import { format } from "date-fns";

const DEFAULT_PROJECT = 0;

function createAddTaskForm(projects) {
    const form = document.createElement('form');
    form.classList.add('task-form');
    form.dataset.formType = "task";
    form.dataset.projectIndex = DEFAULT_PROJECT;
    // On submit event listener
    form.addEventListener('submit', handlers.taskSubmit);    
    // Form sections arr. later to be added in wrapppers
    let arrFormSections = [];

    const taskTitle = document.createElement('textarea');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add a task title";
    // taskTitle.value = "TITLE FOR DOM NEWLY CREATED TASK YEIII";

    arrFormSections.push({section: "title", controls: [taskTitle]});


    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('form-description');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    // taskDescription.value = "DESCRIPTION FOR DOM NEWLY TASK CREATED BBBBB";

    arrFormSections.push({section: "description", controls: [taskDescription]});


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks:";
    
    const subtaskUl = document.createElement('ul');
    const subtaskLi = document.createElement('li');
    const subtask = document.createElement('textarea');

    subtask.rows = "1";
    subtask.spellcheck = "false";
    subtask.classList.add('subtask');
    subtask.classList.add('subtask-add');
    subtask.placeholder = "Add a new subtask";
    
    subtaskLi.appendChild(subtask);
    subtaskUl.appendChild(subtaskLi);
    arrFormSections.push({section: "subtasks", controls: [subtaskHeading, subtaskUl]});


    // DATE
    const dateLabel = document.createElement('label');
    dateLabel.for = "dateControl"
    dateLabel.textContent = "Due date:"

    const dateControl = document.createElement('input');
    dateControl.classList.add('task-due-date');
    dateControl.type = "date";
    const today = format(new Date(), "yyyy-MM-dd");
    dateControl.min = today;
    dateControl.value = today;

    arrFormSections.push({section: "due-date", controls: [dateLabel, dateControl]});


    // PRIORITY
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = "Priority";

    fieldset.appendChild(legend);

    const priUl = document.createElement('ul');
    const priorityVal = [
        {text: "Normal", val: 1,},
        {text: "Important", val: 2,},
        {text: "Urgent", val: 3,},
    ]

    for (let priority of priorityVal) {
        let priLi = document.createElement('li');
        priLi.classList.add(priority.text);

        let priLabel = document.createElement('label');
        priLabel.setAttribute('for', priority.text);
        priLabel.textContent = priority.text;
        
        let priRadio = document.createElement('input');
        priRadio.type = "radio";
        priRadio.id = priority.text;
        priRadio.value = priority.val;
        priRadio.name = "priority";

        if (priority.text === "Normal") { priRadio.checked = true }

        priLi.appendChild(priRadio);
        priLi.appendChild(priLabel);
        priUl.appendChild(priLi);
    }
    fieldset.appendChild(priUl);
    arrFormSections.push({section: "priority", controls: [fieldset]});


    // PROJECTS LIST
    const selLabel = document.createElement('label');
    selLabel.for = "projects-select";
    selLabel.textContent = "Select project";
    const select = document.createElement('select');
    select.classList.add('task-project-select');
    select.id = "projects-select";

    for (let i = 0; i < projects.length; i++) {
        let opt = document.createElement('option');
        // Project index
        opt.value = i;
        opt.textContent = projects[i].title;

        if (i === 0) { opt.selected = true }

        select.appendChild(opt);
    }

    arrFormSections.push({section: "project-select", controls: [selLabel, select]})


    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn-submit');
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.classList.add('btn-cancel');
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener('click', handlers.clearEditorNode);

    arrFormSections.push({section: "buttons", controls: [submitBtn, cancelBtn]});

    // Create wrappers for form section
    for (let item of arrFormSections) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('control-wrapper');
        wrapper.classList.add(`section-${item.section}`)

        for (let control of item.controls) {
            wrapper.appendChild(control);
        }
        
        form.appendChild(wrapper);
    }

    // Add text area auto height handler
    handlers.textareaAutoHeight(form);

    return form;
}

export { createAddTaskForm }