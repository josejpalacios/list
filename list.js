var enterPressed = document.getElementById("new-item");
// Add event listener for Enter button pushed
enterPressed.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    // Prevent event function from running
    event.preventDefault();
    // "Click" add button
    document.getElementById("add-button").click();
  }
});

function getUsersInput() {
    // Function for getting user's input

    // Get user's input
    var usersInput = document.getElementById("new-item").value;
    // Return user's input
    return usersInput;
}

function getCurrentList() {
    // Function for getting user's list

    // Get user's current list
    var currentList = document.getElementById("current-list");
    // Return user's list
    return currentList;
}

function getCurrentListLength() {
    // Function for getting length of user's list

    // Get length of user's current list
    var currentList = getCurrentList();
    // Return list of length
    return currentList.childNodes.length;
}

function createItemId() {
    // Function for create item id

    // Get length of user's list
    var currentListLength = getCurrentListLength();
    // Create id for item
    var newId = "item-number-" + currentListLength;
    // Return id created
    return newId;
}

function createTextNode(usersInput) {
    // Function for creating H1 tag with user's input

    // Create a H1 tag with user's input
    var textNode = document.createElement("H1");
    // Set H1 text to user's input
    textNode.innerHTML = usersInput;
    // Return h1 tag created
    return textNode;
}

function createDeleteButton(itemId) {
    // Function for creating delete button using item id

    // Create button tag to delete item
    var deleteButton = document.createElement("BUTTON");
    // Set text to X
    deleteButton.textContent = "X";
    // Add function to button
    deleteButton.setAttribute("onclick", "removeItemById('" + itemId + "')");
    // Return button created
    return deleteButton;
}

function emptyInputBar() {
    // Function to clear our text box

    // Clear out user's text box
    document.getElementById("new-item").value = "";
}

function createItemRow(usersInput) {
    // Function to create div tag for user's item using user's input

    // Create 1st div tag
    var newRow = document.createElement("DIV");
    // Set class of 1st div tag to row
    newRow.className = "row";
    // Set id of 1st div to new id created
    newRow.id = createItemId();

    // Create 2nd div tag
    var usersInputDisplay = document.createElement("DIV");
    // Set 2nd div class to col-11
    usersInputDisplay.className = "col-11";
    // Append H1 tag created to 2nd div tag
    usersInputDisplay.appendChild(createTextNode(usersInput));

    // Append 2nd div tag to 1st div tag
    newRow.appendChild(usersInputDisplay);

    // Create 3rd div tag
    var removeButton = document.createElement("DIV");
    // Set class of 3rd div tag to col-1
    removeButton.className = "col-1";
    // Append button created to 3rd div tag
    removeButton.appendChild(createDeleteButton(newRow.id));

    // Append 3rd div tag to 1st div tag
    newRow.appendChild(removeButton);

    // Return 1st div tag created
    return newRow;
}

function removeItemById (itemId) {
    // Function to remove item using given item id

    // Get item using item id
    var itemToRemove = document.getElementById(itemId);
    // Remove item from list
    itemToRemove.parentNode.removeChild(itemToRemove);
}

function addItemToList() {
    // Function to add user's input to list

    // Get user's input
    var usersInput = getUsersInput();
    // If user's input is empty
    if (usersInput == "") {
        // Alert user message
        alert("Please enter an item to add to your list");
    } else {
        // Else get user's current list
        var currentList = getCurrentList();
        // Create new div tag with user's input
        var newRow = createItemRow(usersInput);
        // Append div tag to user's list
        currentList.appendChild(newRow);
        // Empty text bar
        emptyInputBar();
    }
}