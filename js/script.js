function openExternalUrl(url) {
    window.open(url)
}

function toggleNavigationMenu() {
    var navMenu = document.getElementById("navmenu");
    navMenu.classList.toggle("navigation-inactive");

    var mobileNavMenu = document.getElementById("navmenumobile");
    mobileNavMenu.classList.toggle("navigation-mobile-active");
}

function downloadResume() {
    window.open("docs/crai_resume_public.pdf")
}
