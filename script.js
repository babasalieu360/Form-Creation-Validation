document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get input elements
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Get and trim input values
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear previous validation styles
        usernameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
        passwordInput.style.borderColor = '';

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
            usernameInput.style.borderColor = '#dc3545';
        }

        // Validate email - using more robust regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push('Please enter a valid email address (e.g., user@example.com)');
            emailInput.style.borderColor = '#dc3545';
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
            passwordInput.style.borderColor = '#dc3545';
        }

        // Display feedback
        feedbackDiv.style.display = 'block';
        feedbackDiv.style.padding = '10px';
        feedbackDiv.style.borderRadius = '4px';
        feedbackDiv.style.marginTop = '10px';

        if (isValid) {
            // Success case
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';

            // Clear the form
            form.reset();

            // Optional: Submit form data to server here
            // Example: submitFormData(username, email, password);
        } else {
            // Error case
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#721c24';
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });
});