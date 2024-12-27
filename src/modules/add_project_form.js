import { handlers } from "./event_handlers.js";

function createAddProjectForm() {
    const form = document.createElement('form');
    form.dataset.formType = "project";
    // On submit event listener
    form.addEventListener('submit', handlers.projectSubmit);


    const projectTitle = document.createElement('textarea');
    projectTitle.rows = 1;
    projectTitle.classList.add('form-title');
    projectTitle.spellcheck = false;
    projectTitle.placeholder = "Add new project..."
    projectTitle.value = "TITLE FOR DOM NEWLY CREATED PROJECT YEIII";

    form.appendChild(projectTitle);


    const projectDescription = document.createElement('textarea');
    projectDescription.classList.add('form-description');
    projectDescription.spellcheck = false;
    projectDescription.placeholder = "description";
    projectDescription.value = "DESCRIPTION FOR DOM NEWLY PROJECT CREATED BBBBB";

    form.appendChild(projectDescription);


    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    form.appendChild(submitBtn);


    // Add text area auto height handler
    handlers.textareaAutoHeight(form);
    form.appendChild(submitBtn);


    return form;
}

export { createAddProjectForm }