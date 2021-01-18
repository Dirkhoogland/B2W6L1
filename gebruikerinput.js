var aantal =  prompt("hoeveel namen? minimaal 3");
var lijst = [ ];
if (aantal < 3){alert("getal is niet meer dan 3 ");}

else {
	for(var p=0; p < aantal; p++) {lijst.push(prompt("welke naam wil je toevoegen? "));
}

var h2 = document.createElement("h2");
document.body.appendChild(h2);
for (var k = 0; k <aantal; k++){
h2.innerHTML = h2.innerHTML + " " +  (lijst[k]); 

}
console.log(lijst);
var h22 = document.createElement("h2");
document.body.appendChild(h22);
for (var y = 0; y <aantal; y++){
lijst.reverse();
h22.innerHTML = h22.innerHTML + " " + (lijst[y]);
}
}


