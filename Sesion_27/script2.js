//Variables globales


//Hoisting 

// al usar var se puede hacer uso de la variable antes de ser declarada 
//var texto = "hola mundo";
//console.log(texto);


//---------
/*
var msj = "hola mundo";
var num = 10;

if (num > 9) {
    var msj = "hola mundo, cómo estás?";
    console.log(msj);
}
console.log(msj);
*/

//Let -------> Ámbito de bloque {}
/*
let msj = "hola mundo";
let num = 10;

if (num > 9) {
    let msj2 = "hola mundo, cómo estás?";
    console.log(msj2);
}
console.log(msj2);
*/

// let puede modificarse pero NO volver a declararse 

let mensaje = "hola mundo";
mensaje = "como estas";

console.log(mensaje);


let msj = "hola mundo";
let num = 10;

if (num > 9) {
    let msj = "hola mundo, cómo estás?";
    console.log(msj);
}
console.log(msj);


// Const ------------> Ámbito de bloque {}
//Const NO puede modificarse NI volver a declararse

console.log("-----------------CONST---------------");

const saludo = "hola chic@s";
//saludo = "como estan?";
console.log(saludo);

//obejto 

const auto = {
    marca: "Ford",
    modelo: "Fiesta",
}; 

auto.color = "rojo"; // se le agrega otra caracteristica (dato) al objeto 

console.log(auto.modelo);

//----------------------

const array = [1,2,3];
array[3] = 4;
console.log(array);

//-------------

