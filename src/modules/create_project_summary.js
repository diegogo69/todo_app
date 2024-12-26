import { handlers } from "./event_handlers.js";

function createProjectSummary(project, projectIndex) {
    const form = document.createElement('form');
    form.classList.add('project-form');
    form.dataset.formType = "project";
    // On submit event listener
    form.addEventListener('submit', handlers.projectUpdate);


    const projectTitle = document.createElement('textarea');
    projectTitle.rows = 1;
    projectTitle.classList.add('form-title');
    projectTitle.spellcheck = false;
    projectTitle.placeholder = "Add new project..."
    projectTitle.value = project.title;


    form.appendChild(projectTitle);

    const projectDescription = document.createElement('textarea');
    // projectDescription.id = "projectDescription";
    projectDescription.classList.add('form-description');
    projectDescription.spellcheck = false;
    projectDescription.placeholder = "description";
    projectDescription.value = project.description;


    form.appendChild(projectDescription);

    // Project hidden index
    const projectIndexNode = document.createElement('input');
    projectIndexNode.type = 'hidden';
    projectIndexNode.classList.add('project-index');
    projectIndexNode.value = projectIndex;

    form.appendChild(projectIndexNode);


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

export { createProjectSummary }