// PROJECTS MODULE
const PROJECTS = ( function() {

    // List of projects
    let projects;

    function set(value) {
        projects = value;
    }

    // Return truthy items only. Existing projects
    function get(index=null) {
        // If no index passed return whole array
        if (index === null) { 
            // Return only projects not deleted
            return projects.filter(project => project !== null)
        }
        return projects[index];
    }

    // Return all items. Existing and deleted projects
    function getAll(index=null) {
        // If no index passed return whole array
        if (index === null) {  return projects }
        // Else return specific project
        return projects[index];
    }

    // Add project from projects
    function add(project) {
        projects.push(project);
    }

    // Remove project from projects
    function remove(project) {
        const index = projects.indexOf(project);
        if (index > -1) { projects[index] = null }
    }

    // Index of some project within the array
    function indexOf(project) {
        return projects.indexOf(project);
    }

    function getTask(taskIndex, projectIndex) {
        return projects[projectIndex]["tasks"][taskIndex];
    }

    // make projects private
    return {
        get, set, add, remove,
        indexOf, getTask, getAll,
    };

})();

export { PROJECTS }