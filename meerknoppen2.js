

var container = document.getElementById('container');


createbutton()
var d = prompt("hoeveel knoppen?");
function createbutton(){

for (var i = d;  i <= 0; i++ ) {
container.style.backgroundColor = "lightblue";	
var button = document.createElement("BUTTON");
button.innerHTML = "knop";
button.id = "button";
document.body.appendChild(button);
button.style.backgroundColor = "green";
}
};