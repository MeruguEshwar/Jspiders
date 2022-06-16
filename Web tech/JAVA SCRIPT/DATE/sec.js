functon objectCreation()
{

	var bankAccount = { accountHolderName:document.getElementById("ahn").value,
						accountNumber:document.getElementById("anum").value,
						typeOfaccount:document.getElementById("ty").value,
						};

	document.write("AccountHolderName:"+bankAccount.accountHolderName+"<br>");
	document.write("AccountNumber:"+bankAccount.accountNumber+"<br>");
	document.write("TypeAccount:"+bankAccount.typeAccount)
}