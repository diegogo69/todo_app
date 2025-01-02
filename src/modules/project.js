// Project class
class Project {
    // Simple, create a project by just typing its title
    constructor( {title="Unnamed project", tasks=[], description="", completed=false, taskgroups=[]} ) {
        this.title = title; // string
        this.tasks = tasks; // array of numeric indices
        this.description = description; // string
        this.completed = completed; // boolean
        this.taskgroups = taskgroups; // Array 
    }

    // STATIC METHODS
    static newProject( {title, tasks, description, completed, taskgroups} ) {
        // Return newly created project
        return new Project( {title, tasks, description, completed, taskgroups} );
    }

    // REGULAR METHODS
    addTask(task) {
        // task arg is a numeric index of TASKS array
        this.tasks.push(task);
    }
    
    // REWOVE. by setting to null
    removeTask(task) {
        // task arg is a numeric index of TASKS array
        // Get index of task arg within this project's tasks array
        const index = this.tasks.indexOf(+task);
        // If index found
        if (index > -1) { this.tasks[index] = null }
        console.log(`Index passed to remove ${task}. Index within project ${index}`)
    }

    // --- COMPLETE ---
    checkComplete() {
        for (let task of this.tasks) {
            if (!task.completed) { return false }
        }
        return true;
    }

    // Update data
    updateData( data ) {
        // Data keys are the same of the constructor
        for (let key in data) {
            this[key] = data[key];
        }
    }

    // --- Yet to implement --- 

    // Add taskgroup list to project
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
        this.taskgroups[index] = null;
    }

}

export { Project }