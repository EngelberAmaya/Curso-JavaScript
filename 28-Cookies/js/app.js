function crearCookie(nombre, valor){

	valor = escape(valor);

	var hoy = new Date();
	hoy.setMonth( hoy.getMonth() + 1); // se le suma un mes a la fecha

	document.cookie = nombre+"="+valor+";expires=" + hoy.toUTCString()+";"; // vence la cookie en un mes


}

function borrarCookie(nombre){

	var hoy = new Date();
	hoy.setMonth( hoy.getMonth() - 1);

	document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";";

}

function getCookie(nombre){

	var cookies = document.cookie;

	var cookieArr = cookies.split("; ")
	console.log(cookieArr);

	for (var i = 0; i < cookieArr.length; i++) {
		
		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if (parArr[0] === nombre) {
			return unescape(parArr[1]);
		}

	}

	//console.log(cookieArr);

	return undefined;

}


console.log(getCookie("direccion"));

//crearCookie("nombre","Engelber");
/*crearCookie("correo","engelberamaya@gmail.com");
crearCookie("direccion","Barquisimeto, Venezuela");*/

//borrarCookie("nombre");

/*var demo = "123;123*123'123/ 123";
console.log(demo);
console.log(escape(demo));
console.log(unescape(escape(demo)));*/


//document.cookie = "apellido=amaya";


//console.log(cookies);