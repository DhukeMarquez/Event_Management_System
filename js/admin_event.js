function addEvent() {
    // Code to add event and update the database
    // Display success message
    showSuccessMessage('Event Added Successfully');
}

function removeEvent(eventName) {
    // Code to remove event and update the database
    // Display success message
    showSuccessMessage('Event Removed Successfully');
}

function showEditEvents() {
    // Code to fetch and display existing events for editing/removing
    // You can use AJAX to fetch events from the server
    // Populate the "editEventsList" in the modal

    // Display the modal
    var modal = document.getElementById('editEventsModal');
    modal.style.display = 'block';
}

function closeModal() {
    // Close the modal
    var modal = document.getElementById('editEventsModal');
    modal.style.display = 'none';
}

function showSuccessMessage(message) {
    // Display success message
    var successMessage = document.getElementById('successMessage');
    successMessage.innerHTML = message;
    successMessage.style.display = 'block';

    // Hide the message after a few seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
}
