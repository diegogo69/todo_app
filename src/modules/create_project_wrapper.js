import { handlers } from "./event_handlers.js";

// Create project's html module
function createProjectWrapper(project, index) {
    const projectWrapper = document.createElement('div');
    projectWrapper.classList.add('project-wrapper');
    projectWrapper.dataset.projectIndex = index;

    const heading = document.createElement('heading');
    const title = document.createElement('h2');
    title.classList.add('taskTitleInput')
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    heading.appendChild(title);
    heading.appendChild(description);


    const tasksWrapper = document.createElement('div');
    tasksWrapper.classList.add('tasks-wrapper');
    const tasksUl = document.createElement('ul');

    for (let task of project.tasks) {
        const taskLi = document.createElement('li');
        taskLi.dataset.taskProjectIndex = project.tasks.indexOf(task);
        taskLi.classList.add('task-item');

        taskLi.addEventListener('click', handlers.displayTaskWrapper);

        
        const icon = document.createElement('div');
        icon.classList.add('icon', 'taskCompleted');

        if (task.completed) {
            taskLi.classList.add('completed');
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked-circle</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
        } else {
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
        }
        icon.addEventListener('click', handlers.taskCompleted);
        taskLi.appendChild(icon);
        
        const taskTitle = document.createElement('p');
        taskTitle.textContent = task.title;

        taskLi.appendChild(taskTitle);
        tasksUl.appendChild(taskLi);
    }

    tasksWrapper.appendChild(tasksUl);


    const footer = document.createElement('footer');

    const newTaskForm = document.createElement('form');
    newTaskForm.dataset.formType = "task";
    newTaskForm.id = "newTaskForm";
    newTaskForm.classList.add('taskForm');

    const newTaskInput = document.createElement('input');
    newTaskInput.type = "text";
    newTaskInput.classList.add('formTitle');
    newTaskInput.placeholder = "Add task";

    const projectIndex = document.createElement('input');
    projectIndex.type = "hidden";
    projectIndex.classList.add('projectIndex');
    projectIndex.value = index;    

    const newTaskBtn = document.createElement('button');
    newTaskBtn.type = "submit";
    newTaskBtn.textContent = "+";
    
    newTaskForm.appendChild(newTaskInput);
    newTaskForm.appendChild(projectIndex);
    newTaskForm.appendChild(newTaskBtn);

    newTaskForm.addEventListener('submit', handlers.taskSubmit);


    footer.appendChild(newTaskForm);


    projectWrapper.appendChild(heading);
    projectWrapper.appendChild(tasksWrapper);
    projectWrapper.appendChild(footer);

    return projectWrapper;
}

export { createProjectWrapper }