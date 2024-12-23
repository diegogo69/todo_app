const domRender = ( function() {

    function toolProjects(projects) {
        clearNode(wrapper);
        const projectsUl = createToolProjects(projects);
        wrapper.appendChild(projectsUl);
    }

    function editorForm(form) {
        clearNode(editorNode);
        editorNode.appendChild(form);
    }

    function projectWrapper(projectNode) {
        clearNode(overview);
        overview.appendChild(projectNode)

    }
    return { toolProjects, editorForm, projectWrapper, };
} )();

export { domRender }