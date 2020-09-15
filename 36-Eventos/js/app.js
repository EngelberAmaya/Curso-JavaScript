function evento(arg){
	console.log("Me disparé");
	//console.log(arg.x, arg.y);	// para es que puntp exacto se le dio click a un botón
	console.log(arg);
}


var objeto = document.getElementById("objDemo");
//console.log(objeto);
objeto.addEventListener("keypress", evento);


var objetoButton = document.getElementById("objDemo2");

objetoButton.addEventListener("click", evento);

//objetoButton.click();