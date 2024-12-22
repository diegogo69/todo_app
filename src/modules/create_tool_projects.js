function createToolProjects(projects) {
    // reference toolbar projects list
    const toolProjects = document.createElement('ul');
    
    for (let project of projects ) {
        const li = document.createElement('li');
        li.textContent = project.title;

        toolProjects.appendChild(li)
    }

    return toolProjects;
}

export { createToolProjects }

