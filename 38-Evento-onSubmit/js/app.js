function validar(){

	var nombre = document.getElementById("txtNombre").value;
	var apellido = document.getElementById("txtApellido").value;

	// validación para que los campos esten llenos
	if (nombre.length < 1) {
		return false;
	}

	if (apellido.length < 1) {
		return false;
	}

	return true;
}

// funcion que me retorna el parametro de la direccion, como por ejemplo el nombre o el apellido
function getParamURL(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

//console.log(window.location.search);
console.log( getParamURL("txtApellido"));
