function showPic(whichPic) {
	if(!document.getElementById("placeholder")) return false;
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")) {
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	// alert(body_element.childNodes.length);
	// alert(body_element.nodeType);
	alert(description.firstChild.nodeValue);
}

function prepareGallrty() {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		console.log('aaa')
		links[i].onclick = function () {
			return !showPic(this);
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof oldonload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}