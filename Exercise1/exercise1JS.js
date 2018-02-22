function buttonPress()
{
	let initialPassword = document.getElementById("password1").value;
	let reenterPassword = document.getElementById("password2").value;
	
	if(initialPassword != reenterPassword)
	{
		window.alert("The passwords entered don't match");
	}
	else if(initialPassword.length < 8)
	{
		window.alert("The passwords are not at least 8 characters long");
	}
	else
	{
		window.alert("The passwords match and are the required length");
	}
}
