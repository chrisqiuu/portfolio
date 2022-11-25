// // console.log('Hello, World');

const menuBtn = document.querySelector('.hamburger');
const mediumNav = document.querySelector('.navbar-md ul');

menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('is-active');
	mediumNav.classList.toggle('is-active');
});