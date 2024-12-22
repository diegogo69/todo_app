// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { PROJECTS } from "./modules/projects.js";
import { Project } from "./modules/project.js";
import { Task } from "./modules/task.js";
import { Subtask } from "./modules/subtask.js";
import { TaskGroup } from "./modules/taskgroup.js";

import { createAddTaskForm  } from "./modules/add_task_form.js";
import { createAddProjectForm  } from "./modules/add_project_form.js";

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
    PROJECTS.projects = [];

    // Create default project
    const defProject = Project.newProject({title: "Default"});

    // Add default project
    PROJECTS.projects.push(defProject);
    
    // Stringify array for projects in local storage
    // let projects = JSON.stringify([]);
    const projectsJSON = JSON.stringify([PROJECTS.projects]);
    localStorage.setItem('projects', projectsJSON);
} 
// If projects in local storage
else {
    // Parse local storage projects into PROJECTS.projects
    PROJECTS.projects = JSON.parse(localStorage.getItem('projects'));
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
    const addTaskForm = createAddTaskForm();

    function sayHello() { log("HELLOOOOOOO") }

    clearNode(editorNode);
    editorNode.appendChild(addTaskForm);

    // Textarea dynamic height
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello));
    });

    const submitBtn = document.querySelector('#addTaskForm');
    submitBtn.addEventListener('submit', function(event) {
        event.preventDefault();

        log("it works")

        // Query selectors
        const addTaskForm = editorNode.querySelector('#addTaskForm');
        const taskTitle = addTaskForm.querySelector('#taskTitle');
        const taskDescription = addTaskForm.querySelector('#taskDescription');
        const taskSubtasks = addTaskForm.querySelectorAll('.subtask');

        // Data extraction
        const title = taskTitle.value;
        const description = taskDescription.value;
        const subtasks = [];

        // Reference project by index in projects array
        const project = DEFAULT_PROJECT;

        taskSubtasks.forEach(task => {
            subtasks.push(task.value);
            log("push subtask");
        });

        // Create task instance
        const newTask = Task.newTask( {title, description, subtasks, project} );
        
        // Add new task to default project
        PROJECTS.projects[DEFAULT_PROJECT]["tasks"].push(newTask);
        log('Task added to default project');

        // Stringify projects array
        const projectsJSON = JSON.stringify([PROJECTS.projects]);
        
        // Reasign new projects array in localStorage
        localStorage.setItem('projects', projectsJSON);

        log('Local Storage project reasigned succesfully');
        log(localStorage.getItem('projects'));
        
    })

    // Autofocus
    editorNode.querySelector('#taskTitle').focus()
    
}

function taskFromForm() {

}

// Add project form
const addProjectBtn = document.querySelector('#addProject');

addProjectBtn.addEventListener('click', displayProjectForm);


function displayProjectForm() {
    const addProjectForm = createAddProjectForm();

    function sayHello() { log("HELLOOOOOOO") }

    clearNode(editorNode);
    editorNode.appendChild(addProjectForm);

    // Textarea dynamic height
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello));
    });

    const submitBtn = document.querySelector('#addProjectForm');
    submitBtn.addEventListener('submit', function(event) {
        event.preventDefault();

        log("it works")

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

        // Create project instance
        const newProject = Project.newProject( {title, description, tasks} )

        // Add to local Storage
        
        // Retrieve current array of projects in locaStorage
        // From JSON to array
        // let projects = JSON.parse(localStorage.getItem('projects'));
        // projects.push(newProject);

        // Use PROJECTS.Projects instead
        // Push new project to projects array
        PROJECTS.projects.push(newProject);
        log('Project added succesfully to projects array');
        
        // Stringify projects array
        const projectsJSON = JSON.stringify([PROJECTS.projects]);

        // Reasign new projects array in localStorage
        localStorage.setItem('projects', projectsJSON);

        log('Local Storage Projects array reasigned succesfully');
        log(localStorage.getItem('projects'));        
        
    })

    // Autofocus
    editorNode.querySelector('#projectTitle').focus()
    
}

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


function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
