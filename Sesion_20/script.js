/*
según un número ingresado por el usuario, ir solicitando valores (texto o número) y guardarlo en un array
Ej: el usuario ingresa 4.
Me pide 4 veces distintas que ingrese un valor (texto o numero) y a esos 4 datos los guardo en un array
  */

/*
var cantidad = parseInt(prompt("Cuantos datos desea ingresar."));
var datos = [];

for ( var i = 0; i < cantidad; i++)
{
  datos[i] = parseInt(prompt("Por favor ingrese los números enteros que desee"));
  console.log(datos[i]);
}
*/

/*
2.Crear un programa que permite ingresar distintos valores, y luego preguntar qué valor se desea averiguar si existe.
El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no.
Ej:
- se ingresa los valores: 5 7 99 34 54 2 12
- valor a buscar: 54
- RESULTADO: El valor 54 se encuentra entre los valores originales
*/

// MI FOMRMA

/*
var cantidad = parseInt(prompt("Cuantos datos desea ingresar."));
var datos = []; //guarda info en la array

for (var i = 0; i < cantidad; i++) {
    datos[i] = parseInt(prompt("Por favor ingrese los números enteros que desee"));
}

var num = parseInt(prompt("¿ Qué número desea buscar ?"));

var exite = false;

for (var j = 0; j < datos.length; j++) {
    if (datos[j] == num) {
        exite = true;
    }
}

if (exite == true) {
    alert("El número: " + num + " está en la lista ingresada");
} else {
    alert("El número: " + num + " NO está en la lista ingresada");
}
*/

// FORMA DEL PROFE

/*
var opcion = parseInt(
    prompt("Ingrese una opción: \n\n 1) Agregar datos \n 2) Salir")
);
var dato;
var numeros = [];
var existe = false;
var repetir_busqueda = 1;
switch (opcion) {
    case 1:
        //Agregar datos
        var cant = parseInt(prompt("¿Cuántos datos desea ingresar?"));
        for (var i = 0; i < cant; i++) {
            dato = parseInt(prompt("Ingrese el #" + (i + 1) + " número"));
            numeros[i] = dato;
        }
        console.log(numeros);
        while (repetir_busqueda == 1) {
            //Buscar un dato
            var buscar = parseInt(prompt("Ingrese el valor a buscar"));
            for (var i = 0; i < numeros.length; i++) {
                if (buscar == numeros[i]) {
                    existe = true;
                }
            }
            if (existe == true) {
                alert(
                    "El número " + buscar + " existe en el conjunto de datos originales"
                );
            } else {
                alert(
                    "El número " +
                    buscar +
                    " NO existe en el conjunto de datos originales"
                );
            }
            repetir_busqueda = parseInt(
                prompt("¿Desea buscar otro número? \n\n 1) SI \n 2) NO")
            );
        }
        break;
    case 2:
        //Salir
        alert(
            "Muchas gracias por comunicarse con  nosotros! \n Que tengas un hermoso día "
        );
        break;
    default:
        //Otro valor
        alert("Ingrese una opción válida!");
        break;
}
*/


/*Ejercicio 3
Crear un programa que pida ingresar las siguientes frutas: Manzana, Naranja o Pera.
Y devuelva un mensaje con la cantidad que hay de cada fruta.

Aclaración: puede utilizar un menú, y cuando selecciones "Salir", finaliza el programa
*/


// FORMA DEL PROFE
/*
var opcion = parseInt(
    prompt(
        "Bienvenid@, ingrese una opción: \n\n 1) Ingresar una fruta \n 2) Salir"
    )
);

switch (opcion) {
    case 1:
        //Ingresar una fruta y mostrar sus cantidades
        var fruta = prompt(
            "Por favor ingrese alguna de estas 3 frutas: manzana, naranja o pera"
        ).toLowerCase();
        var array_frutas = [];
        var i = 0;
        var cant_manzana = 0;
        var cant_naranja = 0;
        var cant_pera = 0;

        while (fruta == "manzana" || fruta == "naranja" || fruta == "pera") {
            array_frutas[i] = fruta;
            i++;
            fruta = prompt(
                "Por favor ingrese alguna de estas 3 frutas: manzana, naranja o pera"
            ).toLowerCase();
        }

        for (var j = 0; j < array_frutas.length; j++) {
            if (array_frutas[j] == "manzana") {
                cant_manzana++;
            } else if (array_frutas[j] == "naranja") {
                cant_naranja++;
            } else {
                cant_pera++;
            }
        }

        alert(
            "Se ingresaron: \n \n " +
            cant_manzana +
            " Manzanas \n " +
            cant_naranja +
            " Naranjas \n " +
            cant_pera +
            " Peras"
        );

        break;

    case 2:
        //Salir
        alert("Graciasssss....vuelva prontossss!");
        break;
}
*/


/*
EJERCICIO: Playlist

Estas son las opciones:
- Crear una playlist, teniendo en cuenta que debe grabarse con un nombre
- Agregar temas a la playlist (todos los que quiera) "while"
- Buscar temas en una playlist for
- Mostrar los datos de la playlist (nombre y listado de temas) for

*/

var opcion = parseInt(
    prompt(
        "Bienvenid@ a  \n\n 1) Crear una playlist \n 2) Agregar canción \n 3) Buscar canción \n 4) Mostrar playlist \n 5)Salir"
    )
);
switch (opcion) {

    case 1:
        var nombre_playlist = prompt("Agregue el nombre de su playlist");
        var playlist =[];
        break;

    case 2:
        do{
            var cancion = prompt("Escriba el nombre de la canción que dessea guardar");
            playlist[i] = cancion;

        } while( cancion.toLowerCase == "no más");

}