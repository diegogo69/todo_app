// Get the input field
const input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    const enterPressed = (event.key === "Enter");
    if (!enterPressed) { return }

    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
});


// Another way could be
function enterKeyPressed(event, fn) {
    // If the user presses the "Enter" key on the keyboard
    const enterPressed = (event.key === "Enter");
    if (!enterPressed) { return }

    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    fn();
}