var i = 0;

var images = [];

var time = 3000;

images[0] = './pic2.jpg';
images[1] = './pic3.jpg';
images[2] = './pic4.jpg';
images[3] = './pic5.jpg';

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;
