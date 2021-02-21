
$(document).ready(function() {
	$('#hamburger').on('click', function() {
		$('#side-menu').css({width: '250px'});
		$('#main').css({marginLeft: '250px'});
	});

	$('#btn-close').on('click', function() {
		$('#side-menu').css({width: '0px'});
		$('#main').css({marginLeft: '0px'});
	});

});
