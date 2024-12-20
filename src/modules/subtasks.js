// Subtask / checklist class
class Subtask {
    constructor( {title, task} ) {
        this.title = title; // string
        this.task = task; // class
        this.completed = false; // boolean
    }

    // STATIC METHODS
    
    // If it's not associated with a task it does not get create
    static newSubtask( {title, task} ) {
        // if not task. no subtask
        if (!task) { 
            console.log("CANNOT CREATE A SUBTASK WITHOUT AN ASSOCIATED TASK")
            return 
        }
        let subtask = new Subtask( {title, task} );
        return subtask // Optimize
    }

    // REGULAR METHODS

    // --- TASK ---
    // This probably shouldn't be editable
    // Task can only get sey at initialization
    setTask(task) {
        this.task = task;
    }

    // --- COMPLETED ---

    setComplete(completed) {
        this.completed = completed;
    }

}

export { Subtask }