var hoy = new Date();
var fMili = new Date(1);
var fFija = new Date(2020, 9, 14, 23, 10, 15, 7);

console.log(hoy);
console.log(fMili);
console.log(fFija);

console.log("Año actual: " + hoy.getFullYear());

var inicio = new Date();
for (var i = 0; i < 1100; i++) {
	console.log("Algo ...")
}
var fin = new Date();

//console.log(inicio);
//console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log((duracion / 1000), "segundos");