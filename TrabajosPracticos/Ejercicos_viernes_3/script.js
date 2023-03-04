//Ejercicio 1 Listo!!
/*
var num = parseInt(prompt("Por favor ingrese un número positivo"));
for (var i = 0 ; i < num ; i++) {
    if (i % 3 == 2)
    {
        console.log(i);
    }
}
*/

//Ejercicio 2 Listo!!!

/*
var letra = prompt("Por favor ingrese una letra");
var num = prompt("Por favor ingrese un número positivo, para multiplicar esa letra");
var cadena = "";
for (var i = 1; i<= num ; i++) {
    cadena = cadena + letra;
}
document.write(cadena);
*/

// Ejercico 3 Listo!!!

/*
var media = 0;
var sumatoria = 0;
for( var i = 1; i <= 4; i++) {
    var num =parseInt(prompt("Por favor ingrese un número positivo."));
    sumatoria = sumatoria + num;
    console.log(sumatoria);
}
media = sumatoria / 4;
document.write(media);
*/

//Ejercicio 4 en consola 10/10

/*
var num =parseInt(prompt("Por favor ingrese un número positivo."));
for (var i = 0 ; i < num ; i++) {
    var espacio = "";
    for(var j = 0; j < i + 1; j++) {
        espacio = espacio + "*";
    }
    console.log(espacio);
    document.write(espacio + "\n" );
}
*/

//Ejercicio 5 
/*
for (var i = 0; i <= 1; i++) {
    for (var j = 0; j < 4 + 1; j++) {
        console.log( i + " : " + j);
    }
}
*/
//Ejercicio 6

/* 6) Crear un script para controlar las vueltas de una deportista. 
Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo (en segundos) 
de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta
y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
Ejemplo: 
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s
*/ 

var num = parseInt(prompt("Por favor ingrese el número de vueltas que va a realizar"));
var promedio = 0;
var sumatoria = 0;
for( var i = 1 ; i <= num ; i++){
    var tiempo = parseFloat(prompt("Por favor ingrese el tiempo de la vuelta: " + i));
    console.log("vuelta: "+ i + " el tiempo es: " + tiempo);
    sumatoria =  sumatoria + tiempo;
    console.log(sumatoria);
}
promedio = sumatoria / num;
console.log( "El promedio de las vueltas es: " + promedio);




