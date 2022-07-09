$(window).scroll(function(){
	if($(document).scrollTop() > 50) {
		$('nav').addClass('navbar-default1') & addClass('logo-navbar1');
	}
	else {
		$('nav').removeClass('navbar-default1') & removeClass('logo-navbar1');
	}
});