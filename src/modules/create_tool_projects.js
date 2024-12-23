import { handlers } from "./event_handlers.js";

function createToolProjects(projects) {
    // reference toolbar projects list
    const projectsUl = document.createElement('ul');
    
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.textContent = projects[i].title;
        li.dataset.projectIndex = i;

        projectsUl.appendChild(li)
    }

    projectsUl.addEventListener('click', handlers.toolProject)

    return projectsUl;
}

export { createToolProjects }

