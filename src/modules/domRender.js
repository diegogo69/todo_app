const domRender = ( function() {
    const editorNode = document.querySelector('.editor');
    const generalNode = document.querySelector('.general');
    const toolProjectsNode = document.querySelector('#tool-projects-wrapper');

    function toolProjects(projectsUl) {
        clear.node(toolProjectsNode);
        toolProjectsNode.appendChild(projectsUl);
    }

    function editorForm(form) {
        clear.editorNode();
        editorNode.appendChild(form);
        editorNode.querySelector('.form-title').focus();
    }

    function projectWrapper(projectNode) {
        clear.generalNode();
        generalNode.appendChild(projectNode)
    }

    const clear = {
        node(node) {
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
        },

        generalNode() {
            this.node(generalNode);
        },

        editorNode() {
            this.node(editorNode);
        },
    }

    return { toolProjects, editorForm, projectWrapper,
        clear,
     };
} )();

export { domRender }