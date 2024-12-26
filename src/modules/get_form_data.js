function getFormData(form) {
    const formType = form.dataset.formType;

    const formTitle = form.querySelector('.formTitle');
    const formDescription = form.querySelector('.formDescription');

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
        const formProjectIndex = form.querySelector('.projectIndex');
        
        let project = 0;
        // If hidden input for project Index
        if (formProjectIndex) {
            project = parseInt(formProjectIndex.value);
        }
        
        const subtasks = [];
        // If form have subtasks
        if (formSubtasks) {
            for (let subtask of formSubtasks) {
                subtasks.push(subtask.value);
                console.log("push subtask");

            }
        }

        const taskIndexNode = form.querySelector('.taskIndex')
        let taskIndex = null;
        
        if (taskIndexNode) { taskIndex = taskIndexNode.value };


        return {title, description, subtasks, project, taskIndex, };
    }

    // IF IT'S A PROJECT FORM
    if (formType === "project") {
        // const formProjectTasks = form.querySelectorAll('.projectTasks');
        
        // // Do project forms have tasks? I don't think so
        // const tasks = [];
        // for (let projectTask of formProjectTasks) {
        //     tasks.push(projectTask.value);
        //     console.log("push subproject")
        // }
        return {title, description};        
    }
}

export { getFormData }