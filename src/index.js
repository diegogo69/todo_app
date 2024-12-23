// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { PROJECTS } from "./modules/projects.js";
import { Project } from "./modules/project.js";
import { Task } from "./modules/task.js";
import { Subtask } from "./modules/subtask.js";
import { TaskGroup } from "./modules/taskgroup.js";

// CREATE DOM ELEMENTS
import { createAddTaskForm  } from "./modules/add_task_form.js";
import { createAddProjectForm  } from "./modules/add_project_form.js";
import { createToolProjects } from "./modules/create_tool_projects.js";

import { enterKeyPressed } from "./modules/enterKeyPressed.js";

const log = console.log;

const DEFAULT_PROJECT = 0;


// ---------------- LOCAL STORAGE ------------------

// Clean Local storage
localStorage.clear();


// Init local Storage
// If no projects in localStorage
if(!localStorage.getItem('projects')) {
    // Set PROJECTS.projects to empty
    PROJECTS.set(new Array());
    // Create default project
    const defProject = Project.newProject({title: "Default"});
    // Add default project
    PROJECTS.add(defProject);
    // PROJECTS.projects.push(defProject);
    // Assign PROJECTS array to localStorage 
    projectsToLocalStorage();
} 
// If projects in local storage
else {
    // Parse local storage projects into PROJECTS.projects
    const projectsParsed = JSON.parse(localStorage.getItem('projects'));
    PROJECTS.set(projectsParsed);
}



// -------------------- DOM STUFF -------------------------
const editorNode = document.querySelector('.editor');
const generalNode = document.querySelector('.general');


function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
}

//  DOM HANDLING ADD TASK
// Is this only DOM?
const addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener('click', displayTaskForm);

function displayTaskForm() {
    // Creeate form
    const addTaskForm = createAddTaskForm();
    // Render form
    renders.editorForm(addTaskForm);
    // On submit event listener
    // const submitBtn = document.querySelector('#addTaskForm');
    addTaskForm.addEventListener('submit', taskSubmitHandler)
    // Textareas dynamic height on form
    textareaDynamicHeight(addTaskForm);
    // Autofocus
    // editorNode.querySelector('#taskTitle').focus()
    addTaskForm.querySelector('#taskTitle').focus()
}


// Add project form
const addProjectBtn = document.querySelector('#addProject');

addProjectBtn.addEventListener('click', displayProjectForm);


function displayProjectForm() {
    // Create add project form
    const addProjectForm = createAddProjectForm();
    // Render add project's project form
    renders.editorForm(addProjectForm)
    // const submitBtn = document.querySelector('#addProjectForm');
    addProjectForm.addEventListener('submit', projectSubmitHandler)
    // Textareas dynamic height on form
    textareaDynamicHeight(addProjectForm);
    // Autofocus
    // editorNode.querySelector('#projectTitle').focus()
    addProjectForm.querySelector('#projectTitle').focus()
}


function projectSubmitHandler(event) {
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


function getProjectFormData() {
    // Query selectors
    const addProjectForm = editorNode.querySelector('#addProjectForm');
    const projectTitle = addProjectForm.querySelector('#projectTitle');
    const projectDescription = addProjectForm.querySelector('#projectDescription');
    const projectProjectTasks = addProjectForm.querySelectorAll('.projectTasks');

    // Data extraction
    const title = projectTitle.value;
    const description = projectDescription.value;
    const tasks = [];
    projectProjectTasks.forEach(project => {
        tasks.push(project.value);
        log("push subproject")
    });

    return {title, description, tasks};
    
}



function textareaDynamicHeight(form) {
    const textareas = form.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener('input', textareaAutoResize);
        textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello));
    });
}


// callback function for testing on enter key event
function sayHello() { log("HELLOOOOOOO") }


function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}


function textareaAutoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}


// ------------ DOM RENDERING ------------
const renders = ( function() {
    const wrapper = document.querySelector('#tool-projects-wrapper');

    function toolProjects(projects) {
        clearNode(wrapper);
        const projectsUl = createToolProjects(projects);
        wrapper.appendChild(projectsUl);
    }

    function editorForm(form) {
        clearNode(editorNode);
        editorNode.appendChild(form);
    }
    return { toolProjects, editorForm, };
} )();


// Retrieve data from add task's form
function getTaskFormData() {
    // Query selectors
    const addTaskForm = editorNode.querySelector('#addTaskForm');
    const taskTitle = addTaskForm.querySelector('#taskTitle');
    const taskDescription = addTaskForm.querySelector('#taskDescription');
    const taskSubtasks = addTaskForm.querySelectorAll('.subtask');

    // Data extraction
    const title = taskTitle.value;
    const description = taskDescription.value;
    // Reference project by index in projects array
    const project = DEFAULT_PROJECT;
    // Retrieve subtasks
    const subtasks = [];
    taskSubtasks.forEach(task => {
        subtasks.push(task.value);
        log("push subtask");
    });

    return {title, description, subtasks, project};
}



// TASK SUBMIT FUNCTION HANDLER
// Event gets passed automatically
function taskSubmitHandler(event) {
    event.preventDefault();
    // Testing logs
    log("Task submit handler works fine");
    log("LOG EVENT: ");
    log(event.target); // Form node
    log("it works")

    // Extract form data
    const taskData = getTaskFormData(); // {title, description, subtasks, project}

    // Create task instance
    const newTask = Task.newTask( taskData );
    
    // Add new task to default project
    addTaskToProject(newTask, DEFAULT_PROJECT);

    // Assign PROJECTS array to localStorage 
    projectsToLocalStorage();

}


// Add task to project. xd
function addTaskToProject(task, project) {
    const projects = PROJECTS.get();
    projects[project]["tasks"].push(task);
    log('Task added to default project SUCCESSFULLY');
}


// Assign PROJECTS array to localStorage 
function projectsToLocalStorage() {
    // Stringify projects array
    const projectsJSON = JSON.stringify(PROJECTS.get());
    
    // Reasign new projects array in localStorage
    localStorage.setItem('projects', projectsJSON);

    log('Local Storage project reasigned succesfully');
    log(localStorage.getItem('projects'));

}