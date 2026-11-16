
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const selectedEvent = document.getElementById("event").value;

    const message = document.getElementById("message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (name.length < 3) {
        message.textContent = "Enter a valid name (at least 3 characters).";
        message.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (!phonePattern.test(phone)) {
        message.textContent = "Enter a valid 10-digit Indian phone number.";
        message.style.color = "red";
        return;
    }

    if (selectedEvent === "") {
        message.textContent = "Please select an event.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    this.reset();
});
