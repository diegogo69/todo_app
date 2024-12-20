// Draw for base functional todo app
// Priority. 1 low. 2 normal. 3 high. 4 urgent


// ----- TASKS ------
function createTask( {title, project, dueDate, priority} ) {
    let task = new Task( {title, project, dueDate, priority} );
    return task // Optimize
}

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

    // methods. defined in the prototype
}
// let testTask = new Task( {title: "test task"})
// let testTask2 = new Task( {project: "todo list projec", title: "test task"})


// ----- PROJECTS -------

function createProject( {title} ) {
    let project = new Project( {title} );
    return project;

}
// Project class
class Project {
    constructor( {title="Some project"} ) {
        this.title = title; // string
        this.tasks = []; // array
        this.description = null; // string
        this.taskgroups = null; // array
        this.completed = false; // boolean
    }

    addTask(task) {
        this.tasks.push(task);
        task.project = this;
    }
}
// let testproject = new Project( {title: "Test project"});
// testproject.addTask(testTask);
// testproject.tasks
// testTask.project.title


// Taskgroup / Heading
class TaskGroup {
    title; // string. heading title
    tasks; //array. list of related tasks within the same project

};

// Subtask / checklist class
class Subtask {
    title; // string
    task; // class
    completed; // boolean
}