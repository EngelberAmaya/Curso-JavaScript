function determinaDato(a){
	if (a === undefined) {
		console.log("A es undefined... no se que hacer")
	}else if(typeof a === "number") {
		console.log("A es un numero, y puedo hacer opraciones con numeros");
	}else if(typeof a === "string"){
		console.log("A es un texto, puedo hacer operaciones con texto");
	}else if(typeof a === "object"){
		console.log("A es un objeto... pero puede cualquier cosa");

		if (a instanceof Number) {
			console.log("A es un objeto numerico");
		}
	}
}

//determinaDato({});

var b = new Number(3);
console.log(b);

determinaDato(b);