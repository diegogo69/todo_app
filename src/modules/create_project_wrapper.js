import { handlers } from "./event_handlers.js";
import { createTasksWrapper } from "./create_tasks_wrapper.js";
import { TASKS } from "./tasks.js";

const SVGCircleAdd = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>';


// Create project's html module
function createProjectWrapper(project, index) {
    const projectWrapper = document.createElement('div');
    projectWrapper.classList.add('project-wrapper');
    projectWrapper.dataset.projectIndex = index;

    const heading = document.createElement('header');
    const title = document.createElement('h2');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    heading.appendChild(title);
    heading.appendChild(description);

    // Tasks wrapper
    // Array of {task, index}
    let tasks = [];
    for (let taskIndex of project.tasks) {
        // If null it has been deleted. skip
        if (taskIndex === null) { continue }
        let task = TASKS.get(taskIndex);
        tasks.push({task, taskIndex})
    }

    const tasksWrapper = createTasksWrapper(tasks);
      
    // Footer
    const footer = document.createElement('footer');
    // Footer form
    const newTaskForm = document.createElement('form');
    newTaskForm.classList.add('project-wrapper-form');
    newTaskForm.classList.add('task-form');
    newTaskForm.dataset.formType = "task";
    newTaskForm.dataset.projectIndex = index;

    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');

    // Footer form input
    const newTaskInput = document.createElement('input');
    newTaskInput.type = "text";
    newTaskInput.classList.add('form-title');
    newTaskInput.placeholder = "Add task";

    // Footer form submit button
    const newTaskBtn = document.createElement('button');
    newTaskBtn.type = "submit";
    newTaskBtn.innerHTML = SVGCircleAdd;

    // Footer form hidden project index
    const projectIndex = document.createElement('input');
    projectIndex.type = "hidden";
    projectIndex.classList.add('project-index');
    projectIndex.value = index;    
    
    formWrapper.appendChild(newTaskInput);
    formWrapper.appendChild(newTaskBtn);
    newTaskForm.appendChild(formWrapper);
    newTaskForm.appendChild(projectIndex);

    newTaskForm.addEventListener('submit', handlers.taskSubmit);

    footer.appendChild(newTaskForm);


    projectWrapper.appendChild(heading);
    projectWrapper.appendChild(tasksWrapper);
    projectWrapper.appendChild(footer);

    return projectWrapper;
}

export { createProjectWrapper }