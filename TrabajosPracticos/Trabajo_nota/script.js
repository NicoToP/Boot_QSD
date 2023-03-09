
/*Ejercicio 1 Listo!

Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el programa 
muestre en una alert la temperatura en grados Fahrenheit.
//Formula es (grados celcius* 9/5) +32
*/

var grados_cel = parseFloat(prompt("Por favor ingrese un valor de grados centigrados y a continuación veremos su equivalente en farenheit"));
var farenheit = (grados_cel * 9 / 5) + 32;
alert(grados_cel + " grados celcius son equivalentes a " + farenheit + " grados Farenheit ");

/*Ejercicio 2 Listo

El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
**
***
****
*****
****
***
**
*

*/


var num = parseInt(prompt("Por favor ingrese un número positivo."));
var espacio;


for (var i = 1; i <= num; i++) {
    espacio = "";
    for (var j = 1; j <= i; j++) {
        espacio = espacio + "*";
    }
    console.log(espacio);
}

for (var i = num - 1; i > 0; i--) {
    espacio = "";
    for (var j = i; j > 0; j--) {
        espacio = espacio + "*";
    }
    console.log(espacio);
}


/* Ejercicio 3 Listo!

Según un numero ingresado por el usuario, calcular su factorial

Ej:
Factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
factorial de 5 = 120

factorial de 10 = 10*9*8*7*6*5*4*3*2*1 = 3628800
*/

var num = parseInt(prompt("Por favor ingrese un número positivo."));
factorial = 1;

for (var i = 1; i <= num; i++) {

    factorial = factorial * i;
}
document.write("Factorial de " + num + " = " + factorial);



/*
4) ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
  - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar 
    el dinero extraído al saldo
  - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - CONSULTAR SALDO: debe mostrar el saldo actual
  - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
  - SALIR: debe terminar la ejecución del programa

El programa debe mostrar el menú de opciones, y permitir ingresar una opción. 
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. 
Si se elige SALIR, debe terminar el programa. 
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, 
volver al menú de opciones. 
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder 
consultarse luego, por ejemplo:

ULTIMOS MOVIMIENTOS
 - Extraido: $50
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
 - otra operacion
 - otra operacion

*/


alert("BIENVENIDO AL BANCO AGRARIO");
var opcion = parseInt(
    prompt(
        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
    )
);

var ultimo_deposito = 0;
var ultimo_retiro = 0;
var bandera = false;
var saldo = 20000;

while (opcion != 5) {
    switch (opcion) {

        case 1:

            var canti_retirar = parseInt(

                prompt(
                    "Ingrese la cantidad que desea retirar"
                )
            );

            if (canti_retirar <= saldo) {

                saldo = saldo - canti_retirar;
                bandera = true;
                ultimo_retiro = canti_retirar;
                alert("Su nuevo saldo es: " + saldo);
                console.log("Su nuevo saldo es: " + saldo);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );

            } else {
                alert("Saldo insuficiente, digite una cantidad menor")
                console.log("Saldo insuficiente, digite una cantidad menor la próxima vez");

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            }
            break;
        case 2:

            var canti_deposito = parseInt(

                prompt(
                    "Ingrese la cantidad que desea depositar"
                )
            );

            if (canti_deposito > 0) {

                saldo = saldo + canti_deposito;
                bandera = true;
                ultimo_deposito = canti_deposito;
                alert("Su nuevo saldo es: " + saldo);
                console.log("Su nuevo saldo es: " + saldo);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            } else {
                alert("La cantidad digitada debe ser mayor a 0")
                console.log("La cantidad digitada debe ser mayor a 0");

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            }

            break;
        case 3:
            if (bandera == false) {
                alert(saldo)
                console.log(saldo);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            } else {
                alert(saldo)
                console.log(saldo);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            }
            break;
        case 4:

            if (bandera == false) {

                alert("Su saldo actual es: " + saldo);
                console.log("Su saldo actual es: " + saldo);
                alert("Su último deposito fue: " + ultimo_deposito);
                console.log("Su último deposito fue: " + ultimo_deposito);
                alert("Su último retiro fue: " + ultimo_retiro);
                console.log("Su último retiro fue: " + ultimo_retiro);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );

            } else {

                alert("Su saldo actual es: " + saldo);
                console.log("Su saldo actual es: " + saldo);
                alert("Su último deposito fue: " + ultimo_deposito);
                console.log("Su último deposito fue: " + ultimo_deposito);
                alert("Su último retiro fue: " + ultimo_retiro);
                console.log("Su último retiro fue: " + ultimo_retiro);

                var opcion = parseInt(
                    prompt(
                        "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                    )
                );
            }
            break;
        case 5:
            alert("GRACIAS POR ELEGIRNOS");
            console.log("GRACIAS POR ELEGIRNOS");
            break;

        default:
            alert("¡OPCIÓN INVÁLIDA!")

            var opcion = parseInt(
                prompt(
                    "Ingrese una opción: \n\n 1) Retirar dinero \n 2) Depositar dinero \n 3) Consultar saldo \n 4) Ver últimos movimientos \n 5) Salir"
                )
            );
            break;
    }
}

/*
Ejercicio 5
Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34

*/

var veces = parseInt(prompt("Ingrese hasta donde quiere que vaya la serie de fibonacci"));

var base_1 = 0;
var base_2 = 1;
var b = base_2;
var a = base_1;
var c = 0;
console.log(base_1);
console.log(base_2);
for (var i = 1; i <= veces; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}