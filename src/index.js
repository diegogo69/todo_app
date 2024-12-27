// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { PROJECTS } from "./modules/projects.js";

import { Project } from "./modules/project.js";
import { Task } from "./modules/task.js";
import { Subtask } from "./modules/subtask.js";
import { TaskGroup } from "./modules/taskgroup.js";
import { todoLocalstorage } from "./modules/local_storage_handler.js";

// DOM render
import { domRender } from "./modules/domRender.js";

// CREATE DOM ELEMENTS
import { createAddTaskForm  } from "./modules/add_task_form.js";
import { createAddProjectForm  } from "./modules/add_project_form.js";
import { createToolProjects } from "./modules/create_tool_projects.js";
import { createProjectWrapper } from "./modules/create_project_wrapper.js";

import { handlers } from "./modules/event_handlers.js";
import { getFormData } from "./modules/get_form_data.js";

const log = console.log;

const DEFAULT_PROJECT = 0;


// ---------------- LOCAL STORAGE ------------------

// Clean Local storage
localStorage.clear();

// -------------------- DOM STUFF -------------------------
const navNode = document.querySelector('nav');

const addTaskBtn = navNode.querySelector('#addTask');
addTaskBtn.addEventListener('click', displayTaskForm);

const addProjectBtn = navNode.querySelector('#addProject');
addProjectBtn.addEventListener('click', displayProjectForm);

const allTaskNode = navNode.querySelector('.tasks-all');
allTaskNode.addEventListener('click', handlers.allTasks);

const tasksCompletedNode = navNode.querySelector('.tasks-completed');
tasksCompletedNode.addEventListener('click', handlers.tasksCompleted);


const tasksPlannedNode = navNode.querySelector('.tasks-planned');
tasksPlannedNode.addEventListener('click', handlers.tasksPlanned);

// ------------ DOM RENDERING ------------


// This manages creating and adding the node, eventlisteners
function displayTaskForm() {
    // Creeate form
    const addTaskForm = createAddTaskForm();
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

function displayToolProjects() {
    const projectsUl = createToolProjects(PROJECTS.get());
    domRender.toolProjects(projectsUl);
}

function init() {
    todoLocalstorage.init();
    displayToolProjects();

    const defaultProject = PROJECTS.get()[DEFAULT_PROJECT];
    const projectWrapper = createProjectWrapper(defaultProject, DEFAULT_PROJECT);

    domRender.projectWrapper(projectWrapper); 
}

init();
