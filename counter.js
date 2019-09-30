
var numClick = 0;
var numMouseOver = 0;

function countClick(){

	numClick++;
	document.getElementById('resultClick').innerHTML = "Nombre de clicks : " + numClick;

}

function countMouseOver(){

	numMouseOver++;
	document.getElementById('resultMouseOver').innerHTML = "Nombre de mouseovers : " + numMouseOver;

}