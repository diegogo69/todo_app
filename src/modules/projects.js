// Project class
class Project {
    constructor( {title="Some project"} ) {
        this.title = title; // string
        this.tasks = []; // array
        this.description = ""; // string
        this.taskgroups = []; // array
        this.completed = false; // boolean
    }

    addTask(task) {
        this.tasks.push(task);
        task.project = this;
    }
}
// let p1 = new Project( {title: "Test project"});
// p1.addTask(t1);
// p1.tasks
// t1.project.title

export { Project }