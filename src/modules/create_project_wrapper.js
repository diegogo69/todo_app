import { handlers } from "./event_handlers.js";

// Create project's html module
function createProjectWrapper(project, index) {
    const projectWrapper = document.createElement('div');
    projectWrapper.classList.add('project-wrapper');

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