// Todo item / task

class Task {

}

// Project class
const project = {
    title, // string
    tasks, // array
    description, // string
    taskgroups, // array
    completed, // boolean
}

// Task class
const task = {
    title, // title
    notes, // string
    dueDate, // Date obj stored in json as string
    priority, // number. 1 2 3 
    subtasks, // array
    project, // class
    completed, // boolean
}

// Taskgroup / Heading
taskgroup = []; // array

// Subtask / checklist class
const subtask = {
    title, // string
    task, // class
    completed, // boolean
}