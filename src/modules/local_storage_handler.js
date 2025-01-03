import { PROJECTS } from "./projects.js";
import { TASKS } from "./tasks";
import { Project } from "./project.js";
import { Task } from "./task.js";

const PROJECTS_KEY = 'projects';
const TASKS_KEY = 'tasks';

const todoLocalstorage = ( function() {

    // Init local Storage
    function init() {
        
        const todo_ls = ( localStorage.getItem(PROJECTS_KEY) && localStorage.getItem(TASKS_KEY) );
        // Si lo hay.
        if (todo_ls) {
            // Parse data items as simple obj and create actual instances from them to add class functionality
            const projectsParsed = JSON.parse(localStorage.getItem(PROJECTS_KEY));
            // Create actual instances of Project
            const projectsInstanced = projectsParsed.map(function(projectParsed) {                
                // If project do not exist add it as is (null)
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

            const tasksParsed = JSON.parse(localStorage.getItem(TASKS_KEY));
            const tasksInstanced = tasksParsed.map(function(taskParsed) {
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
            const defProject = Project.newProject({title: "General", description: "List of general tasks"});
            const defProjectIndex = PROJECTS.add(defProject);

            const defCompletedTask = Task.newTask( {title: "Some completed task", project: defProjectIndex, completed: true} );
            const defPlannedTask = Task.newTask( {title: "I actually forgot what I was gonna do", project: defProjectIndex, description: "Oh of course, implement subtasks Hahah. Maybe later"} );
            const defTask = Task.newTask( {title: "Remove me", project: defProjectIndex} );

            defProject.addTask( TASKS.add(defCompletedTask) );
            defProject.addTask( TASKS.add(defPlannedTask) );
            defProject.addTask( TASKS.add(defTask) );
            // Copy to ls
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