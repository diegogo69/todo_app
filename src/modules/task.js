// Task class
class Task {
    constructor( { title, project=null, dueDate=null, priority=2, subtasks=[], description=null, taskgroup=null} ) {
        this.title = title; // title
        this.project = project; // class
        this.dueDate = dueDate; // Date obj stored in json as string
        this.priority = priority; // number. 1 2 3 
        this.taskgroup = taskgroup;
        this.description = description; // string
        this.subtasks = subtasks; // array
        this.completed = false; // boolean
    }

    // STATIC METHODS

    static newTask( {title, project, dueDate, priority, subtasks, description, taskgroup} ) {
        let task = new Task( {title, project, dueDate, priority, subtasks, description, taskgroup} );
        return task // Optimize
    }
    
    // REGULAR METHODS

    addTaskgroup(taskgroup) {
        this.taskgroup = taskgroup;
    }

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

    // Set description, it can be both empty or string
    setDescription(description) {
        this.description = description;
    }

    // ---- SUBTASKS ----

    // ADD.
    // Add subtask. It should have a task associated
    addSubtask(subtask) {
        this.subtasks.push(subtask);
        subtask.task = this;
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

    // Update data
    updateData( data ) {
        for (let key in data) {
            this[key] = data[key];
        }
    }

}

export { Task }