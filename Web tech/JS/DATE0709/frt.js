function performOperation()
{
	var num1 = document.getElementById("n1").value
	var num2 = document.getElementById("n2").value
	var operation = document.getElementByClassName("xy").value

	for(var i=0;i<=operation.length-1;i++)
		{
			if (operation[i].checked)
			{
				var opr = operation[i].value
				var res = 0 
					if(opr == "add")
					{
						
						var res = num1 + num2
						document.write(res)
					}
					
					else if(opr == "sub")
					{
						var res = num1 - num2
						document.write(res)
					}
		
					else if(opr == "mul")
					{
						var res = num1 * num2
						document.write(res)
					}
					
					else if(opr == "div")
					{
						var res = num1 / num2
						document.write(res)
					}

			}
		}

}