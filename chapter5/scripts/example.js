// window.onload = function() {
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }
window.onload = function() {
	// var para = document.createElement("p");
	// // var info = "nodeName: ";
	// // info += para.nodeName;
	// // info += "nodeType: ";
	// // info += para.nodeType;
	// // alert(info);
	// var testdiv = document.getElementById("testdiv");
	// testdiv.appendChild(para);
	// var txt = document.createTextNode("Hello world");
	// para.appendChild(txt);
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt1);
	para.appendChild(emphasis);
	emphasis.appendChild(txt2);
	para.appendChild(txt3);
	var testdiv	= document.getElementById("testdiv");
	testdiv.appendChild(para);
}
function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}