const TASKS = ( function() {
    let tasks;

    function get() {
        return tasks;
    };

    function set(value) {
        tasks = value;
    }

    function add(task) {
        tasks.push(task);
        return tasks.indexOf(task);
    }

    function remove(task) {
        let index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
    }

    function indexOf(task) {
        return tasks.indexOf(task);
    }

    return {
        get, set, add, remove,
        indexOf,
    }
} )();

export { TASKS }