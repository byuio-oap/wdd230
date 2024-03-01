
/*Verfiy Passwords*/
const password=document.querySelector("#password");
const confirmpassword=document.querySelector("#confirmPassword");
const message=document.querySelector("#passwordMatchMessage");

confirmpassword.addEventListener("focusout",checkPasswordSame);

function checkPasswordSame(){
    if (password.value !== confirmpassword.value)
    {
        alert('Passwords do not match. Please try again.');
        password.value="";
        confirmpassword.value="";
        password.focus();

    } else{
        message.display="none";
    }
}

/*Page Rating*/
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}