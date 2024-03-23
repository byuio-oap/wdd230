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




