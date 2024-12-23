function getFormData(form, item) {

    const formTitle = form.querySelector('.formTitle');
    const formDescription = form.querySelector('.formDescription');

    // There will always be a title form control
    const title = formTitle.value || `Unnamed ${item}`;

    let description = "";
    // There may not be a description form control
    if (formDescription) {
        description = formDescription.value;
    }

    // IF IT'S A TASK FORM
    if (item === "task") {
        const formSubtasks = form.querySelectorAll('.subtask');
        const formProjectIndex = form.querySelector('#projectIndex');
        
        let projectIndex = 0;
        // If hidden input for project Index
        if (formProjectIndex) {
            projectIndex = parseInt(formProjectIndex.value);
        }
        
        const subtasks = [];
        // If form have subtasks
        if (formSubtasks) {
            for (let subtask of formSubtasks) {
                subtasks.push(subtask.value);
                log("push subtask");

            }
        }

        return {title, description, subtasks, project};
    }

    // IF IT'S A PROJECT FORM
    if (item === "project") {
        const formProjectTasks = form.querySelectorAll('.projectTasks');
        
        // Do project forms have tasks? I don't think so
        const tasks = [];
        for (let projectTask of formProjectTasks) {
            tasks.push(projectTask.value);
            log("push subproject")
        }
        return {title, description, tasks};        
    }
}

export { getFormData }