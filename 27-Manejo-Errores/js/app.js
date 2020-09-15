try{
	var a = 100;
	console.log("El valor de a:",a);

	/*throw new Error('Error tipo 1');
	console.log("esta parte nunca se ejecuta");*/

	throw {
		nombreError: "Error tipo 1",
		accion: "Salir corriendo a echarle agua al servidor",
		codeError:1
	}

	

}catch(e){
	console.log(e);
	console.log(e.nombreError);
	console.log(e.accion);
	console.log(e.codeError);
	console.log("parte de catch: ");
}finally{
	console.log("Finalmente");
}