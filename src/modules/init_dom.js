// CREATE DOM ELEMENTS

import { handlers } from "./event_handlers.js";

function  initDom() {
    // REFERENCE NODES, ADD EVENT LISTENERS AND HANDLERS
    const navNode = document.querySelector('nav');
    
    const addTaskBtn = navNode.querySelector('#addTask');
    addTaskBtn.addEventListener('click', handlers.displayTaskForm);
    
    const addProjectBtn = navNode.querySelector('#addProject');
    addProjectBtn.addEventListener('click', handlers.displayProjectForm);
    
    const allTaskNode = navNode.querySelector('.tasks-all');
    allTaskNode.addEventListener('click', handlers.allTasks);
    
    const tasksCompletedNode = navNode.querySelector('.tasks-completed');
    tasksCompletedNode.addEventListener('click', handlers.tasksCompleted);
    
    
    const tasksPlannedNode = navNode.querySelector('.tasks-planned');
    tasksPlannedNode.addEventListener('click', handlers.tasksPlanned);
    
}

export { initDom }