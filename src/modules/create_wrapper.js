import { handlers } from "./event_handlers.js";

const SVGTaskCompleted = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked-circle</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

function createWrapper(project) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const heading = document.createElement('header');
    const title = document.createElement('h2');
    title.textContent = project.title;

    heading.appendChild(title);
    wrapper.appendChild(heading);

    const tasksWrapper = document.createElement('div');
    tasksWrapper.classList.add('tasks-wrapper');
    const tasksUl = document.createElement('ul');

    
    for (let task of project.tasks) {
        const taskLi = document.createElement('li');
        taskLi.dataset.taskIndex = project.tasks.indexOf(task);
        taskLi.dataset.projectIndex = task.project;
        taskLi.classList.add('task-item');

        taskLi.addEventListener('click', handlers.displayTaskSummary);

        // Task title
        const taskTitle = document.createElement('p');
        taskTitle.textContent = task.title;
        
        // Task completed icon
        const iconComplete = document.createElement('div');
        iconComplete.classList.add('icon', 'task-completed');

        if (task.completed) {
            taskLi.classList.add('completed');
            iconComplete.innerHTML = SVGTaskCompleted;
        } else {
            iconComplete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
        }
        iconComplete.addEventListener('click', handlers.taskCompleted);
        
        // // Task delete icon
        // const iconRemove = document.createElement('div');
        // iconRemove.classList.add('icon', 'task-remove');
        // iconRemove.innerHTML = SVGRemove;
        // iconRemove.addEventListener('click', handlers.taskRemove);


        taskLi.appendChild(iconComplete);
        taskLi.appendChild(taskTitle);
        // taskLi.appendChild(iconRemove);
        tasksUl.appendChild(taskLi);
    }

    tasksWrapper.appendChild(tasksUl);
    wrapper.appendChild(tasksWrapper);

    return wrapper;

}

export { createWrapper }