const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
	if (window.scrollY < 500) {
		navbar.classList.add('nav-inicio');
	} else {
		navbar.classList.remove('nav-inicio');
	}
};
//SCRIPT DE MUDANÇA DE PAGINA DAS IMAGENS
/*
const pagina1 = document.querySelector('.pagina-1');
const pagina2 = document.querySelector('.pagina-2');
const pagina3 = document.querySelector('.pagina-3');
const mudarPagina = function (page) {
	// `pagina${page}.classList.add('pagina-${page}')`;

	if (page == 2) {
		pagina3.classList.add('pagina-3');
		pagina1.classList.add('hide');
		pagina2.classList.add('hide');
		pagina1.classList.remove('pagina-1');
		pagina2.classList.remove('pagina-2');
		pagina3.classList.remove('start-hidden');
	} else if (page == 1) {
		pagina1.classList.add('pagina-1');
		pagina2.classList.add('pagina-2');
		pagina3.classList.add('hide');
		pagina3.classList.remove('pagina-3');
	} else if (page == 3) {
		pagina3.classList.add('pagina-3');
		pagina1.classList.add('hide');
		pagina2.classList.add('hide');
		pagina1.classList.remove('pagina-1');
		pagina2.classList.remove('pagina-2');
		pagina3.classList.remove('start-hidden');
	}
};
*/
