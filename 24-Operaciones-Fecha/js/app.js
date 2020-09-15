var fecha = new Date(2020, 8, 14); 

console.log(fecha);

fecha.setDate(31);

console.log(fecha);


Date.prototype.sumarDias = function(dias){

	this.setDate(this.getDate() + dias);
	return this;
}

Date.prototype.sumarAnios = function(anios){
	this.setFullYear(this.getFullYear() + anios);
	return this;
}

console.log(fecha);
console.log(fecha.sumarDias(5));
console.log(fecha.sumarAnios(5));