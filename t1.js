function sum()
{
	var t1=document.getElementById("num1").value;
	var t2=document.getElementById("num2").value;
		document.getElementById("oper").innerHTML="+";
	if(Number(t1)+Number(t2))
	{
		document.getElementById("w2").innerHTML="Addition of "+t1+" and "+t2+" is : "+(Number(t1)+Number(t2));
	}
	else
	{
		alert("Enter number");

	}

}
function mul()
{
	var t1=document.getElementById("num1").value;
	var t2=document.getElementById("num2").value;
	document.getElementById("oper").innerHTML="x";
	if(Number(t1)*Number(t2))
	{
document.getElementById("w2").innerHTML="Multiplication of "+t1+" and "+t2+" is "+(Number(t1)*Number(t2));
	}
	else
	{
		alert("Enter number");

	}
}
function div()
{
	var t1=document.getElementById("num1").value;
	var t2=document.getElementById("num2").value;
	document.getElementById("oper").innerHTML="/";
	if(Number(t1)/Number(t2))
	{
document.getElementById("w2").innerHTML="Quotient of "+t1+" divide by "+t2+" is:"+(Number(t1)/Number(t2));
	}
	else
	{
		alert("Enter number");

	}
}
function sub()
{
	var t1=document.getElementById("num1").value;
	var t2=document.getElementById("num2").value;
	document.getElementById("oper").innerHTML="-";
	if(Number(t1)-Number(t2))
	{
document.getElementById("w2").innerHTML="Difference of "+t1+" minus "+t2+" is: "+(Number(t1)-Number(t2));
	}
	else
	{
		alert("Enter number");

	}
}

function mod()
{
	var t1=document.getElementById("num1").value;
	var t2=document.getElementById("num2").value;
	document.getElementById("oper").innerHTML="%";
	if(Number(t1)%Number(t2))
	{
document.getElementById("w2").innerHTML=t1+" Mod "+t2+" is: "+(Number(t1)%Number(t2));
	}
	else
	{
		alert("Enter number");

	}
}