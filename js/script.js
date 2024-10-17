// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Login Form Validation
    const loginForm = document.querySelector('.login-form form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === "" || password === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Placeholder for login logic (e.g., check user credentials)
            alert("Login successful!");
        });
    }

    // Registration Form Validation
    const registerForm = document.querySelector('.register-form form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === "" || email === "" || password === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Simple email validation
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Placeholder for registration logic (e.g., save user data)
            alert("Registration successful!");
        });
    }

    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
            }

            // Placeholder for contact form logic (e.g., send message)
            alert("Message sent successfully!");
        });
    }

    // Email validation function
    function validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    // Additional interactive features can be added here
});
