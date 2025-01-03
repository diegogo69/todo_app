import { format } from "date-fns";

function getFormData(form) {
    const formType = form.dataset.formType;

    const formTitle = form.querySelector('.form-title');
    const formDescription = form.querySelector('.form-description');

    // There will always be a title form control
    const title = formTitle.value || `Unnamed ${formType}`;

    let description = "";
    // There may not be a description form control
    if (formDescription) {
        description = formDescription.value;
    }

    // IF IT'S A TASK FORM
    if (formType === "task") {
        // SUBTASKS
        const formSubtasks = form.querySelectorAll('.subtask');
        const subtasks = [];
        // If form have subtasks
        if (formSubtasks) {
            for (let subtask of formSubtasks) {
                if (subtask.classList.contains('subtask-add')) {
                    continue;
                }
                subtasks.push(subtask.value);
                console.log("push subtask");
            }
        }


        // DATE
        let dueDate = format(new Date(), "yyyy-MM-dd");
        const taskDate = form.querySelector('.task-due-date');
        if (taskDate) { dueDate = taskDate.value; }


        // PRIORITY
        let priority = 1;
        const taskPriority = form.querySelector('input[type="radio"]:checked');
        if (taskPriority) { priority = taskPriority.value; }


        // PROJECT INDEX
        let project;
        const taskProjectSelect = document.querySelector('.task-project-select');
        
        if (taskProjectSelect) { project = taskProjectSelect.value; }
        else { project = form.dataset.projectIndex; }

        const taskIndex = form.dataset.taskIndex;
        
        return {title, description, subtasks, dueDate, priority, project, taskIndex, };
    }

    // IF IT'S A PROJECT FORM
    if (formType === "project") {
        let projectIndex = form.dataset.projectIndex;
        
        return {title, description, projectIndex};        
    }
}

export { getFormData }