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

function paviPooClick() {
    const opacityLevel = 0.25
    document.getElementById("paviTreasureChest").src = "../img/pavipoo/pp1.jpg";
    document.getElementById("paviOpacity1").style.opacity = opacityLevel;
    document.getElementById("paviOpacity2").style.opacity = opacityLevel;
    document.getElementById("paviOpacity3").style.opacity = opacityLevel;
    document.getElementById("paviOpacity4").style.opacity = opacityLevel;
    document.getElementById("paviOpacity5").style.opacity = opacityLevel;
    document.getElementById("paviOpacity6").style.opacity = opacityLevel;
    document.getElementById("paviOpacity8").style.opacity = opacityLevel;
    document.getElementById("paviOpacity9").style.opacity = opacityLevel;
    document.getElementById("paviOpacity10").style.opacity = opacityLevel;

}