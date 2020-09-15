var arr = [5,4,3,2,1];
console.log(arr);
console.log(arr[0], arr[4], arr[5]);

//reversa

arr.reverse();
console.log(arr);


// Map. revisa cada elemente del arreglo
arr = arr.map(function(elem){
	//elem *= 2;
	elem *= elem;
	return elem;
});

console.log(arr);

// Raiz cuadrada
arr = arr.map(Math.sqrt);
console.log(arr);


// Join : une el arreglo
arr = arr.join("|");
console.log(arr);


//split: Regresa un arreglo de un elemento
arr = arr.split("|");
console.log(arr);

// agrega un elemento al final del arreglo
arr.push("6");
console.log(arr);


// agrega un elemento al comienzo del arreglo
arr.unshift("0");
console.log(arr);


//Tener la representacion textual del arreglo
console.log(arr.toString());


//eliminar la ultima posicion del arreglo
var elimine = arr.pop();
console.log(arr,elimine);

//eliminar una posicion especifica del arreglo
arr.splice(1,0,"10","20","30");
console.log(arr);


// hace el proceso contrario de splice
arr = arr.slice(0,2);
console.log(arr);




// Arreglos II Parte 

var arr2 = [
	true,
	{
		nombre: "Engelber",
		apellido: "Amaya"
	},
	function(){
		console.log("Estoy viviendo en un arreglo");
	},
	function(persona){
		console.log(persona.nombre + " " + persona.apellido);
	},
	[	"Fernando",
	 	"Carlos",
	 	"Hernando",
	 	"Melissa", 
	 	[
			"Juan",
			"Pedro",
			"Dilcia",
			function(){
				console.log(this);
			}
	 	]

	 ]
];

console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1].nombre + " " +arr2[1].apellido);

arr2[2]();
arr2[3](arr2[1]);

console.log(arr2[4][4][1]);

var arreglo2 = arr2[4][4];

arreglo2[1] = "Luis!";

console.log(arreglo2);

arreglo2[3]();