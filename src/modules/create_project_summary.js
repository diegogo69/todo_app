import { handlers } from "./event_handlers.js";


function createProjectSummary(project, projectIndex) {
    const form = document.createElement('form');
    form.classList.add('project-form');
    form.dataset.formType = "project";
    form.dataset.projectIndex = projectIndex;
    // On submit event listener
    form.addEventListener('submit', handlers.projectUpdate);

    let arrFormSections = [];

    const projectTitle = document.createElement('textarea');
    projectTitle.rows = 1;
    projectTitle.classList.add('form-title');
    projectTitle.spellcheck = false;
    projectTitle.placeholder = "Add new project";
    projectTitle.value = project.title;

    // form.appendChild(projectTitle);
    arrFormSections.push({section: "title", controls: [projectTitle]});

    const projectDescription = document.createElement('textarea');
    projectDescription.classList.add('form-description');
    projectDescription.spellcheck = false;
    projectDescription.placeholder = "Notes";
    projectDescription.value = project.description;

    // form.appendChild(projectDescription);
    arrFormSections.push({section: "description", controls: [projectDescription]});

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn-submit');
    submitBtn.type = "submit";
    submitBtn.textContent = "Save";

    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.classList.add('btn-cancel');
    cancelBtn.textContent = "Close";
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

export { createProjectSummary }