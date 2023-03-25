var x = "hola";

localStorage.setItem("x", 10);

console.log("variable" + x);
console.log("localStorage: " +localStorage.getItem("x"));

//Averiguar el tipo de dato 

console.log("tipo dato de Variable: " + typeof x);

console.log("tipo dato de localStorage: " + typeof localStorage.getItem("x"));

//convertit el string a number

var entero = parseInt(localStorage.getItem("x"));

console.log("entero "+ typeof entero);

/*
//JSON (javascript Object Notation)

{
Nombre: Emiliano
Apellido: Chiappero
Edad: 38
color: black
marging: 16px
}

[
    0: emiliano,
    1: laura,
    2: juana,
    3: martin
]
*/

var datos = [1, 2, 3, 4];
console.log(typeof datos); //objeto

localStorage.setItem("datos_ejemplo",JSON.stringify( datos)); //convierte algo a un string de JSON

console.log(typeof localStorage.getItem("datos_ejemplo")); //quiero conocer el tipo de dato que es "datos_ejemplo"

var convertido = JSON.parse(localStorage.getItem("datos_ejemplo")); // Convierte un String (con forma de JSON) en array

console.log(typeof convertido);