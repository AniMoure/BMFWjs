//Affiche une pop-up au bout de 10 secondes
function myFunction() {
	alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
}
window.setTimeout(myFunction, 10000);

var myButton = document.querySelector('button');
var myBody = document.querySelector('body');
var myPar = document.querySelectorAll('p');
var myHead = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

//Change la couleur du background
function changeBack() {
	document.body.style.backgroundColor = "#ff00ff";
}

//Change la couleur et la police des paragraphes
function changePar() {
	for (var i = 0; i < myPar.length; i++) {
		myPar[i].style.color = "#2ECCFA";
		myPar[i].style.fontFamily = "Papyrus";
	}
}

//Change la couleur et la police des headings
function changeHead() {
	for (var i = 0; i < myHead.length; i++) {
		myHead[i].style.color = "#81F781";
		myHead[i].style.fontFamily = "Comic Sans MS";
	}
}

myButton.onclick = function() {
  changePar();
  changeBack();
  changeHead();
}