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

    let arrFormControls = [];

    const taskTitle = document.createElement('textarea');
    taskTitle.classList.add('form-title');
    taskTitle.rows = 1;
    taskTitle.spellcheck = false;
    taskTitle.placeholder = "Add new task..."
    taskTitle.value = "TITLE FOR DOM NEWLY CREATED TASK YEIII";

    // form.appendChild(taskTitle);
    arrFormControls.push([taskTitle]);


    const taskDescription = document.createElement('textarea');
    taskDescription.classList.add('form-description');
    taskDescription.spellcheck = false;
    taskDescription.placeholder = "Notes";
    taskDescription.value = "DESCRIPTION FOR DOM NEWLY TASK CREATED BBBBB";

    // form.appendChild(taskDescription);
    arrFormControls.push([taskDescription]);


    const subtaskHeading = document.createElement('h4');
    subtaskHeading.textContent = "Subtasks";
    
    const subtaskUl = document.createElement('ul');
    const subtaskLi = document.createElement('li');
    const subtask = document.createElement('textarea');

    subtask.rows = "1";
    subtask.spellcheck = "false";
    subtask.classList.add('subtask');
    subtask.placeholder = "Add a new subtask";
    subtask.value = "DOM NEWLY CREATED TASK YEIII";
    
    // form.appendChild(subtaskHeading);
    subtaskLi.appendChild(subtask);
    subtaskUl.appendChild(subtaskLi);
    // form.appendChild(subtaskUl);
    arrFormControls.push([subtaskHeading, subtaskUl]);


    // DATE
    const dateLabel = document.createElement('label');
    dateLabel.for = "dateControl"
    dateLabel.textContent = "Due date:"

    const dateControl = document.createElement('input');
    dateControl.type = "date";
    const today = format(new Date(), "yyyy-MM-dd");
    // dateControl.min = today;
    dateControl.value = today;

    arrFormControls.push([dateLabel, dateControl]);


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
        priLabel.for = priority.text;
        priLabel.textContent = priority.text;
        
        let priRadio = document.createElement('input');
        priRadio.type = "radio";
        priRadio.id = priority.text;
        priRadio.value = priority.val;

        priLi.appendChild(priRadio);
        priLi.appendChild(priLabel);
        priUl.appendChild(priLi);
    }
    fieldset.appendChild(priUl);
    arrFormControls.push([fieldset]);


    // PROJECTS LIST
    const selLabel = document.createElement('label');
    selLabel.for = "projects-select";
    selLabel.textContent = "Select project";
    const select = document.createElement('select');
    select.id = "projects-select";

    for (let i = 0; i < projects.length; i++) {
        let opt = document.createElement('option');
        // Project index
        opt.value = i;
        opt.textContent = projects[i].title;

        if (i === 0) { opt.selected = true }

        select.appendChild(opt);
    }

    arrFormControls.push([selLabel, select])



    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    // form.appendChild(submitBtn);
    arrFormControls.push([submitBtn]);

    
    for (let control of arrFormControls) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('control-wrapper');

        for (let el of control) {
            wrapper.appendChild(el);
        }
        
        form.appendChild(wrapper);
    }

    // Add text area auto height handler
    handlers.textareaAutoHeight(form);


    return form;
}

export { createAddTaskForm }