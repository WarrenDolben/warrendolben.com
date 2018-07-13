
	function changeImage(event){
    event = event || window.event;
	
	var targetElement = event.target || event.srcElement;
	
	if(targetElement.tagName == "IMG") {
		document.getElementByID("mainImage").src = targetElement.getAttribute("src");
 }
	}