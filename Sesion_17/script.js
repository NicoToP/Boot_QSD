/* Ejercicio 1

Solicitar al usuario que ingrese número positivo, y mostrar en un alert, cuántos número hay que son pares.
Ej: el usuario ingresa 10 números.
"hay 5 números que son pares"



alert("Vamos a adivinar los números pares que hay desde el número que ingrese \n Por ejemplo ingresas 10 entonces de 10 a 0 hay 5 pares.")
var pares = 0;

for (var i = 1; i <= 10; i++) {
    var num = parseInt(prompt("Por favor ingrese el número que desee."));

    if (num % 2 == 0) {

        pares = pares + 1;
    }
}
alert ("La cantidad de pares son: " + pares);
/*

/* Ejercicio 1.2

Solicitar al usuario que ingrese número positivo, y mostrar en un alert, cuántos número hay que son pares.
Ej: el usuario ingresa 10. (entonces se cuenta de 10 hasta 0 y se sacan los pares)
"hay 5 números que son pares"


alert("Vamos a adivinar los números pares que hay antes del número que ingrese \n Por ejemplo ingresas 10 entonces de 10 a 0 hay 5 pares.")
var pares = 0;

var num = parseInt(prompt("Por favor ingrese un número positivo, el que desee."));

for (var i = 0; i <= num; i++) {
    
    if (i % 2 == 0) {
        pares++;
    }
}
alert ("La cantidad de pares son: " + pares);
*/



/*Ejercicio 2

Según un número ingresado por el usuario, mostrar en por console.log lo siguiente:
Ej: el usuario ingresa el 4

    4x1 = 4
    4x2 = 8
    4x3 = 12
    4x4 = 16
    ...
    4x10 = 40
---------
console.log("hola mundo");


var num = parseInt(prompt("Por favor ingrese un número del cual desee ver la tabla de multiplicar."));
var resultado = 0;

for ( var i = 1 ; i <=10 ; i++)
{
    resultado = num * i;
    console.log(resultado);
}
*/

/*
Funcion de tiempo

setTimeout(function(){
alert("hola mundo");
}, 2000);

*/
/*
Mostrar con document.write en un h2,  los números del 10 al 0 y finalmente un mensaje que diga "Despegue!!"
10
9
8
7
....

Despegue! 
*/

//document.write("<h2> hola mundo  </h2>");



for( var i = 10 ; i >= 0 ; i--) {
    document.write("<h2>"+ i + "</h2>");
}
document.write("<h1>DESPEGUE!</h1>")

