import { handlers } from "./event_handlers.js";

const SVGRemove = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>';

function createToolProjects(projects) {
    // reference toolbar projects list
    const projectsUl = document.createElement('ul');
    
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.classList.add('project-item');
        li.dataset.projectIndex = i;

        const icon = document.createElement('div');
        icon.classList.add('icon');
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sticker-text-outline</title><path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M20.1 15H18.6C16.7 15 15.1 16.6 15.1 18.5V20H5.8C4.8 20 4 19.2 4 18.2V5.8C4 4.8 4.8 4 5.8 4H18.3C19.3 4 20.1 4.8 20.1 5.8V15M7 7H17V9H7V7M7 11H17V13H7V11M7 15H13V17H7V15Z" /></svg>';
        li.appendChild(icon);

        const p = document.createElement('p');
        p.textContent = projects[i].title;
        li.appendChild(p);

        // Task delete icon. Not on default project
        if (i > 0) {
            const iconRemove = document.createElement('div');
            iconRemove.classList.add('icon', 'project-remove');
    
            iconRemove.innerHTML = SVGRemove;
            iconRemove.addEventListener('click', handlers.projectRemove);
            li.appendChild(iconRemove);
        }    

        projectsUl.appendChild(li)
    }

    projectsUl.addEventListener('click', handlers.toolProject)

    return projectsUl;
}

export { createToolProjects }

