const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
	if (window.scrollY < 500) {
		navbar.classList.add('nav-inicio');
	} else {
		navbar.classList.remove('nav-inicio');
	}
};
