functon versionTwo()
{
	var passward = document.getElementById("pwd").value;
	var passwardLen = password.length;

	if( passwardLen >= 1 &&  passwardLen <=4)
	{
		 document.getElementById("pwd").style.backgroundColor="red";
		  document.getElementById("op").innerHtml = "Weak".fontcolor("red");
	}

	else if( passwardLen >= 5 &&  passwardLen <=7)
	{
		 document.getElementById("pwd").style.backgroundColor="blue";
		  document.getElementById("op").innerHtml = "Weak".fontcolor("blue");
	}
	
	else
	{
		 document.getElementById("pwd").style.backgroundColor="green";
		 document.getElementById("op").innerHtml = "Weak".fontcolor("green");
	}
