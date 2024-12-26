const domRender = ( function() {
    const editorNode = document.querySelector('.editor');
    const generalNode = document.querySelector('.general');
    const toolProjectsNode = document.querySelector('#tool-projects-wrapper');

    function toolProjects(projectsUl) {
        clearNode(toolProjectsNode);
        toolProjectsNode.appendChild(projectsUl);
    }

    function editorForm(form) {
        clearNode(editorNode);
        editorNode.appendChild(form);
        editorNode.querySelector('.form-title').focus();
    }

    function projectWrapper(projectNode) {
        clearNode(generalNode);
        generalNode.appendChild(projectNode)
    }


    function clearNode(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    return { toolProjects, editorForm, projectWrapper, };
} )();

export { domRender }