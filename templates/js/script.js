// IR PARA LINK COM ESPAÇAMENTO E ANIMAÇÃO
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top - 100
	}, 500);
})
// ENCOLHER MENUS
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		document.getElementById("menu_principal").classList.add("encolhido");
	}else{
		document.getElementById("menu_principal").classList.remove("encolhido");
	}
}
// ABRIR E FECHAR DIVS
function open_div(id){
	document.getElementById(id).style.display = "block";
	document.getElementById(id).classList.add("show");
	document.getElementById(id).classList.remove("hide");
	scrollPosition = window.pageYOffset;
	document.body.style.position = "fixed";
}
function close_div(id){
	document.getElementById(id).classList.remove("show");
	document.getElementById(id).classList.add("hide");
	setTimeout(function(){ document.getElementById(id).style.display = "none"; }, 450);
	document.body.style.position = "relative";
	window.scrollTo(0, scrollPosition);
}