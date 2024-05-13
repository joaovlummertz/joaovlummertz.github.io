let hamburger = document.querySelector('.hamburger');
let hamburgerLines = document.querySelectorAll('.line');
let menu = document.querySelector('.sidebar');
let menuOpen = false;
let mediaQuery = window.matchMedia("(max-height: 400px)");

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
    menuOpen = !menuOpen;

    if (!mediaQuery.matches) {
        if (menuOpen) {
            hamburger.style.position = "fixed";
        } else {
            hamburger.style.position = "static";
        }
    }

    for (let i=0; i < hamburgerLines.length; i++) {
        let line = hamburgerLines[i];
        if (menuOpen) {
            line.style.backgroundColor = "white";
        } else {
            line.style.backgroundColor = "#333";
        }
    }
});

// This event closes the sidebar (hamburger menu) when the user turns the device from portrait to landscape mode (and vice-versa) 
// in order to avoid undesired behavior
screen.orientation.addEventListener("change", function() {
    if (menuOpen) {
        menuOpen = false;
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('active');
        for (let i=0; i < hamburgerLines.length; i++) {
            let line = hamburgerLines[i];
            line.style.backgroundColor = "#333";
        }
        hamburger.style.position = "static";
    }
})
