var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);


var num1 = 10.456789;

console.log(num1);
console.log(Math.round(num1));
console.log(Math.round(num1*100)/100);
console.log(Math.floor(num1)); // el valor numerico entero, sin redondeo


function ramdomEntre(max, min){
	return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(ramdomEntre(1, 200));

// raiz cuadrada
console.log(Math.sqrt(64));

// potencia
console.log(Math.pow(5,3));