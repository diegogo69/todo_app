function createToolProjects(projects) {
    // reference toolbar projects list
    const toolProjects = document.createElement('ul');
    
    for (let i = 0; i < projects.length; i++) {
        const li = document.createElement('li');
        li.textContent = projects[i].title;
        li.dataset.projectIndex = i;

        toolProjects.appendChild(li)
    }
    // for (let project of projects ) {
    // }

    return toolProjects;
}

export { createToolProjects }

