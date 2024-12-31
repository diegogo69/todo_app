import { handlers } from "./event_handlers.js";

function createAddProjectForm() {
    const form = document.createElement('form');
    form.dataset.formType = "project";
    // On submit event listener
    form.addEventListener('submit', handlers.projectSubmit);

    let arrFormSections = [];

    const projectTitle = document.createElement('textarea');
    projectTitle.rows = 1;
    projectTitle.classList.add('form-title');
    projectTitle.spellcheck = false;
    projectTitle.placeholder = "Add new project..."
    projectTitle.value = "TITLE FOR DOM NEWLY CREATED PROJECT YEIII";

    // form.appendChild(projectTitle);
    arrFormSections.push({section: "title", controls: [projectTitle]});

    const projectDescription = document.createElement('textarea');
    projectDescription.classList.add('form-description');
    projectDescription.spellcheck = false;
    projectDescription.placeholder = "description";
    projectDescription.value = "DESCRIPTION FOR DOM NEWLY PROJECT CREATED BBBBB";

    // form.appendChild(projectDescription);
    arrFormSections.push({section: "description", controls: [projectDescription]});

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.classList.add('btn-cancel');
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener('click', handlers.clearEditorNode);

    // form.appendChild(submitBtn);
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

export { createAddProjectForm }