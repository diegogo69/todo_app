// PROJECTS MODULE
const PROJECTS = ( function() {

    // List of projects
    let projects;

    function set(value) {
        projects = value;
    }

    function get(index=null) {
        // If no index passed return whole array
        if (index === null) { return projects }
        return projects[index];
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

    // make projects private
    return {
        get, set, add, remove,
        addTaskToProject, indexOf,
        getTask,
        
    };

})();

export { PROJECTS }