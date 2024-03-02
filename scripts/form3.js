document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Access form elements
        let form = event.target;
        let formData = new FormData(form);

        // Display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    // Function to handle email input focusout
    function handleEmailFocusOut() {
        // Trigger form submission on email focusout
        form.dispatchEvent(new Event("submit"));
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);

    const emailInput = document.getElementById("email");
    emailInput.addEventListener("focusout", handleEmailFocusOut);
})


const password=document.querySelector("#password");
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

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}