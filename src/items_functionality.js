// Todo item / task

class Task {

}

// Project class
// Add project. pretty simple, just add a title
// Edit project. module with functionality to handle a project details
// Delete project
// Mark complete
const project = {

    // ADD vs SET
        // Add non existing functionality. New items and created Instances
        // Use set for already existing data that may vary. mostly properties
        // To avoid the redundant use of Add / Edit methods in some props

    // constant
    // Add project title
    // Probably use SET
    title, // string

    // variable
    // Add. Relate task to a project
    // Delete. delete task from the array. Not the same as mark completed
    // Should this be even be here. or just the task's project prop might work?
    tasks, // array

    // variable
    // Add. project description
    // Probably use SET
    description, // string

    // Add. Relate tasks within a project
    // Should this be its own prop. Or check the task's group prop might work?
    taskgroups, // array

    // Set completed state of the project
    completed, // boolean
}

// Task class
const task = {

    // constant. idk. probably constant, no urge need for it to be variable
    // Add task title.
    // Probably use set
    title, // title

    // variable
    // Add task additional description
    // Definitely SET
    notes, // string

    // variable probably. 
    // Add deadline date 
    // Probably SET
    dueDate, // Date obj stored in json as string

    // variable
    // Add priority
    // Definitely SET
    priority, // number. 1 2 3 

    // variable
    // Add. relate group of subtasks within the task
    // Delete. Use array in task, or the subtask's task prop might do?
    subtasks, // array

    // constant definitely. actually no as it might start as default then assigned to a project
    // Add. relate project to wich the task belongs
    // probably SET
    project, // class

    // variable
    // Set completed state
    // Definitely SET
    completed, // boolean
}

// Taskgroup / Heading
// Create task group. Class
taskgroup = {
    title, // string. heading title
    tasks, //array. list of related tasks within the same project

};


// Subtask / checklist. Class
const subtask = {

    // variable prob. no definitely. double click on it and change it
    // Add subtask title. the task itself
    // Set
    title, // string

    // Constant
    // Set the task to wich it belongs
    // Either add it or delete it. nothing else
    task, // class

    // variable
    // Set completed state
    // Definitely set
    completed, // boolean
}