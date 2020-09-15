//var reg1 = RegExp("a");
var reg2 = /a/;
var texto = "Hola Mundo. 12345";
var texto2 = "Hola Mundo.\nQué tál?";
var texto3 = "Holaa Mundoo";
var texto4 = "Holaa Mundoo Hoola de nuevooo";
var texto5 = "Aeropuerto";
var texto6 = "La Respuesta de la suma es: 45 + 60 = 105";

//var arr = texto.match(/a/); // buscar el termino en que coincide y la posicion
var arr = texto.match(/^H/); // verifica que la primera letra coincida
var arr2 = texto.match(/o$/); // verifica que coincida la ultima letra
var arr3 = texto.match(/.../); //hace mach con los primeros tres
var arr4 = texto.match(/^.o/); //al segundo elemento coincida con o
var arr5 = texto.match(/[0-9]/);  // cuando aparescan números
var arr6 = texto.match(/[a-z]/); // busca solo las minuscula
var arr7 = texto.match(/[a-zA-Z]/); // Busca tanto las minusculas como las mayuscula
var arr8 = texto.match(/^H[a-z]/); // comience con H Mayuscula y lo demas en minuscula
var arr9 = texto.match(/^H[aeiou]/); // comience con H Mayuscula y lo demas con las vocales
var arr10 = texto.match(/[aeiou]./); // cualquier vocal, cualquier caracter pero que este al final
var arr11 = texto.match(/\s/); // busca cualquier separación
var arr12 = texto.match(/\w/); // es equivalente a [a-zA-Z0-9]
var arr13 = texto.match(/\d/); // es equivalente a [0-9]

// i = insensible
// g = todas las apariciones
// m = multilinea

var arr14 = texto.match(/m/i); // me muestra , aunque este una m en MAYUSCULA
var arr15 = texto.match(/[aeiou]/g);
var arr16 = texto.match(/[aeiou]/ig);
var arr17 = texto.match(/[aeiou]|é/ig); // cualquier vocal o é
var arr18 = texto.match(/[aeiou]|[áéíóú]/ig); // cualquier vocal o (áéíóú)
var arr19 = texto3.match(/o+/g); // para verificar si un elemento se repite 
var arr20 = texto3.match(/o?/g); // me muestra solo la vocal o
var arr21 = texto3.match(/o*/g); // me muestra solo la vocal o, asi se esten 2 seguidas
var arr22 = texto3.match(/o{2}/); // me muestra las 2 vocales que es seguidas
var arr23 = texto4.match(/o{2,}/g); // me muestra las 2 vocales que es seguidas, en todas sus ucurrencias
var arr24 = texto4.match(/o{3,4}/g); // me muestra las 3 vocales que es seguidas, en todas sus ucurrencias hasta 4
var arr25 = texto5.match(/[aeiou]{2,2}/ig); // cuando se repitan 2 vocales seguidas
var arr26 = texto5.match(/\w{2,2}/ig); // para separar las expresion en 2 letras o silabas
var arr27 = texto6.match(/\d{1,}/g); // para mostrar 2 números seguidos
var arr28 = texto6.match(/\d{1,}|respuesta/ig); // para mostrar 2 números seguidos, y la palabra respuesta



console.log(texto2);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);
console.log(arr9);
console.log(arr10);
console.log(arr11);
console.log(arr12);
console.log(arr13);
console.log(arr14);
console.log(arr15);
console.log(arr16);
console.log(arr17);
console.log(arr18);
console.log(arr19);
console.log(arr20);
console.log(arr21);
console.log(arr22);
console.log(arr23);
console.log(arr24);
console.log(arr25);
console.log(arr26);
console.log(arr27);
console.log(arr28);