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
    const sidebarContent = document.getElementById('visit-dates');
    sidebarContent.textContent = message;
}
/**Check password */

/*const password=document.querySelector("#password");
const confirmpassword=document.querySelector("#confirmPassword");
const message=document.querySelector("#passwordMatchMessage");

confirmpassword.addEventListener("focusout",checkPasswordSame);

function checkPasswordSame(){
    if (password.value !== confirmpassword.value)
    {
        message.textContent="Passwords do not match. Please try again.";
        password.value="";
        confirmpassword.value="";
        password.focus();

    } else{
        message.display="none";
    }
}

document.getElementById('email').addEventListener('focusout', function () {
    validateEmail();
  });

  function validateEmail(){
    const emailInput=document.getElementById('email');
    const emailError = document.getElementById('passwordMatchMessage');

    if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid byui.edu email address.";
      } else {
        emailError.textContent = "";
      }

  }*/


