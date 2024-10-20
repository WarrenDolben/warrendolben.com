var i = 0;

var images = [];

var time = 3000;

images[0] = './festifriends-min.jpg';
images[1] = './festifriends2-min.jpg';
images[2] = './thcc-min.jpg';
images[3] = './bean-min.jpg';
images[4] = './bubbean-min.jpg';
images[5] = './alpaca-min.jpg';
images[6] = './chairlift-min.jpg';
images[7] = './bubmtn-min.jpg';
images[8] = './snowparking-min.jpg';
images[9] = './falmouthfest-min.jpg';
images[10] = './boatbubs-min.jpg';
images[11] = './peacebeach-min.jpg';

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
