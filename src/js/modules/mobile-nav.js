function mobileNav() {
	// Mobile nav button
	const BURGER = document.querySelector('.burger');
	const nav = document.querySelector('.nav');
	const menuIcon = document.querySelector('.nav-icon');

	BURGER.onclick = function () {
		nav.classList.toggle('active');
		BURGER.classList.toggle('close');
		document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;