// PROJECTS MODULE
const PROJECTS = ( function() {

    // List of projects
    let projects;

    function set(value) {
        projects = value;
    }

    function get() {
        return projects;
    }

    // Add project from projects
    function add(project) {
        projects.push(project);
    }

    // Remove project from projects
    function remove(project) {
        let index = projects.indexOf(project);
        if (index > -1) {
            projects.splice(index, 1);
        }
    }

    // Index of some project within the array
    function indexOf(project) {
        return projects.indexOf(project);
    }

    function getTask(taskIndex, projectIndex) {
        return projects[projectIndex]["tasks"][taskIndex];
    }

    // Add task to project. xd
    function addTaskToProject(task, projectIndex) {
        projects[projectIndex]["tasks"].push(task);
        console.log('Task added to default project SUCCESSFULLY');
    }

    // Toggle task complete
    function taskCompleted(taskIndex, projectIndex) {
        const task = projects[projectIndex]["tasks"][taskIndex];
        task.completed = !task.completed;
        // true or false
        return task.completed;

    }

    // make projects private
    return {
        get, set, add, remove,
        addTaskToProject, indexOf, taskCompleted,
        getTask,
        
    };

})();

export { PROJECTS }