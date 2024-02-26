document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();

    // Get the last visit date from local storage
    const lastVisitString = localStorage.getItem("lastVisit");

    if (!lastVisitString) {
        // First visit
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        const lastVisitDate = new Date(lastVisitString);

        // Calculate the difference in milliseconds
        const timeDifference = currentDate - lastVisitDate;

        // Calculate the difference in days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            // Less than a day
            displayMessage("Back so soon! Awesome!");
        } else {
            // More than a day
            const message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
            displayMessage(message);
        }
    }

    // Save the current date to local storage
    localStorage.setItem("lastVisit", currentDate.toISOString());
});

function displayMessage(message) {
    const sidebarContent = document.querySelector(".visit-dates");
    sidebarContent.textContent = message;
}
