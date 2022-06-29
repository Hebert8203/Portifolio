class MobileNavbar {
		constructor(MobileMenu, NavList, NavLinks) {
			this.MobileMenu = document.querySelector(MobileMenu);
			this.Navlist = document.querySelector(NavList);
			this.Navlinks = document.querySelectorAll(NavLinks);
			this.activeClass = "active";
}

	HandleClick()