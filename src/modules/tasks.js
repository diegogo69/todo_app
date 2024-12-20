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

    // FIX. Add subtask 1 by 1 or as a list as well
    addSubtask(subtask) {
        // If arg passed is iterable
        if (Array.isArray(subtask)) {
            for (let sub of subtask) {
                this.subtasks.push(sub);
                sub.task = this;
            }
        }
        // If arg passed not iterable
        else {
            this.subtasks.push(subtask);
            subtask.task = this;
        }

    }

    // methods. defined in the prototype
}
// let t1 = new Task( {title: "test task"})
// let t12 = new Task( {project: "todo list projec", title: "test task"})

// Taskgroup / Heading
class TaskGroup {
    // Initialize with just title and with or without a group of tasks
    constructor( {title, tasks=[]} ) {
        this.title = title; // string. heading title
        this.tasks = tasks; //array. list of related tasks within the same project
    }

};

export { Task, TaskGroup }