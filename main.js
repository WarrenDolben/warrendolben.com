

$(document).on('click', function() {
		$('#hamburger').on('click', function() {
			$('#side-menu').css({width: '250px'});
			$('#main').css({marginLeft: '250px'});
	});

		$('#side-menu__close').on('click', function() {
			$('#side-menu').css({width: '0px'});
			$('#main').css({marginLeft: '0px'});
	});

});

const inputField = document.getElementById('name');
const originalPlaceholder = inputField.getAttribute('placeholder');

inputField.addEventListener('focus', function () {
	this.setAttribute('placeholder', '');
});
inputField.addEventListener('blur', function() {
	this.setAttribute('placeholder', originalPlaceholder);
});

const inputField2 = document.getElementById('cell');
const originalPlaceholder2 = inputField2.getAttribute('placeholder');	

inputField2.addEventListener('focus', function () {
	this.setAttribute('placeholder', '');
});
inputField2.addEventListener('blur', function() {
	this.setAttribute('placeholder', originalPlaceholder2);
});

const inputField3 = document.getElementById('email');						
const originalPlaceholder3 = inputField3.getAttribute('placeholder');

inputField3.addEventListener('focus', function () {
	this.setAttribute('placeholder', '');
});
inputField3.addEventListener('blur', function() {
	this.setAttribute('placeholder', originalPlaceholder3);
});

const inputField4 = document.getElementById('message');		
const originalPlaceholder4 = inputField4.getAttribute('placeholder');

inputField4.addEventListener('focus', function () {
	this.setAttribute('placeholder', '');
});
inputField4.addEventListener('blur', function() {
	this.setAttribute('placeholder', originalPlaceholder4);
});
