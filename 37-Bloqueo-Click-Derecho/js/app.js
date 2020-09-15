document.onmousedown = function(arg){
	
	if (arg.button === 2) {
		alert("Click bloqueado");
		return;
	}

	console.log("No hay problemas");
}

// me muestra por consola lo que el usuario haya sombreado del texto
document.onmouseup = function(){ // cuando suelta el mouse
	var texto = window.getSelection().toString(); // esta funcion no agarra en Internet Explorer
	console.log(texto);
}