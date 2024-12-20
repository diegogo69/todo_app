// Draw for base functional todo app
// Priority. 1 low. 2 normal. 3 high. 4 urgent
import { Project } from "./project.js"
import { Task, TaskGroup } from "./task.js"
import { Subtask } from "./subtask.js"


// ----- PROJECTS -------
// Projects will be an object with its own functionality
// list of projects, add and remove projects.
// Probably use a factory function with an getter that returns a copy not the original arr

// List of projects
let projects = [];



// ADD project to projects
// Simple, create a project by just typing its title
function createProject( {title} ) {
    // Create project
    let project = new Project( {title} );
    // Add it to list of projects. No, bcs that's an external matter
    projects.push(project);
    // Return its value
    return project;
}

// Remove project from projects
// As this is a mehtod would it work to remove the project from the projects lists
// From the project itself. I think these are different concerns
function removeProject() {
    let index = projects.indexOf(this);
    if (index > -1) {
        projects.splice(index, 1);
    }
}

// EDIT project. That is, project properties.
// This an internal matter of the project itself

// This are functions that will be translate to class methods


// title
function setProjectTitle(project, title) {
    this.title = title;
}

// Tasks
// ADD
function addTask(task) {
    this.tasks.push(task);
    task.project = this;
}

// REWOVE
function removeTask(task) {
    // Get index of task within the project's tasks array
    const index = this.tasks.indexOf(task);
    // If task was found in the array
    if (index > -1) { 
        // 2nd parameter means remove one item only
        this.tasks.splice(index, 1);
        task.project = null;
        // task = null ?????? to delete it completely
    }
}

// Description
// Add edit delete? maybe set
// add
// EDIT
// Remove. if no arg passed. empty the description
function setDescription(description="") {
    this.description = description
}

// taskgroups / headings
// Create taskgroup
// Initialize with just title and with or without a group of tasks
function createTaskgroup( {title, tasks=[]} ) {
    // Create project
    let taskgroup = new TaskGroup( {title, tasks} );
    // Add it to project task groups??? Add and create are 2 differente things
    // addTaskgroup(taskgroup);
    // Return its value
    return taskgroup;
}
// Add taskgroup list to project. not create one
function addTaskgroup(taskgroup) {
    this.taskgroups.push(taskgroup);
}

// Delete taskgroup
function removeTaskgroup(taskgroup) {
    // Get index of task within the project's tasks array
    const index = this.tasksgroups.indexOf(taskgroup);
    // If task was found in the array
    if (index > -1) { 
        // 2nd parameter means remove one item only
        this.taskgroups.splice(index, 1);
    }

}
// edit. Edit on project, or edit on task
// Edit on task

// Complete
function setComplete(complete) {
    this.complete = complete;
}


// ----- TASKS ------
function createTask( {title, project, dueDate, priority} ) {
    let task = new Task( {title, project, dueDate, priority} );
    return task // Optimize
}

// ---- MAIN -----
function main() {
    // create project
    let p1 = new Project( {title: "Test project"});
    p1.tasks;
    

    // create tasks
    let t1 = new Task( {title: "Crear tarea con titulo"});
    let t2 = new Task( {project: "todo list projec", title: "Crear tarea con titulo y proyecto"});
    t2.project.title;


    p1.addTask(t1);
    p1.addTask(t2);
    p1.tasks;

    // create subtasks
    let s1 = new Subtask( {title: "Crear subtarea 1 para tarea 1", } );
    let s2 = new Subtask( {title: "Crear subtarea 2 para tarea 1", } );
    let s3 = new Subtask( {title: "Crear subtarea 3 para tarea 1", } );
    t1.addSubtask(s1);
    t1.addSubtask( [s2, s3] );
    t1.subtasks;

    // view all properties
}