var container = document.getElementById('container');

var buttons = document.getElementsByClassName("buttons");

var aantalbuttons = prompt("hoeveel buttons");

var kleuren = ["green","red","purple","blue","black"];

for (p =1; p<=aantalbuttons; p++){
	var maakButton = document.createElement("button");
	var Buttonnaam = document.createTextNode(p);
	maakButton.appendChild(Buttonnaam);
	maakButton.classList = "buttons";
	maakButton.id = "button" + p;
	maakButton.style.backgroundColor = kleuren[0];
	container.appendChild(maakButton);



};

maakButton.onclick = function(kleuren){
maakButton.style.backgroundColor = kleuren[1];
};
