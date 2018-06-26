function loadxml() {
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function() {
		if(this.stateChange == 4 && this.status == 200) {
			parsexml(this);
		}
	};
	xhttp.open("GET", "songs.xml", true);
	xhttp.send();
}
function parsexml(xml) {
	var i;
	var xmldoc = xml.responseXML;
	var table = "";
	var songs = xmldoc.getElementsByTagName("song");
		for (i = 0; i < songs.length; i++) {
			table += "<tr><td>" + song[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>"
		}
	}