// TODO: NavigationMenuSubpage
// TODO: NavigationMenuSubpageMobile

class NavigationMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navmenu" class="navigation container">
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