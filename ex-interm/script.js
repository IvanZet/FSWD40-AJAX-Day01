function loadxml() {
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			parsexml(this);
		}
	};
	xhttp.open("GET", "songs.xml", true);
	xhttp.send();
}
function parsexml(xml) {
	var i;
	var xmldoc = xml.responseXML;
	console.log(xml);
	var table = "";
	var songs = xmldoc.getElementsByTagName("song");
		for (i = 0; i < songs.length; i++) {
			table += "<tr><td>" + songs[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</td><td>"
			+ songs[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue + "</td><td>"
			+ songs[i].getElementsByTagName("country")[0].childNodes[0].nodeValue + "</td><td>"
			+ songs[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue + "</td><td>"
			+ songs[i].getElementsByTagName("year")[0].childNodes[0].nodeValue + "</td><td>";
		}
	document.getElementById("content").innerHTML = table;
	}