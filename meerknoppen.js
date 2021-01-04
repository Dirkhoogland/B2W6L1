var button1 = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
var button3 = document.createElement("BUTTON");
var container = document.getElementById('container');

container.style.backgroundColor = "lightblue";
button1.innerHTML = "knop";
button1.id = "button1";
document.body.appendChild(button1);
button1.style.backgroundColor = "green";
button1.addEventListener("click", function button1(){
	container.style.backgroundColor = "green"
});

button2.innerHTML = "knop"
button2.id + "button2"
document.body.appendChild(button2)
button2.style.backgroundColor="red"
button2.addEventListener("click", function button2(){
	container.style.backgroundColor = "red"
});

button3.innerHTML = "knop"
button3.id + "button3"
document.body.appendChild(button3)
button3.style.backgroundColor="blue"
button3.addEventListener("click", function button3(){
	container.style.backgroundColor = "blue"
});
