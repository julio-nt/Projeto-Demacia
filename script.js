function mudarPagina(pagina) {
	if (pagina == 'pagina2') {
		document.querySelector('.pagina-2').style.display = 'block';
		document.querySelector('.pagina-1').style.display = 'none';
	}
	if (pagina == 'pagina1') {
		document.querySelector('.pagina-1').style.display = 'block';
		document.querySelector('.pagina-2').style.display = 'none';
	}
}
