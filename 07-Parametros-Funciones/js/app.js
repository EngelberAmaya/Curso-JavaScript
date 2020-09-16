function imprimir(/*nombre, apellido*/ /*persona*/ fn){
	
	/*apellido = apellido || "yyy";
	console.log(nombre +" "+ apellido);*/

	/*console.log(persona.nombre + " " + persona.apellido);
	persona.nombre = "Maria";*/

	fn();
}

var obj = {
	nombre: "Juan",
	apellido: "Padilla"
}

//imprimir("Juan", "Perez");
//imprimir({nombre: "Juan",apellido: "Padilla"});
//imprimir(obj);

var miFunction = function(){
	console.log("Funcion anónima");
}

imprimir(miFunction);

//console.log(obj);