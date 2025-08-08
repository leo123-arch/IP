document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".register-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert("Login successful! (Demo)");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
