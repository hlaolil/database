document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded successfully!"); // Debugging message

    const form = document.querySelector("form");
    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop default form submission
        console.log("Form submitted!"); // Debugging message

        // Collect form data
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            enquiryType: document.getElementById("membership").value,
            message: document.getElementById("organization-description").value || "N/A",
            timestamp: new Date().toISOString()
        };

        console.log("Collected data:", formData); // Debugging message

        // Get existing entries
        let entries = JSON.parse(localStorage.getItem("entries")) || [];

        // Add new entry
        entries.push(formData);

        // Save back to localStorage
        localStorage.setItem("entries", JSON.stringify(entries));

        console.log("Data stored in localStorage! Redirecting..."); // Debugging message

        // Redirect to thank you page
        window.location.href = "thankyou.html";
    });
});
