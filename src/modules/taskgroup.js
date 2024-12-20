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

        // This does not works bcs this is an static class method
        // So this referes to the class, not the tasakgroup instance

        // Set taskgroup property on tasks
        // for (let task of tasks) {

        //     if (!(typeof task === 'object')) { task = {title: task} }

        //     task.taskgroup = this;
        // }

        return taskgroup;
    }

    // Set title

    // Add tasks to taskgroup

};

export { TaskGroup }