/*
var edad = parseInt(prompt("ingrese su edad"));

if (edad < 18) {
    alert("Aún eres menor de edad");
}
else {
    alert("Eres mayor de edad");
}
*/

/*Crear un algoritmo en el que se pida al usuario que ingrese un mes (puede ser en números, o en letras),
 si el mes es Febrero mostrar "El mes tiene 28 días", sino mostrar "El mes tiene más de 28 días"

var mes = prompt("Ingrese cualquier mes del año. NOTA: Por favor no usar mayúsculas.");

if (mes == "febrero") {
    alert("El mes tiene 28 días");
}
else {
    alert("El mes tiene más 28 días");
}
*/

// Explicación de if anidados

/*if (condicion) {
    ...
} else {
    if(condicion2) {
    ...
    }
}

var mes = prompt("Ingrese cualquier mes del año. NOTA: Por favor no usar mayúsculas.");

if (mes == "febrero") {

    alert("El mes tiene 28 días");

}
else {
    if (mes == 2) {

        alert("El mes tiene 28 días");
    }
    else {
        if (mes == feb) {
            alert("El mes tiene 28 días");
        } else {
            alert("El mes tiene más de 28 días")
        }
    }
}
*/
/* Segunda forma de hacerlo (recomendada)

if( mes == 2) {
    alert("El mes tiene 28 días");
} else if (mes == "febrero") {
    alert("El mes tiene 28 días");
} else if (mes == "feb") {
    alert("El mes tiene 28 días");
} else {
    alert("El mes tiene más de 28 días");
}
*/

/* Usando operadores lóficos como OR Y 

if (mes == 2 || mes == "febrero" || mes == " feb") {
    alert("El mes tiene 28 días");
}
else {
    alert("El mes tiene más de 28 días");
}
*/

/*Solicitar al usuario 2 números, y mostrar un mensaje que indique si el 1º es divisible por el 2º numero, o no lo es.

alert(" Vamos a identificar si el primer número que ingresas es divisible entre el segundo número que ingresarás");

var num1 = parseInt(prompt("Ingrese un número entero."));
var num2 = parseInt(prompt("Ingrese un número entero."));

if (num2 == 0) {
    alert("No se puede dividir entre 0");
}else if (num1 % num2 == 0 ) {
    alert("El primer número es divisible entre el segundo número");
} else {
    alert("El primer número NO es divisible entre el segundo número");
}
*/

/*
EJERCICIO 2
Solicitar al usuario que ingrese un color, según este, mostrar un mensaje que diga si el mismo es un color primario o no


var color = prompt("Ingrese un color. NOTA: No use mayúsculas");

if(color == "rojo" || color == "verde" || color =="azul") {
    alert("El color ingresado es primario");
} else {
    alert("El color ingresado NO es primario");
}

*/

/*EJERCICIO 3
Crear un programa que determine si un número introducido es divisible por 11 y 5

alert(" Vamos a identificar si el número que ingresas es divisible entre 11 y 5");

var num1 = parseInt(prompt("Ingrese un número entero."));

if( num1 % 11 ==  0 && num1 % 5 == 0) {
    alert("El número ingresado es divisible entre 11 y 5");
} else {
    alert("El número ingresado NO es divisible entre 11 y 5");
}
*/

/*EJERCICIO 4

Crear un programa que determine si el número ingresado es PAR o NO. 
(12 es par si ---> 12 % 2 = 0)
*/

alert(" Vamos a identificar si el número que ingresas es par");

var num1 = parseInt(prompt("Ingrese un número entero."));

if( num1 % 2 ==  0) {
    alert("El número ingresado es divisible es PAR");
} else {
    alert("El número ingresado es IMPAR");
}