import { handlers } from "./event_handlers.js";

const SVGRemove = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>';
const SVGTaskCompleted = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked-circle</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';

const priority = [null, "Normal", "Important", "Urgent"];

function createTasksWrapper(tasks) {
    const tasksWrapper = document.createElement('div');
    tasksWrapper.classList.add('tasks-wrapper');
    const tasksUl = document.createElement('ul');

    // tasks is an array of {task, taskIndex} obj items
    for (let item of tasks) {
        // Actual Task instance
        let task = item.task;
        const taskLi = document.createElement('li');
        // Task instance index within TASKS arr
        taskLi.dataset.taskIndex = item.taskIndex;
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
        
        // Task delete icon
        const iconRemove = document.createElement('div');
        iconRemove.classList.add('icon', 'task-remove');
        iconRemove.innerHTML = SVGRemove;
        iconRemove.addEventListener('click', handlers.taskRemove);

        // DATE
        const dueDate = document.createElement('span');
        dueDate.classList.add('task-due-date');
        dueDate.textContent = task.dueDate;

        // PRIORITY
        const taskPriority = document.createElement('span');
        taskPriority.classList.add('task-priority');
        taskPriority.classList.add(priority[task.priority]);
        taskPriority.textContent = priority[task.priority];

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');

        const detailsWrapper = document.createElement('div');
        detailsWrapper.classList.add('details-wrapper');

        taskLi.appendChild(iconComplete);
        contentWrapper.appendChild(taskTitle);
        detailsWrapper.appendChild(dueDate);
        detailsWrapper.appendChild(taskPriority);
        contentWrapper.appendChild(detailsWrapper);
        taskLi.appendChild(contentWrapper);
        taskLi.appendChild(iconRemove);
        tasksUl.appendChild(taskLi);
    }

    tasksWrapper.appendChild(tasksUl);

    return tasksWrapper;
}

export { createTasksWrapper }