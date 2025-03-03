document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            enquiryType: document.getElementById("membership").value,
            message: document.getElementById("message").value || "N/A",
            timestamp: new Date().toISOString()
        };

        // Get existing entries from localStorage
        let entries = JSON.parse(localStorage.getItem("formEntries")) || [];

        // Append new entry
        entries.push(formData);

        // Save updated entries back to localStorage
        localStorage.setItem("formEntries", JSON.stringify(entries));

        // Redirect to thank you page
        window.location.href = "thankyou.html";
    });
});
