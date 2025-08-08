document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".register-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Get form values
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (!fullname || !email || !username || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert("Registration successful!");
        form.reset(); 

    
    });
});
