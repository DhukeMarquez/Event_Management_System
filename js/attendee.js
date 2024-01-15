function addRequest() {
    // Get form data
    var eventData = {
        event: document.getElementById("event").value,
        eventDate: document.getElementById("eventDate").value,
        studentNumber: document.getElementById("studentNumber").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        yearSection: document.getElementById("yearSection").value,
        email: document.getElementById("email").value
    };

    // Use AJAX to send the data to the server
    $.ajax({
        type: "POST",
        url: "/submit_request",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(eventData),
        success: function(response) {
            alert(response.message);
            if (response.status === "accepted") {
                // Redirect to View Attendee Request page if request is accepted
                window.location.href = "/view_attendee_request";
            } else {
                // Optionally, handle declined request (if needed)
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function clearForm() {
    // Reset the form
    document.getElementById("attendeeForm").reset();
}
