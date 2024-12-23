import { PROJECTS } from "./projects.js";
import { Project } from "./project.js";


// Init local Storage
function initLocalStorage() {
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
}

// Assign PROJECTS array to localStorage 
function projectsToLocalStorage() {
    // Stringify projects array
    const projectsJSON = JSON.stringify(PROJECTS.get());
    
    // Reasign new projects array in localStorage
    localStorage.setItem('projects', projectsJSON);

    console.log('Local Storage project reasigned succesfully');
    console.log(localStorage.getItem('projects'));

}

export { initLocalStorage, projectsToLocalStorage }