function createAddProjectForm() {
    const form = document.createElement('form');
    form.id = "addProjectForm";


    const projectTitle = document.createElement('textarea');
    projectTitle.id = "projectTitle";
    projectTitle.spellcheck = false;
    projectTitle.placeholder = "Add new project..."
    projectTitle.autofocus = true;
    projectTitle.value = "TITLE FOR DOM NEWLY CREATED PROJECT YEIII";


    form.appendChild(projectTitle);

    const projectDescription = document.createElement('textarea');
    projectDescription.id = "projectDescription";
    projectDescription.spellcheck = false;
    projectDescription.placeholder = "description";
    projectDescription.value = "DESCRIPTION FOR DOM NEWLY PROJECT CREATED BBBBB";



    form.appendChild(projectDescription);


    const projectTasksHeading = document.createElement('h4');
    projectTasksHeading.textContent = "Tasks";

    form. appendChild(projectTasksHeading);


    const projectTasksUl = document.createElement('ul');
    const projectTasksLi = document.createElement('li');
    const projectTasks = document.createElement('textarea');

    projectTasks.rows = "1";
    projectTasks.spellcheck = "false";
    projectTasks.classList.add('projectTasks');
    projectTasks.placeholder = "Add a new projectTasks";
    projectTasks.value = "DOM NEWLY CREATED PROJECT TASKK YEIII";

    projectTasksLi.appendChild(projectTasks);
    projectTasksUl.appendChild(projectTasksLi);
    form.appendChild(projectTasksUl);


    const submitBtn = document.createElement('button');
    submitBtn.id = "submitBtn"
    submitBtn.type = "submit";
    submitBtn.textContent = "Add";


    form.appendChild(submitBtn);


    return form;
}

export { createAddProjectForm }