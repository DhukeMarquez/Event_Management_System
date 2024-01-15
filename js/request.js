document.addEventListener("DOMContentLoaded", function () {
    // Sample data (replace with actual data from the server)
    var sampleRequests = [
        {
            event: "Sample Event 1",
            eventDate: "2024-01-01",
            studentNumber: "123456",
            name: "John Doe",
            age: 25,
            yearSection: "Year 3 - Section A",
            email: "john.doe@example.com"
        },
        {
            event: "Sample Event 2",
            eventDate: "2024-02-01",
            studentNumber: "789012",
            name: "Jane Smith",
            age: 22,
            yearSection: "Year 2 - Section B",
            email: "jane.smith@example.com"
        }
    ];

    // Function to populate the table with attendee requests
    function populateRequestsTable(requests) {
        var tableBody = document.getElementById("attendeeRequestsTableBody");

        // Clear existing rows
        tableBody.innerHTML = "";

        // Add new rows
        requests.forEach(function (request) {
            var row = tableBody.insertRow();

            var keys = Object.keys(request);
            keys.forEach(function (key) {
                var cell = row.insertCell();
                cell.textContent = request[key];
            });

            // Add action button (Accept/Decline) - you can customize this part
            var actionCell = row.insertCell();
            actionCell.innerHTML = '<button onclick="acceptRequest()">Accept</button> <button onclick="declineRequest()">Decline</button>';
        });
    }

    // Call the function with the sample data
    populateRequestsTable(sampleRequests);
});

function acceptRequest() {
    // Implement logic to handle accepting a request (you can communicate with the server here)
    alert("Request accepted!");
}

function declineRequest() {
    // Implement logic to handle declining a request (you can communicate with the server here)
    alert("Request declined!");
}
