// // console.log('Hello, World');

// hamburger collapse-expand
const menuBtn = document.querySelector('.hamburger');
const mediumNav = document.querySelector('.navbar-md ul');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('is-active');
	mediumNav.classList.toggle('is-active');
});

// header reveal background
const navScroll = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if (window.scrollY >= 60) {
		navScroll.classList.add('navbar-scroll-at-60');
	} else if (window.scrollY < 60) {
		navScroll.classList.remove('navbar-scroll-at-60');
	}
});