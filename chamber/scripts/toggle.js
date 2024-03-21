// JavaScript for dark mode toggle
//const toggleSwitch = document.getElementById("dark-mode-toggle");
//const changeImageLarge=document.querySelector("changeImageL");
//toggleSwitch.onclick=function(){
 //   document.body.classList.toggle("dark-theme")
  //  changeImageLarge.src="images/large_footer_logo3_300x150.webp";
//}
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const imageS = document.querySelector('.changeImageS');
        const imageM = document.querySelector('.changeImageM');
        const imageL = document.querySelector('.changeImageL');

        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            // Toggle images based on dark mode status
            if (document.body.classList.contains('dark-mode')) {
                imageS.srcset = "images/small_footer_logo3_200x100.webp";
                imageM.srcset="images/medium_footer_logo3_205x103.webp";
                imageL.src="images/large_footer_logo3_210x105.webp";
            } else {
                imageS.srcset = "images/small_logo_200x89.webp";
                imageM.srcset = "images/medium_logo_205x92.webp";
                imageL.src = "images/large_logo_210x94.webp";
            }
        });





/*const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
*/
