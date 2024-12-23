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

    // make projects private
    return { get, set, add, remove, };

})();

export { PROJECTS }