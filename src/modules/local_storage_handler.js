import { PROJECTS } from "./projects.js";
import { TASKS } from "./tasks";
import { Project } from "./project.js";
import { Task } from "./task.js";
const PROJECTS_KEY = 'projects';
const TASKS_KEY = 'tasks';

const todoLocalstorage = ( function() {

    // Init local Storage
    function init() {
        // Hay un local storage para todo app?
        
        const todo_ls = localStorage.getItem(PROJECTS_KEY) && localStorage.getItem(TASKS_KEY);
        // Si lo hay.
        if (todo_ls) {
            // Parse the data. 
            // Curate the tasks and projects arrays creating instances from them
            // Set them to the respective local arrays
            // Parse projects. this return simple obj not instances of Project
            const projectsParsed = JSON.parse(localStorage.getItem(PROJECTS_KEY));
            // Create actual instances of Project
            const projectsInstanced = projectsParsed.map(function(projectParsed) {                
                // If project do not exists. deleted el
                if (projectParsed === null) { return projectParsed }

                const projectInstanced = Project.newProject(projectParsed);
                return projectInstanced;
            });

            // Log first project not instanced
            console.log('Project not instaced');
            console.log(projectsParsed[0]);
            // Log first project instaced
            console.log('Project instaced');
            console.log(projectsInstanced[0]);
            
            // Set local projects array to instanced array
            PROJECTS.set(projectsInstanced);


            // SAME WITH TASKS

            // Parse projects. this return simple obj not instances of Project
            const tasksParsed = JSON.parse(localStorage.getItem(TASKS_KEY));
            // Create actual instances of Project
            const tasksInstanced = tasksParsed.map(function(taskParsed) {
                // If project do not exists. deleted el
                if (taskParsed === null) { return taskParsed }
                console.log('taskParsed data');
                console.log(taskParsed);
                const taskInstanced = Task.newTask(taskParsed);
                return taskInstanced;
            });

            // Log first task not instanced
            console.log('Task not instaced');
            console.log(tasksParsed[0]);
            // Log first task instaced
            console.log('Task instaced');
            console.log(tasksInstanced[0]);
            
            // Set local tasks array to instanced array
            TASKS.set(tasksInstanced);
        }

        // Si no lo hay
        else {
            // Crea las propiedades tasks y projects local
            PROJECTS.set(new Array());
            TASKS.set(new Array());
            // Crea un objeto default
            const defProject = Project.newProject({title: "General"});
            PROJECTS.add(defProject);
            // Copia a ls
            update.projects();
            update.tasks();
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
            this.update(PROJECTS_KEY, PROJECTS.getAll());
        },

        tasks() {
            this.update(TASKS_KEY, TASKS.getAll());
        },

    }

    return { init, update };
} )();

export { todoLocalstorage };