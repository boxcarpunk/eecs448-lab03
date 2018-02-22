let i = 0;

function buttonPrevious()
{
	if(i == 0)
	{
		i = 4;
	}
	else
	{
		i--;
	}
	slideshow();
}

function buttonNext()
{
	if(i == 4)
	{
		i = 0;
	}
	else
	{
		i++;
	}
	slideshow();
}

function slideshow()
{
	let img = document.getElementById("pic");
	
	if(i == 0)
	{
		img.src = "https://a.1stdibscdn.com/archivesE/upload/3558782/f_3509892/3509892_z.jpg";
	}
	else if(i == 1)
	{
		img.src = "https://secure.img1-ag.wfcdn.com/im/10616080/resize-h800%5Ecompr-r85/2580/25807139/Asher+Picture+Frame.jpg";
	}
	else if(i == 2)
	{
		img.src = "http://www.ikea.com/PIAimages/41784_PE136378_S5.JPG";
	}
	else if(i == 3)
	{
		img.src = "http://www.ikea.com/PIAimages/20729_PE105851_S5.JPG";
	}
	else if(i == 4)
	{
		img.src = "http://images.linnlive.com/c773d49a2bdaf759b0c8f16e4896f7c5/a8725845-db41-48e1-b389-2fc3cddd8b25.jpg";
	}
}
