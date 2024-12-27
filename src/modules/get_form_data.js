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
        const formSubtasks = form.querySelectorAll('.subtask');
        
        const subtasks = [];
        // If form have subtasks
        if (formSubtasks) {
            for (let subtask of formSubtasks) {
                subtasks.push(subtask.value);
                console.log("push subtask");
            }
        }

        // Project index
        const project = form.dataset.projectIndex;
        const taskIndex = form.dataset.taskIndex;
        
        return {title, description, subtasks, project, taskIndex, };
    }

    // IF IT'S A PROJECT FORM
    if (formType === "project") {
        let projectIndex = form.dataset.projectIndex;
        
        return {title, description, projectIndex};        
    }
}

export { getFormData }