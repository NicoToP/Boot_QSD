// Ciclos/estructuras de repetición

/*
for(var i = 1 ; i <= 5 ; i++) {
    alert("hola " + i );
}
*/

/*
EJERCICIO 1
Solicitar al usuario que ingrese un número, y mostrar x veces un mensaje de saludo.
Siendo x el núumero ingresado por el usuario.
*/

var num = parseInt(prompt("Por favor ingrese un número que indique la cantidad de veces que quiere que salga el saludo."));

for ( var i = 1; i <= num ; i++) {
    alert("hola " + i );
}