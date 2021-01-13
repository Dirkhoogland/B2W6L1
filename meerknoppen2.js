var container = document.getElementById('container');

var aantalButtons = prompt("hoeveel buttons");
document.body.style.backgroundColor = "white"
kleuren = ["green","red","purple","blue","black"];	


for (p =1; p<=aantalButtons; p++){
	var maakButton = document.createElement("button");
	var Buttonnaam = document.createTextNode(p);
	maakButton.appendChild(Buttonnaam);
	maakButton.style.backgroundColor = kleuren[0];
	container.appendChild(maakButton);

maakButton.onclick = function(){
buttonColor(this);

};

};
function buttonColor(knop){
if (knop.style.backgroundColor == "black") {
	knop.style.display = "none"
}

	var kleur = kleuren.value;
	var naamkleur = kleuren.indexOf(knop.style.backgroundColor);

	console.dir(knop.style.backgroundColor);
knop.style.backgroundColor = kleuren[naamkleur+1];



}


