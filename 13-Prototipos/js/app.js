function Persona(){
	this.nombre = "Engelber";
	this.apellido = "Amaya";
	this.edad = 29;
	this.pais = "Venezuela";	

	
	/*this.imprimirInfo = function(){
		console.log(this.nombre+" "+ this.apellido +"("+this.edad+")");
	}*/
}

//Persona.prototype.pais = "Venezuela";
Persona.prototype.imprimirInfo = function(){
	console.log(this.nombre+" "+ this.apellido +"("+this.edad+")");
}

var eng = new Persona();
console.log(eng);
//eng.imprimirInfo();
console.log(eng.imprimirInfo());


Number.prototype.esPositivo = function(){
	if (this > 0) {
		return true;
	} else {
		return false;
	}
}