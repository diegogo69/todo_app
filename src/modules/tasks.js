const TASKS = ( function() {
    let tasks;

    function get(index=null) {
        // If no index passed return whole array
        if (index === null) { 
            // Return only projects not deleted
            return tasks.filter(task => task !== null)
        }
        return tasks[index];
    };

    // Return all items. Existing and deleted projects
    function getAll(index=null) {
        // If no index passed return whole array
        if (index === null) { 
            // Return all tasks
            return tasks;
        }
        // Else return specific task
        return tasks[index];
    }

    function set(value) {
        tasks = value;
    }

    function add(task) {
        tasks.push(task);
        return tasks.indexOf(task);
    }

    function remove(task) {
        const index = tasks.indexOf(task);
        if (index > -1) { tasks[index] = null }

    }

    function indexOf(task) {
        return tasks.indexOf(task);
    }

    // TEST if a task is completed
    function isCompleted(task) {
        return (task !== null && task.completed === true)
    };

    // TEST if a task is NOT completed
    function isPlanned(task) {
        return (task !== null && task.completed === false)
    };

    // Return all completed tasks
    function getCompleted(){
        return tasks.filter(isCompleted);
    }

    // Return non completed tasks
    function getPlanned() {
        return tasks.filter(isPlanned)
    }

    return {
        get, set, add, remove,
        indexOf, getCompleted, getPlanned,
        getAll,
        
    }
} )();

export { TASKS }