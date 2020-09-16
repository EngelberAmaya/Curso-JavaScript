function obtenerAleatorio(){
	return Math.random(); // regresa un numero entre 0 y 1
} 

//console.log(obtenerAleatorio() + 10);


function obtenerNombre(){
	return "Juan";
}

//console.log(obtenerNombre() + " Padilla");
/*var nombre = obtenerNombre();
console.log(nombre);*/


function esMayor(){
	if (obtenerAleatorio() > 0.5) {
		return true;
	}else{
		return false;
	}
}

//console.log(esMayor());


if (esMayor()) {
	console.log("Es mayor a 0.5");
} else {
	console.log("Es menor a 0.5");
}


function crearPersona(nombre, apellido){
	return {
		nombre: nombre,
		apellido: apellido
	}
}

var persona = crearPersona("Maria", "Paz");
console.log(persona.nombre);
console.log(persona.apellido);


function creaFunction(){
	return function(nombre){
		//console.log("Me crearon!!!");
		console.log("Me creo " + nombre);

		return function(){
			console.log("Segunda funcion");
		}
	}
}


var nuevaFuncion = creaFunction();

var segundaFuncion = nuevaFuncion(persona.nombre);
//nuevaFuncion(persona.nombre);
segundaFuncion();