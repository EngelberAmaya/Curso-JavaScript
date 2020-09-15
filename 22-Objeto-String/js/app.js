var a = new String("Engelber Amaya Noguera"); 
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());


var i = a.indexOf("e"); // busca la letra que coincida
console.log("la letra: ",i);


var i = a.lastIndexOf("a"); // ultima posicion del elemento
console.log("la letra: ",i);


var nombre = a.substr(6, 3);
console.log(nombre);

var nombre2 = a.substr(0, a.indexOf(" ")); // desde la primera posición hasta encontrar un espacio
console.log(nombre2);


var split = a.split(" ");// lo coloca como en un arreglo
//var split2 = a.split(" "); // separacion por espacio
console.log(split);
console.log(split.length);