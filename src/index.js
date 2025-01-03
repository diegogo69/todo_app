// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { PROJECTS } from "./modules/projects.js";
import { todoLocalstorage } from "./modules/local_storage_handler.js";
import { createProjectWrapper } from "./modules/create_project_wrapper.js";
import { createToolProjects } from "./modules/create_tool_projects.js";
import { domRender } from "./modules/domRender.js";
import { initDom } from "./modules/init_dom.js";

const DEFAULT_PROJECT = 0;

// ---------------- LOCAL STORAGE ------------------

// Clean Local storage
// localStorage.clear();

// -------------------- DOM STUFF -------------------------

const init = ( function() {
    // Initialize local storage
    todoLocalstorage.init();
    // Initialize dom elements, event listeners and handlers
    initDom();

    // Render toolbar list of projects
    const projectsUl = createToolProjects(PROJECTS.get());
    domRender.toolProjects(projectsUl);

    // Render default project
    const defaultProject = PROJECTS.get(DEFAULT_PROJECT);
    const projectWrapper = createProjectWrapper(defaultProject, DEFAULT_PROJECT);
    domRender.projectWrapper(projectWrapper); 
} )();
