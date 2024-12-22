// Another way could be
function enterKeyPressed(event, fn) {
    // If the user presses the "Enter" key on the keyboard
    const enterPressed = (event.key === "Enter");
    const shiftEnterPressed = (event.shiftKey && event.key === 'Enter');

    // ignore shift + enter or any other non enter key
    if (!enterPressed || shiftEnterPressed) { return }

    // Cancel the default action, if needed
    event.preventDefault();
    // Lose focus
    event.target.blur();
    // Execute callback function
    fn();
}

export { enterKeyPressed }