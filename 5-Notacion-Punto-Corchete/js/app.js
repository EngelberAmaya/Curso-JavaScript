var persona = {
	nombre: "Juana",
	apellido: "Herrera",
	edad: 25,
	direccion: {
		pais: "Costa Rica",
		ciudad: "San Jose",
		edificio: {
			nombre: "edificio principal",
			telefono: "2222-3333"
		}
	}
}

persona.direccion.zipcode = 11101;

var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";

console.log(persona);

// corchetes
var campo = "edad";
console.log(persona["direccion"]["pais"]);
console.log(persona[campo]);