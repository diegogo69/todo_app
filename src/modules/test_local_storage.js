// Here is a function that detects whether localStorage is both supported and available:
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  
//   And here is how you would use it:

if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
  } else {
    // Too bad, no localStorage for us
  }

  


//   Testing whether your storage has been populated
if (!localStorage.getItem("bgcolor")) {
    populateStorage();
  } else {
    setStyles();
  }

//   we are testing to see whether the bgcolor item exists
// ; if not, we run populateStorage() to add the existing
//  customization values to the storage. If there are already
//  values there, we run setStyles() to update the page styling with the stored values.

// Note: You could also use Storage.length to test whether the storage object is empty or not.