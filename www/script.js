$(document).ready(function() {
    // Assuming your form has an id="loginForm"
    $("#loginForm").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        var formData = {
            email: $("#email").val(), // Assuming your email input has an id="email"
            password: $("#password").val() // Assuming your password input has an id="password"
        };

        // Send the data using a jQuery POST request
        $.post("/check-credentials", formData, function(response) {
            if (response.valid) {
                // Handle successful login, maybe redirect to another page or show a success message
                window.location.href = "/account"; // Redirect to account page on successful login
            } else {
                // Show the error message
                $("#errormsg").addClass("showmessage").removeClass("hidemessage");
            }
        });
    });
});
