// Taskgroup / Heading
class TaskGroup {
    // Initialize with just title and with or without a group of tasks
    constructor( {title, tasks=[]} ) {
        this.title = title; // string. heading title
        this.tasks = tasks; //array. list of related tasks within the same project
    }

    // Create taskgroup
    // Initialize with just title and with or without a group of tasks
    static newTaskgroup( {title, tasks=[]} ) {
        // Create taskgroup
        let taskgroup = new TaskGroup( {title, tasks} );
        return taskgroup;
    }

};

export { TaskGroup }