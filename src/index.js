// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { initLocalStorage, projectsToLocalStorage } from "./modules/local_storage_handlers.js";

import { PROJECTS } from "./modules/projects.js";
import { Project } from "./modules/project.js";
import { Task } from "./modules/task.js";
import { Subtask } from "./modules/subtask.js";
import { TaskGroup } from "./modules/taskgroup.js";

// DOM render
import { domRender } from "./modules/domRender.js";

// CREATE DOM ELEMENTS
import { createAddTaskForm  } from "./modules/add_task_form.js";
import { createAddProjectForm  } from "./modules/add_project_form.js";
import { createToolProjects } from "./modules/create_tool_projects.js";
import { createProjectWrapper } from "./modules/create_project_wrapper.js";

import { handlers } from ".modules/event_handlers.js";
import { getFormData } from "./modules/get_form_data.js";

const log = console.log;

const DEFAULT_PROJECT = 0;


// ---------------- LOCAL STORAGE ------------------

// Clean Local storage
localStorage.clear();



// -------------------- DOM STUFF -------------------------
const editorNode = document.querySelector('.editor');
const generalNode = document.querySelector('.general');
generalNode.addEventListener('submit', handlers.taskSubmit);
const addTaskBtn = document.querySelector('#addTask');
addTaskBtn.addEventListener('click', displayTaskForm);
const addProjectBtn = document.querySelector('#addProject');
addProjectBtn.addEventListener('click', displayProjectForm);
const wrapper = document.querySelector('#tool-projects-wrapper');
const overview = generalNode.querySelector('#overview');
wrapper.addEventListener('click', handlers.toolProject)

// ------------ DOM RENDERING ------------

// Update project dom module
function updateProjectWrapper(projectIndex) {
    const project = PROJECTS.get()[projectIndex];
    const projectWrapper = createProjectWrapper(project, projectIndex);
    domRender.projectWrapper(projectWrapper);
}


function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
}


// This manages creating and adding the node, eventlisteners
function displayTaskForm() {
    // Creeate form
    const addTaskForm = createAddTaskForm();
    // Render form
    domRender.editorForm(addTaskForm);
    // Autofocus
    addTaskForm.querySelector('#taskTitle').focus()
}

// Add project form
function displayProjectForm() {
    // Create add project form
    const addProjectForm = createAddProjectForm();
    // Render add project's project form
    domRender.editorForm(addProjectForm)
    // Autofocus
    addProjectForm.querySelector('#projectTitle').focus()
}


function init() {
    initLocalStorage();
    domRender.toolProjects(PROJECTS.get());

    const defaultProject = PROJECTS.get()[DEFAULT_PROJECT];
    const projectWrapper = createProjectWrapper(defaultProject, DEFAULT_PROJECT);

    // This code is repeated twice in this file
    // Got to fix this
    domRender.projectWrapper(projectWrapper);

}

init();