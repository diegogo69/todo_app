// Another way could be
function enterKeyPressed(event, fn) {
    // If the user presses the "Enter" key on the keyboard
    const enterPressed = (event.key === "Enter");
    const shiftEnterPressed = (event.shiftKey && event.key === 'Enter');

    if (!enterPressed || shiftEnterPressed) { return }

    // Cancel the default action, if needed
    event.preventDefault();
    event.target.blur();
    // Trigger the button element with a click
    fn();
}

export { enterKeyPressed }