import { PROJECTS } from "./projects.js";
import { TASKS } from "./tasks";
import { Project } from "./project.js";
const PROJECTS_KEY = 'projects';
const TASKS_KEY = 'tasks';

const todoLocalstorage = ( function() {

    // Init local Storage
    function init() {
        // If no projects in localStorage
        if(!localStorage.getItem(PROJECTS_KEY)) {
            // Set PROJECTS.projects to empty
            PROJECTS.set(new Array());
            TASKS.set(new Array());
            // Create default project
            const defProject = Project.newProject({title: "Default"});
            // Add default project
            PROJECTS.add(defProject);
            // PROJECTS.projects.push(defProject);
            // Assign PROJECTS array to localStorage 
            update.projects();
            update.tasks();
        } 
    
        // If projects in local storage
        else {
            // Parse local storage projects into PROJECTS.projects
            const projectsParsed = JSON.parse(localStorage.getItem(PROJECTS_KEY));
            const tasksParsed = JSON.parse(localStorage.getItem(TASKS_KEY));
            PROJECTS.set(projectsParsed);
            TASKS.set(tasksParsed);
        }
    }
    
    const update = {
        update(key, value) {
            const valueJSON = JSON.stringify(value);
            localStorage.setItem(key, valueJSON);
            console.log(`Local Storage ${key} reasigned succesfully`);
            console.log(localStorage.getItem(key));
        },

        projects() {
            this.update(PROJECTS_KEY, PROJECTS.get());
        },

        tasks() {
            this.update(TASKS_KEY, TASKS.get());
        },

    }

    return { init, update };
} )();

export { todoLocalstorage };