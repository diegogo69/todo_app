// Task class
class Task {
    constructor( {title, project="default", dueDate=null, priority=2} ) {
        this.title = title; // title
        this.project = project; // class
        this.dueDate = dueDate; // Date obj stored in json as string
        this.priority = priority; // number. 1 2 3 
        this.notes = null; // string
        this.subtasks = []; // array
        this.completed = false; // boolean
    }

    // STATIC METHODS

    static newTask( {title, project, dueDate, priority} ) {
        let task = new Task( {title, project, dueDate, priority} );
        return task // Optimize
    }

    // REGULAR METHODS

    // ---- TITLE ----

    // Add task title. the task itself
    // It cannot be empty. By this point the task is already created
    // So it already has a title.
    // The task constructor should handle that with no title there's no task
    // Set handles editing the task title
    setTitle(title) {
        // if title set title????? or up to dom handler
        this.title = title;
    }


    // ---- PROJECT ----

    // Set project to wich the task belongs
    // If no project set it to default project
    // By this point the task already has a project.
    // So it handles editing it
    setProject(project) {
        // if project set project?????
        this.project = project;
    }


    // ---- DUE DATE ----

    // This receives a Date Object as arg
    // Set due date. Null by default
    setDueDate(date) {
        // if project set project?????
        this.dueDate = date;
    }


    // ---- PRIORITY ----

    // Set priority. normal by default
    // 1 low, 2 normal, 3 high, 4 urgent
    setPriority(priority) {
        // if project set project?????
        this.priority = priority;
    }


    // ---- NOTES ----

    // Set notes, it can be both empty or string
    setNotes(notes) {
        this.notes = notes;
    }

    // ---- SUBTASKS ----

    // ADD.
    // Add subtask. It should have a task associated
    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }

    // REMOVE
    // remove subtask of subtasks list
    removeSubtask(subtask) {
        // Get index of task within the project's tasks array
        const index = this.subtasks.indexOf(subtask);
        // If task was found in the array
        if (index > -1) { 
            // From task array on index remove 1 element
            this.subtasks.splice(index, 1);
            subtask.project = null;
            // subtask = null ?????? to delete it completely
        }
    }

    // --- COMPLETE ---
    setComplete(completed) {
        this.completed = completed;
    }

}

export { Task }