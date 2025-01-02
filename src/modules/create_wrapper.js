import { createTasksWrapper } from "./create_tasks_wrapper.js";


function createWrapper(project) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const heading = document.createElement('header');
    const title = document.createElement('h2');
    title.textContent = project.title;

    heading.appendChild(title);
    wrapper.appendChild(heading);

    // Tasks wrapper
    const tasksWrapper = createTasksWrapper(project.tasks);

    wrapper.appendChild(tasksWrapper);

    return wrapper;

}

export { createWrapper }