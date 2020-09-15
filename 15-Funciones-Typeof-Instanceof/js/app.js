function identifica(param){
	//console.log(typeof param);
	if (typeof param == "function") {
		param();
	} else {
		console.log(param);
	}
	console.log(typeof param);
	console.log(param instanceof Persona);
}

function Persona(){
	this.nombre = "Engelber";
	this.edad = 29;
}

var juan = new Persona();

//identifica(function(){ console.log("Soy anonimas"); });
identifica(juan);