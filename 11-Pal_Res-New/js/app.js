function Persona(){
	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 30;

	this.imprimirPersona = function(){
		return this.nombre + " " + this.apellido +"("+this.edad+")";
	}
}

var juan = new Persona();
console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());