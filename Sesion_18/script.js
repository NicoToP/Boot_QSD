// Ejercicio

/*
Según un número ingresado por el usuario, mostrar la suma de todos los números hasta dicho número,
en un console.log() 
Ej: El usuario ingresa 10
Sumatoria total = 55 
Hacerlo con un for, while y con do while.

*/

//for

/*
var num = parseInt(prompt("Por favor ingrese un número positivo, el que desee."));
var sumatoria = 0;
for (var i = 0; i <= num; i ++) {

    sumatoria = sumatoria +  i;
    console.log("for " + sumatoria);
}


//While


var i = 0;
var sumatoria = 0;
while( i <= num) {

    sumatoria = sumatoria +  i;
    console.log("while " + sumatoria);
    i++;
}


//Do while

var i = 0;
var sumatoria = 0;
do {
    sumatoria = sumatoria +  i;
    console.log("do " + sumatoria);
    i++;
} while( i <= num);
*/

// slice
// string.slice(startIndex, endIndex)
/*
var texto = "Hola este es un texto";
var palabra;

palabra = texto.slice(5); //devuelve la subcadena comenzando desde la posición 5
palabra = texto.slice(5,9); //devuelve la subcadena comenzando desde la posición 5 hasta la nueve
palabra = texto.slice(-5); //devuelve la subcadena comenzando desde el final, contando 5 posiciones

document.write(palabra);
*/

/*
según un texto ingresado por el usuario, determinar cuantas letras "a" (mayúsculas o minúsculas) existen.
se puede usar for, while, .lenght .toUpperCase(), toLowerCase()...... 
*/
/*
var msj = prompt("Ingrese un texto");
msj = msj.toLowerCase();

var cantidad_msj = msj.length;
var n_letras = 0;

for( var i = 0 ; i <= cantidad_msj ; i++) {
    
    if( msj.slice(i,i+1) == "a") {
        n_letras= n_letras + 1;
    }

}

document.write(msj + " tiene " + n_letras + " letras a" + "<br>");
*/

/* 
Según un texto ingresado por el usuario, mostrar el texto pero de forma inversa.

Ej: 
- texto ingresado: hola mundo
- texto a mostrar: odnum aloh


var msj = prompt("Ingrese un texto");
msj = msj.toLowerCase();
var nuevo_msj = "";
var cantidad_msj = msj.length;

for (var i = cantidad_msj; i >= 0; i--) {

    nuevo_msj = nuevo_msj + msj.slice(i - 1, i);

}
document.write("El mensaje original es " + msj + " La  frase inversa es " + nuevo_msj);
*/


/*
Según un texto ingresado por el usuario, cambiar las:
 - a por 4
 - e por 3
 - i por 1
- o por 0
*/

var msj = prompt("Ingrese un texto");
msj = msj.toLowerCase();
var cantidad_msj = msj.length;
var nuevo_msj = "";

for (var i = 0; i <= cantidad_msj - 1; i++) {


    if (msj.slice(i, i + 1) == "a") {
        nuevo_msj = nuevo_msj + "4";

    } else if (msj.slice(i, i + 1) == "e") {
        nuevo_msj = nuevo_msj + "3";

    } else if (msj.slice(i, i + 1) == "i") {
        nuevo_msj = nuevo_msj + "1";

    } else if (msj.slice(i, i + 1) == "o") {
        nuevo_msj = nuevo_msj + "0";

    } else {
        nuevo_msj = nuevo_msj + msj.slice(i, i + 1);
    }
    console.log(nuevo_msj);
    console.log(msj.slice(i, i + 1));
    console.log(i);
    console.log(i + 1);

}
document.write(msj);
document.write(nuevo_msj);
