import { todoLocalstorage } from "./local_storage_handler.js";
import { PROJECTS } from "./projects.js";
import { TASKS } from "./tasks";
import { Task } from "./task.js";
import { Project } from "./project.js";
import { createProjectWrapper } from "./create_project_wrapper.js";
import { createToolProjects } from "./create_tool_projects.js";
import { createTaskSummary } from "./create_task_summary.js";
import { createProjectSummary } from "./create_project_summary.js";
import { createWrapper } from "./create_wrapper.js";
import { createAddTaskForm  } from "./add_task_form.js";
import { createAddProjectForm  } from "./add_project_form.js";
import { getFormData } from "./get_form_data";
import { domRender } from "./domRender.js";

const SVGTaskCompleted = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked-circle</title><path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';
const SVGTaskUncompleted = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';


const handlers = ( function() {

    // Event handling functions
    function projectSubmit(event) {
        event.preventDefault();

        console.log("Project submit handler works fine");

        // Retrieve data from form
        const projectData = getFormData(this); // {title, description }
        // Empty form
        this.reset();
        // Create project instance
        const newProject = Project.newProject( projectData )
        PROJECTS.add(newProject);
        console.log('Project added succesfully to projects array');
        // Reasign new projects array in localStorage
        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks(); 
        // Render projects in toolbar
        const toolProjects = createToolProjects(PROJECTS.get());
        domRender.toolProjects(toolProjects);
        domRender.clear.editorNode();
        displayProjectWrapper(newProject);
    }
    

    // Edit project data
    function projectUpdate(event) {
        event.preventDefault();

        // Testing logs
        console.log("Task update handler works fine");

        const projectData = getFormData(this);

        const project = PROJECTS.get(projectData.projectIndex);
        // if project dont exists do nothing
        if (project === null) { return }
        project.updateData(projectData);
        console.log(`Project data update succesfully`);

        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();
        displayProjectWrapper(project);
        const toolProjects = createToolProjects(PROJECTS.get());
        domRender.toolProjects(toolProjects);
    }


    // REMOVE Project
    function projectRemove(event) {
        const icon = event.currentTarget;
        
        const projectEl = this.closest('.project-item');
        const projectIndex = projectEl.dataset.projectIndex;

        if (projectIndex == 0) { 
            console.log('Cannot remove default project')
            return
        }
        // Reference Project
        const project = PROJECTS.get(projectIndex);

        // Delete tasks that belongs to project as well
        for (let taskIndex of project.tasks) {
            let task = TASKS.get(taskIndex);
            TASKS.remove(task);
        }
        PROJECTS.remove(project);
        console.log('Project removed succesfully')

        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();
        // displayProjectWrapper(project);
        const toolProjects = createToolProjects(PROJECTS.get());
        domRender.toolProjects(toolProjects);
        domRender.clear.generalNode();

    }


    // TASK SUBMIT FUNCTION HANDLER
    function taskSubmit(event) {
        event.preventDefault();
        // Testing logs
        console.log("Task submit handler works fine");
        // Extract form data
        const taskData = getFormData(this); // {title, description, subtasks, project}
        // Empty form
        this.reset();
        // Create task 
        const newTask = Task.newTask( taskData );
        // Add task to tasks array handler. Store it's index
        const newTaskIndex = TASKS.add(newTask);
        console.log(`New task added to TASKS array on index ${newTaskIndex}`);

        // Add new task to default project
        const project = PROJECTS.get(newTask.project);
        project.addTask(newTaskIndex);
        // Assign PROJECTS array to localStorage 
        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();
        clearEditorNode();

        displayProjectWrapper(taskData.project);
    }


    // TASK SUBMIT FUNCTION HANDLER
    function taskUpdate(event) {
        event.preventDefault();
        // Testing logs
        console.log("Task update handler works fine");
        // Extract form data
        const taskData = getFormData(this); // {title, description, subtasks, project}
        // Empty form

        // Reference task from tasks arr via taskIndex
        const task = TASKS.get(taskData.taskIndex);
        // Update task data
        task.updateData(taskData);
        console.log(`Task data update succesfully`);

        // Update local storage
        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();

        displayProjectWrapper(taskData.project);
    }


    // REMOVE TASK
    function taskRemove(event) {
        const icon = event.currentTarget;
        const taskLi = icon.closest('.task-item');
        const taskIndex = taskLi.dataset.taskIndex;
        
        const task = TASKS.get(taskIndex);
        const projectIndex = task.project;
        const project = PROJECTS.get(projectIndex);

        // Remove from project. tasks in project are numeric indices
        project.removeTask(taskIndex);
        TASKS.remove(task);

        // Update local storage
        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();
        // Remove task item node from wrapper
        taskLi.parentNode.removeChild(taskLi)
    }


    function taskCompleted(event) {
        // Completed icon
        const icon = event.currentTarget;
        
        // get index in TASKS from task el
        const taskLi = icon.closest('.task-item');
        const taskIndex = taskLi.dataset.taskIndex;

        // Mark complete
        const task = TASKS.get(taskIndex);

        const completed = task.setComplete()

        if (completed) {
            taskLi.classList.add('completed');
            icon.innerHTML = SVGTaskCompleted;
        } else {
            taskLi.classList.remove('completed');
            icon.innerHTML = SVGTaskUncompleted;
        }

        // Update local storage
        todoLocalstorage.update.projects();
        todoLocalstorage.update.tasks();
    }

    function allTasks(event) {
        const allTasks = TASKS.get();

        let tasks = [];
        for (let task of allTasks) {
            let taskIndex = TASKS.indexOf(task);
            tasks.push({task, taskIndex})
        }

        const allTasksWrapper = createWrapper({title: "All tasks", tasks});
        domRender.projectWrapper(allTasksWrapper);
        console.log('All tasks shown')
    }

    function tasksCompleted(event) {
        const allTasks = TASKS.getCompleted();
        console.log('TASKS COMPLETED');
        console.log(allTasks);

        let tasks = [];
        for (let task of allTasks) {
            let taskIndex = TASKS.indexOf(task);
            tasks.push({task, taskIndex})
        }

        const allTasksWrapper = createWrapper({title: "Tasks completed", tasks});
        domRender.projectWrapper(allTasksWrapper);
        console.log('All tasks completed shown')
    }

    function tasksPlanned(event) {
        const allTasks = TASKS.getPlanned();

        let tasks = [];
        for (let task of allTasks) {
            let taskIndex = TASKS.indexOf(task);
            tasks.push({task, taskIndex})
        }

        const allTasksWrapper = createWrapper({title: "Tasks planned", tasks});
        domRender.projectWrapper(allTasksWrapper);
        console.log('All tasks completed shown')
    }


    function toolProject(event) {
        const li = event.target.closest('li');
        const projectIndex = li.dataset.projectIndex;
        if (!projectIndex) { return }

        const isRemove = event.target.closest('.project-remove');
        if (isRemove) { return };

        console.log("EVENT CLICK ON PROJECT LIST");
        const project = PROJECTS.get(projectIndex);
        displayProjectWrapper(project);
        const projectSummary = createProjectSummary(project, projectIndex);
        domRender.editorForm(projectSummary);
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


    // This manages creating and adding the node, eventlisteners
    function displayTaskForm() {
        // Creeate form
        const addTaskForm = createAddTaskForm(PROJECTS.get());
        // Render form
        domRender.editorForm(addTaskForm);
        // Autofocus
        addTaskForm.focus()
    }
    

    // Add project form
    function displayProjectForm() {
        // Create add project form
        const addProjectForm = createAddProjectForm();
        // Render add project's project form
        domRender.editorForm(addProjectForm)
        // Autofocus. FIXXXX
        addProjectForm.focus()
    }


    // Update the projects shown in the toolbar
    function displayProjectWrapper(project) {
        // project might be an index or a Project obj
        const isProjectObj = (typeof project === 'object');
        let projectIndex;
        
        // If arg is not a project obj. but an index
        if (isProjectObj) {
            // reassign variable from index to respective project obj
            projectIndex = PROJECTS.indexOf(project);
        }
        
        else {
            projectIndex = project;
            project = PROJECTS.get(projectIndex);
        }
        
        const projectWrapper = createProjectWrapper(project, projectIndex);
        domRender.projectWrapper(projectWrapper);
    }


    function displayTaskSummary(event) {
        const target = event.target;

        // If the click was on the complete check. do nohing
        const isCheckComplete = target.tagName == "path" || target.tagName == "svg";
        if ( isCheckComplete ) return;


        const taskItem = event.currentTarget;
        let task, taskIndex, projectIndex;

        taskIndex = taskItem.dataset.taskIndex;
        projectIndex = taskItem.dataset.projectIndex;
        task = TASKS.get(taskIndex);
        
        const taskWrapper = createTaskSummary(task, taskIndex, PROJECTS.get());
        domRender.editorForm(taskWrapper);
        
    }

    // Close any editor form
    function clearEditorNode() {
        domRender.clear.editorNode();
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
        projectSubmit, taskSubmit, displayProjectWrapper,
        textareaAutoHeight, taskCompleted, displayTaskSummary,
        taskUpdate, taskRemove, projectUpdate, projectRemove,
        allTasks, tasksCompleted, tasksPlanned,
        clearEditorNode, displayTaskForm, toolProject,
        displayProjectForm, 

    }
} )();

export { handlers }
