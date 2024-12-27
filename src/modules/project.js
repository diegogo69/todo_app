// Project class
class Project {
    constructor( {title="Some project", tasks=[], description="", taskgroups=[]} ) {
        this.title = title; // string
        this.tasks = tasks; // array
        this.description = description; // string
        this.taskgroups = taskgroups; // Array of Taskgroup obj
        this.completed = false; // boolean
    }

    // STATIC METHODS

    // Project.createProject
    // Simple, create a project by just typing its title
    static newProject( {title, tasks, description, taskgroups} ) {
        // Create project
        let project = new Project( {title, tasks, description, taskgroups} );
        // Return its value
        return project;
    }

    // PROPERTY EDITORS

    // --- TASKS ---
    // Add / remove tasks from project

    addTask(task) {
        this.tasks.push(task);
        task.project = this;
    }
    
    // REWOVE
    removeTask(task) {
        // Get index of task within the project's tasks array
        const index = this.tasks.indexOf(task);
        // If task was found in the array
        if (index > -1) { 
            // From task array on index remove 1 element
            this.tasks.splice(index, 1);
            task.project = null;
            // task = null ?????? to delete it completely
        }
    }


    // --- DESCRIPTION ---

    // Set. Add / remove this projects description
    // If no description passed, empty it. Else add it
    setDescription(description="") {
        this.description = description
    }

    // --- TASKGROUPS / HEADINGS ---

    // Add taskgroup list to project. not create one
    // Add taskgroup 1 by 1 or as a list as well
    addTaskgroup(taskgroup) {

        // Añadir heading / taskgroup al proyect
        this.taskgroups.push(taskgroup);

        // Añadir heading to the tasks.taskgroup prop
        for (let task of taskgroup.tasks) {

            // for when i'm creating subtasks from primitive not objects
            if (typeof task !== "object") {
                let title = task;
                task = {};
                task.title = title;
            }

            task.taskgroup = taskgroup;
        }
    }

    // Delete taskgroup
    removeTaskgroup(taskgroup) {
        const index = this.tasksgroups.indexOf(taskgroup);
        if (index > -1) { 
            this.taskgroups.splice(index, 1);
        }

    }

    // --- COMPLETE ---
    setComplete(completed) {
        this.completed = completed;
    }

    // Update data
    updateData( data ) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

}

export { Project }