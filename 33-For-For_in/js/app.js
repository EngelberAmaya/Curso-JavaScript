for (var i = 0; i <= 10; i++) {

	if (i == 5) {
		//break;
		continue;
	}

	console.log(i);
}



// For in

var Persona = function(){
	this.nombre = "Juan";
	this.apellido = "Pineda";
	this.edad = 18;
}

var juan = new Persona();

Persona.prototype.direccion = "Barquisimeto"

for(prop in juan){
	//console.log(juan.hasOwnProperty(prop));
	if (!juan.hasOwnProperty(prop)) {
		continue;
	}

	console.log(prop,":", juan[prop]);
}


/*
for(num in [1,2,3,4,5,6,7,8,9,10]){
	console.log(num);
}*/


// para varios tipos
[1,2,3,4,true,6,7,8,false,"nombre"].forEach( function(val){
	console.log(val);
});