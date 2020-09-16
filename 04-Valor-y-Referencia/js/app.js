var a = 10;
var b = a;

console.log("a: ",a);
console.log("b: ",b);


a = 20;

console.log("a: ",a);
console.log("b: ",b);


var c = {
	nombre: "Juana"
}

var d = c;

console.log("c: ",d);
console.log("c: ",d);


c.nombre = "María";

console.log("c: ",d);
console.log("c: ",d);


d.nombre = "Pedro";

console.log("c: ",d);
console.log("c: ",d);