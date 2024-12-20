import { projects } from "./projects.js";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { Subtask } from "./subtask.js";
import { Taskgroup } from "./taskgroup.js";

const log = console.log;

function main() {
    // Import list of projects

    // Create Default Project
    let default1 = Project.newProject({title: "Default"});
    // Default project in projects[0]
    projects.addProject(default1);
    console.log(projects[0]);
    console.log(projects[0] === default1);

    // Create default tasks
    // Task.newTask({title: "Probar project default"});
    // default1.addTask()

    // Create custom projects
    // Create custom tasks
    // Create taskgroup
    // Create subtasks
}