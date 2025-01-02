import { handlers } from "./event_handlers.js";
import { createTasksWrapper } from "./create_tasks_wrapper.js";
import { TASKS } from "./tasks.js";


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
    // Array of [task, index]
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
    newTaskForm.dataset.formType = "task";
    newTaskForm.dataset.projectIndex = index;
    newTaskForm.classList.add('task-form');

    // Footer form input
    const newTaskInput = document.createElement('input');
    newTaskInput.type = "text";
    newTaskInput.classList.add('form-title');
    newTaskInput.placeholder = "Add task";

    // Footer form hidden project index
    const projectIndex = document.createElement('input');
    projectIndex.type = "hidden";
    projectIndex.classList.add('project-index');
    projectIndex.value = index;    

    // Footer form submit button
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