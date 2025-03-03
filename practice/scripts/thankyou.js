document.addEventListener("DOMContentLoaded", () => {
    const submissionDetails = document.getElementById("submission-details");
    const entries = JSON.parse(localStorage.getItem("entries")) || [];

    if (entries.length > 0) {
        submissionDetails.innerHTML = entries.map((entry, index) => `
            <div class="entry">
                <h3>Submission #${index + 1}</h3>
                <p><strong>First Name:</strong> ${entry.firstName}</p>
                <p><strong>Last Name:</strong> ${entry.lastName}</p>
                <p><strong>Email:</strong> ${entry.email}</p>
                <p><strong>Phone:</strong> ${entry.phone}</p>
                <p><strong>Enquiry Type:</strong> ${entry.enquiryType}</p>
                <p><strong>Message:</strong> ${entry.message}</p>
                <p><em>Submitted on: ${new Date(entry.timestamp).toLocaleString()}</em></p>
                <hr>
            </div>
        `).join(""); // Convert array into HTML
    } else {
        submissionDetails.innerHTML = `<p>No submissions found.</p>`;
    }
});
