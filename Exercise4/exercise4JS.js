function buttonPress()
{

	let paragraph = document.getElementById("paragraph");
	
	let borderRed = document.getElementById("borderRed").value;
	let borderGreen = document.getElementById("borderGreen").value;
	let borderBlue = document.getElementById("borderBlue").value;
	let borderWidth = document.getElementById("borderWidth").value;
	
	let backgroundRed = document.getElementById("backgroundRed").value;
	let backgroundGreen = document.getElementById("backgroundGreen").value;
	let backgroundBlue = document.getElementById("backgroundBlue").value;
	
	paragraph.style.backgroundColor = "rgb("+backgroundRed+","+backgroundGreen+","+backgroundBlue+")";
	paragraph.style.borderColor = "rgb("+borderRed+","+borderGreen+","+borderBlue+")";
	paragraph.style.borderWidth = borderWidth+"pt";

}
