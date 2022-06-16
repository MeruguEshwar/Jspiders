function performoperation()
{
		var num1 = document.getElementById("n1").value
		var num2 = document.getElementById("n2").value

		var operation = document.getElementByClassName("xy").value

		for(var i=0;i<=operation.length-1;i++)
		{
			if (operation[i].checked)
			{
				var opr = operation[i].value
				val res = 0
					if(opr == "add")
					{
						res = parseInt(num1) + parseInt(num2)	
					}
					
					else if(opr == "sub")
					{
						res = num1 - num2	
					}
		
					else if(opr == "mul")
					{
						res = num1 * num2	
					}
					
					else if(opr == "div")
					{
						res = num1 / num2	
					}

				document.getElemrntById("rt").innerHtml = res

}