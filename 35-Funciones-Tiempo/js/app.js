setTimeout( function(){
	console.log("Paso un segundo");
}, 1000);


var segundos = 0;

var intervalo = setInterval( function(){

	segundos++;
	console.log("segundo", segundos);

	if (segundos === 3) {
		clearInterval(intervalo);
	}

},1000);



var juan = {
	nombre: "Juan",
	edad: 30,
	imprimir: function(){

		var self = this;

		setTimeout(function(){
			console.log(self);
			console.log(self.nombre, self.edad);
		}, 4000);
		
	}
};

juan.imprimir();