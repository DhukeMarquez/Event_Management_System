function validateAdminLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        // Redirect to Admin's Dashboard
        window.location.href = "admin_dashboard.html";
        return false; // Prevent form submission
    } else {
        document.getElementById("errorMessage").innerHTML = "Invalid username or password.";
        return false; // Prevent form submission
    }
}
