const handlers = ( function() {

    // Event handling functions
    function projectSubmit(event) {
        event.preventDefault();

        log("Project submit handler works fine");
        log("LOG EVENT: ");
        log(event.target); // Form node
        log("it works")

        // Retrieve data from form
        const taskData = getProjectFormData(); // {title, description, tasks}
        // Create project instance
        const newProject = Project.newProject( taskData )
        // Use PROJECTS.Projects instead
        PROJECTS.add(newProject);
        log('Project added succesfully to projects array');
        // Reasign new projects array in localStorage
        projectsToLocalStorage();   
        // Render projects in toolbar
        renders.toolProjects(PROJECTS.get());
    }


    function toolProject(event) {
        const projectIndex = event.target.dataset.projectIndex;
        if (!projectIndex) { return }

        // if (event.target.matches('li')) {
        log("EVENT CLICK ON PROJECT LIST")
        const project = PROJECTS.get()[+projectIndex];
        const projectWrapper = createProjectWrapper(project, projectIndex);

        const taskForm = projectWrapper.querySelector('.taskForm');
        taskForm.addEventListener('submit', taskSubmit);
        renders.projectWrapper(projectWrapper);
    }


    // TASK SUBMIT FUNCTION HANDLER
    function taskSubmit(event) {
        event.preventDefault();
        // Testing logs
        log("Task submit handler works fine");
        log("LOG EVENT: ");
        log(event.target); // Form node
        log("it works")
        // Extract form data
        const taskData = getTaskFormData(this); // {title, description, subtasks, project}
        // Create task 
        const newTask = Task.newTask( taskData );
        // Add new task to default project
        addTaskToProject(newTask, newTask.project);
        // Assign PROJECTS array to localStorage 
        projectsToLocalStorage();

        updateProjectWrapper(taskData.project)
    }

    // ENTER key pressed event handler. Do something or nothing on press
    // callback function for testing on enter key event
    function sayHello() { log("HELLOOOOOOO") }

    function enterKeyPressed(event, fn) {
        // If the user presses the "Enter" key on the keyboard
        const enterPressed = (event.key === "Enter");
        const shiftEnterPressed = (event.shiftKey && event.key === 'Enter');

        // ignore shift + enter or any other non enter key
        if (!enterPressed || shiftEnterPressed) { return }

        // Cancel the default action, if needed
        event.preventDefault();
        // Lose focus
        event.target.blur();
        // Execute callback function
        fn();
    }

    // Text area dynamic height
    function textareaAutoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
    
    function textareaAutoHeight(form) {
        const textareas = form.querySelector('textarea');
        for (let textarea in textareas) {
            textarea.addEventListener('input', textareaAutoResize);
            textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello))
        }
    }

    return {
        projectSubmit, toolProject, taskSubmit,
        textareaAutoHeight
    }
} )();

export { handlers }
