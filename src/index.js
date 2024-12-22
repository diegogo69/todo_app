// Import CSS
import "./static/modern-normalize.css";
import "./static/styles.css";

import { projects } from "./modules/projects.js";
import { Project } from "./modules/project.js";
import { Task } from "./modules/task.js";
import { Subtask } from "./modules/subtask.js";
import { TaskGroup } from "./modules/taskgroup.js";

import { createAddTaskForm  } from "./modules/add_task_form.js";
import { enterKeyPressed } from "./modules/enterKeyPressed.js";

const log = console.log;

const w = { projects, Project, Task, Subtask, TaskGroup };
globalThis.w = w;
// Import list of projects

// Create Default Project
w.def1 = w.Project.newProject({title: "Default"});
// Default project in projects[0]
w.projects.addProject(w.def1);
console.log(w.projects.projects[0]);
console.log(w.projects.projects[0] === w.def1); // true

// Create default tasks
// The way of creating default tasks, is by creating and adding them
// On the Default Project using the addTask() method
w.t1 = w.Task.newTask({title: "Probar project default"});
w.def1.addTask(w.t1);

// Create custom projects
w.cp1 = w.Project.newProject({title: "Probar  y testear main items",});
w.cp1.setDescription("Lista de proyecto de prueba para descripcion")
w.projects.addProject(w.cp1);


// Create custom tasks
// Crear task with due date and high priority
w.ct1 = w.Task.newTask({
    title: "Crear custom task y añadirlas al custom project",
    dueDate: "24 de diciembre",
    priority: 4,
})
// Add custom task to custom project
w.cp1.addTask(w.ct1);
// Add notes/description to custom task
w.ct1.setDescription("Prueba y test de añadir notas/descripción a tarea");

// Create subtasks
w.st1 = w.Subtask.newSubtask({title: "crear subtarea numero uno"});
w.ct1.addSubtask(w.st1);


// Create taskgroup
w.tg1 = w.TaskGroup.newTaskgroup({title: "Heading de grupo de tareas", tasks: [w.ct1, "tarea 2", "tarea 33",]});
w.cp1.addTaskgroup(w.tg1);

log(projects.projects)




// -------------------- DOM STUFF -------------------------
const editorNode = document.querySelector('.editor');
const generalNode = document.querySelector('.general');


function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
}

//  DOM HANDLING ADD TASK
// Is this only DOM?
const addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener('click', displayTaskForm);

function displayTaskForm() {
    const addTaskForm = createAddTaskForm();

    function sayHello() { log("HELLOOOOOOO") }

    clearNode(editorNode);
    editorNode.appendChild(addTaskForm);

    // Textarea dynamic height
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        textarea.addEventListener("keydown", (e) => enterKeyPressed(e, sayHello));
    });

    const submitBtn = document.querySelector('#addTaskForm');
    submitBtn.addEventListener('submit', function(event) {
        event.preventDefault();

        log("it works")

        // Query selectors
        const addTaskForm = editorNode.querySelector('#addTaskForm');
        const taskTitle = addTaskForm.querySelector('#taskTitle');
        const taskDescription = addTaskForm.querySelector('#taskDescription');
        const taskSubtasks = addTaskForm.querySelectorAll('.subtask');

        // Data extraction
        const title = taskTitle.value;
        const description = taskDescription.value;
        const subtasks = [];
        taskSubtasks.forEach(task => {
            subtasks.push(task.value);
            log("push subtask")
        });
        const project = w.projects.projects.indexOf(w.def1);

        // Create task instance
        const newTask = Task.newTask( {title, description, subtasks, project} )
        w.newTask = newTask;
        
    })

    // Autofocus
    editorNode.querySelector('#taskTitle').focus()
    
}

function taskFromForm() {

}



function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
