var a = 100.456789;
var b = new Number(10);

console.log(a.toFixed(3));  // con 3 decimales

//a = a.toString(); // valor textual
console.log(a);

console.log(a.toPrecision(5));


c = 10;
c *= 10000000000000;
c *= 10000000000000;

console.log(c);


var d = new Number("20");
console.log(d); 

// retorna el valor numerico del objeto
console.log(d.valueOf());