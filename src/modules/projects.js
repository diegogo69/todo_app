const projects = ( function() {

    // List of projects
    let projects = [];

    // Add project from projects
    function addProject(project) {
        projects.push(project);
    }

    // Remove project from projects
    function removeProject(project) {
        let index = projects.indexOf(project);
        if (index > -1) {
            projects.splice(index, 1);
        }
    }

    function getProjects() {
        // Copy of list of projects array
        let arr = [];
        for (let project of projects) {
            arr.push(project);
        }
        return arr;
    }

    return { addProject, removeProject, getProjects };

})();

export { projects }