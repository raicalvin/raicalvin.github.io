class NavigationMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navmenu" class="container container-padding navigation">
                <ul class="menu">
                    <li><a href="pages/videographypage.html" class="typ-body-text menu-item">Videography</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="pages/simmysigmapage.html" class="typ-body-text menu-item">Simmy Sigma</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="pages/archivepage.html" class="typ-body-text menu-item">Archive</a></li>
                </ul>
                <img onclick="toggleNavigationMenu()" class="menu-hamburger" src="icons/menu-bar-icon.svg" />
            </nav>
        `
    }
}
customElements.define('navigation-menu', NavigationMenu)

class NavigationMenuMobile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navmenumobile" class="navigation-mobile">
                <ul class="menu-mobile">
                    <li onclick="toggleNavigationMenu()"><a href="pages/videographypage.html" class="typ-body-text menu-item">Videography</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="pages/simmysigmapage.html" class="typ-body-text menu-item">Simmy Sigma</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="pages/archivepage.html" class="typ-body-text menu-item">Archive</a></li>
                </ul>
                <img onclick="toggleNavigationMenu()" class="mobile-menu-close" src="icons/close_icon_white.svg" />
            </nav>
        `
    }
}
customElements.define('navigation-menu-mobile', NavigationMenuMobile)

class NavigationMenuSubpage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navmenu" class="container navigation">
                <ul class="menu">
                    <li><a href="../index.html" class="typ-body-text menu-item">Home</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="videographypage.html" class="typ-body-text menu-item">Videography</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="simmysigmapage.html" class="typ-body-text menu-item">Simmy Sigma</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="contactpage.html" class="typ-body-text menu-item">Contact</a></li>
                    <li class="typ-body-text menu-item">|</li>
                    <li><a href="archivepage.html" class="typ-body-text menu-item">Archive</a></li>
                </ul>
                <img onclick="toggleNavigationMenu()" class="menu-hamburger" src="../icons/menu-bar-icon.svg" />
            </nav>
        `
    }
}
customElements.define('navigation-menu-subpage', NavigationMenuSubpage)

class NavigationMenuSubpageMobile extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navmenumobile" class="navigation-mobile">
                <ul class="menu-mobile">
                    <li onclick="toggleNavigationMenu()"><a href="../index.html" class="typ-body-text menu-item">Home</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="videographypage.html" class="typ-body-text menu-item">Videography</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="simmysigmapage.html" class="typ-body-text menu-item">Simmy Sigma</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="contactpage.html" class="typ-body-text menu-item">Contact</a></li>
                    <li onclick="toggleNavigationMenu()"><a href="archivepage.html" class="typ-body-text menu-item">Archive</a></li>
                </ul>
                <img onclick="toggleNavigationMenu()" class="mobile-menu-close" src="../icons/close_icon_white.svg" />
            </nav>
        `
    }
}
customElements.define('navigation-menu-subpage-mobile', NavigationMenuSubpageMobile)