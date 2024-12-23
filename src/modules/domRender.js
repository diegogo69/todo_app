const domRender = ( function() {
    const editorNode = document.querySelector('.editor');
    const overviewNode = document.querySelector('#overview');
    const toolProjectsNode = document.querySelector('#tool-projects-wrapper');

    function toolProjects(projectsUl) {
        clearNode(toolProjectsNode);
        toolProjectsNode.appendChild(projectsUl);
    }

    function editorForm(form) {
        clearNode(editorNode);
        editorNode.appendChild(form);
    }

    function projectWrapper(projectNode) {
        clearNode(overviewNode);
        overview.appendChild(projectNode)

    }

    function clearNode(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    return { toolProjects, editorForm, projectWrapper, };
} )();

export { domRender }