// FUNCIONES
// declaración  de la función suma

/*
function suma () {

var num1 = parseInt(prompt("Ingrese un número"));
var num2 = parseInt(prompt("Ingrese otro número"));
var total = num1 + num2;
alert(total);
}
*/
//Ejecutar/ Instanciar/ llamar la función suma

//suma();

/*
//Crear una función que pida el nombre del usuario y lo muestre en un mensaje de bienvenida 
function bienvenida(){
    var nombre = prompt("Ingrese su nombre");
    alert("Bienvenid@ " + nombre);
}
bienvenida();

//Si el usuario ingresa un numero menor que 10, entonces ejecutar nuevamente la función anterior
var num = parseInt(prompt("Ingrese un número"));
if (num < 10){

    bienvenida();
}
*/

/*
//USANDO PARAMETROS
function suma (num1, num2) {
    var total = num1 + num2;
    alert(total);
    }
*/
/*
//suma(10,99);


var num1 = parseInt(prompt("Ingrese un número"));
var num2 = parseInt(prompt("Ingrese otro número"));

suma(num1,num2);
*/

/* EJERCICIO : crear un for repetir 3 veces 2 prompt donde sele pida al usuario 2 números,
               llamar a una función y sumar los valores
*/
/*
for ( var i= 1; i <= 3; i++) {

    var num1 = parseInt(prompt("Ingrese un número"));
    var num2 = parseInt(prompt("Ingrese otro número"));
    suma(num1,num2);
}
*/
/*Hacer una calculadora utilizando un menú con las opciones de sumar,restar,multiplicar,dividir
usar funciones con parametros según la opcion*/

function suma(num1, num2) {
    var total = num1 + num2;
    alert("El valor de la resta entre " + num1 + " + " + num2 + " = " + total);
}

function resta(num1, num2) {
    var total = num1 - num2;
    alert("El valor de la resta entre " + num1 + " - " + num2 + " = " + total);
}

function multiplicacion(num1, num2) {
    var total = num1 * num2;
    alert("El valor de la multiplicación entre " + num1 + " * " + num2 + " = " + total);
}

function division(num1, num2) {
    var total = num1 * num2;
    alert("El valor de la división entre " + num1 + " / " + num2 + " = " + total);
}

var num1;
var num2;

function numeros(){
    num1 = parseInt(prompt("Ingrese un primer número"));
    num2 = parseInt(prompt("Ingrese un segundo número"));
}



alert("Bienvenido a mi calculadora");

while (opcion != 5) {
    var opcion = parseInt(prompt("Ingrese la operación que desea hacer: \n\n 1 - Suma \n 2 - Resta \n 3 - División \n 4 - Multiplicación \n 5 - Salir"));

    switch (opcion) {

        case 1:
            numeros();
            suma(num1, num2);
            break;

        case 2:
            numeros();
            resta(num1, num2);
            break;

        case 3:
            if (num2 == 0) {
                alert("No se puede realizar la operación ya que el segundo número es 0");

            } else {
                numeros();
                division(num1, num2);

            }

        case 4:
            numeros();
            multiplicacion(num1, num2);

            break;
        case 5:
            alert("GRACIAS");
            break;
        default:
            alert("Esa opción no está en el menú");
            var opcion = parseInt(prompt("Ingrese la operación que desea hacer: \n\n 1 - Suma \n 2 - Resta \n 3 - División \n 4 - Multiplicación \n 5 - Salir"));
    }

};