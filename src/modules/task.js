// Task class
class Task {
    constructor( { title="Unnamed task", project=null, dueDate=null, priority=1, description="",  completed=false, subtasks=[], taskgroup=null} ) {
        this.title = title; // title
        this.project = project; // numeric index
        this.dueDate = dueDate; // Date string
        this.priority = priority; // number. 1 2 3 
        this.description = description; // string
        this.completed = completed; // boolean
        this.taskgroup = taskgroup; // numeric index
        this.subtasks = subtasks; // array
    }

    // STATIC METHODS
    static newTask( {title, project, dueDate, priority, description, completed, subtasks, taskgroup} ) {
        console.log('Task parsed completed status');
        console.log(completed);
        return new Task( {title, project, dueDate, priority, description, completed, subtasks, taskgroup} );
    }
    
    // REGULAR METHODS

    // --- COMPLETE ---
    setComplete() {
        this.completed = !this.completed;
        return this.completed;
    }

    // Update data
    updateData( data ) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

    // ---- Yet to implement ---- 
    addTaskgroup(taskgroup) {
        this.taskgroup = taskgroup;
    }

    // Add subtask. It should have a task associated
    addSubtask(subtask) {
        this.subtasks.push(subtask);
        subtask.task = this;
    }

    // remove subtask of subtasks list
    removeSubtask(subtask) {
        // Get index of task within the project's tasks array
        const index = this.subtasks.indexOf(subtask);
        // If task was found in the array
        if (index > -1) { this.subtasks[index] = null }
    }

}

export { Task }