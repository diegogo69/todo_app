import { PROJECTS } from "./projects.js";
import { getFormData } from "./get_form_data";
import { projectsToLocalStorage } from "./local_storage_handlers.js";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { createProjectWrapper } from "./create_project_wrapper.js";
import { domRender } from "./domRender.js";
import { createToolProjects } from "./create_tool_projects.js";

const handlers = ( function() {

    // Event handling functions
    function projectSubmit(event) {
        event.preventDefault();

        console.log("Project submit handler works fine");
        console.log("LOG EVENT: ");
        console.log(event.target); // Form node
        console.log("it works")

        // Retrieve data from form
        const projectData = getFormData(this); // {title, description }
        // Create project instance
        const newProject = Project.newProject( projectData )
        // Use PROJECTS.Projects instead
        PROJECTS.add(newProject);
        console.log('Project added succesfully to projects array');
        // Reasign new projects array in localStorage
        projectsToLocalStorage();   
        // Render projects in toolbar
        const toolProjects = createToolProjects(PROJECTS.get());
        domRender.toolProjects(toolProjects);
        displayProjectWrapper(newProject);
    }


    function toolProject(event) {
        const projectIndex = event.target.dataset.projectIndex;
        if (!projectIndex) { return }

        // if (event.target.matches('li')) {
        console.log("EVENT CLICK ON PROJECT LIST")
        displayProjectWrapper(projectIndex);
    }


    // TASK SUBMIT FUNCTION HANDLER
    function taskSubmit(event) {
        event.preventDefault();
        // Testing logs
        console.log("Task submit handler works fine");
        console.log("LOG EVENT: ");
        console.log(event.target); // Form node
        console.log("it works")
        // Extract form data
        const taskData = getFormData(this); // {title, description, subtasks, project}
        // Create task 
        const newTask = Task.newTask( taskData );
        // Add new task to default project
        PROJECTS.addTaskToProject(newTask, newTask.project);
        // Assign PROJECTS array to localStorage 
        projectsToLocalStorage();

        displayProjectWrapper(taskData.project);
    }

    // ENTER key pressed event handler. Do something or nothing on press
    // callback function for testing on enter key event
    function sayHello() { console.log("HELLOOOOOOO") }

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


    // Update the projects shown in the toolbar
    function displayProjectWrapper(project) {
        // project might be an index or a Project obj
        const isProjectObj = project instanceof Project;
        let projectIndex;
        
        // If arg is not a project obj. but an index
        if (isProjectObj) {
            // reassign variable from index to respective project obj
            projectIndex = PROJECTS.indexOf(project);
        }
        
        else {
            projectIndex = project;
            project = PROJECTS.get()[projectIndex];
        }
        
        const projectWrapper = createProjectWrapper(project, projectIndex);
        domRender.projectWrapper(projectWrapper);
    }

    // Text area dynamic height
    function textareaAutoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
    
    function textareaAutoHeight(form) {
        const textareas = form.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', textareaAutoResize);
            textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello))            
        });
    }

    return {
        projectSubmit, toolProject, taskSubmit,
        textareaAutoHeight
    }
} )();

export { handlers }
