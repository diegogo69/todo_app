// Event handfler for content editable elements
const contentEdit = document.querySelector('#contentEdit');

// The input event fires just as we start typing
// But we want to emulate a change event
// To emulate we use both input and focusout events
let shouldFireChange = false;
contentEdit.addEventListener("input", function() {
    shouldFireChange = true;

    contentEdit.style.color = "red";
});

contentEdit.addEventListener("focusout", function() {
  if(shouldFireChange) {
    shouldFireChange = false;
    // add emulated 'onchange' code here
    contentEdit.style.backgroundColor = "yellow";
    
  }
});