/*
var a = 10;
var b = 5;

function suma(x,b){
    console.log("b al principio de la función " + b);
    var total = x + b;
    console.log("total = " + total);
    b++
    console.log("b al final de la función " + b);
}
suma (a,b);
console.log("b afuera  de la función " + b);
*/

/*
function suma(a,b){
    var total = a + b;
    return total;
}

var a = 10;
var b = 25;

var resultado = suma(a,b);
console.log(resultado);
*/


//--------------------------------------------------------------------------------

//EJEMPLO 2
/*
function saludo(nombre){
    var msj = "Hola " + nombre + " ¿Cómo estás?";
    return msj;
}

var hola;
hola = saludo("Emiliano");
alert(saludo("juan"));

console.log(saludo("Alejandra"));
*/

//--------------------------------------------------------------------------------

//OTRA CALCULADORA
/*
var op = parseInt(prompt("Ingrese una opción: \n 1) SUMA \n 2) RESTA \n 3) MULTIPLICACIÓN \n 4) DIVISIÓN \n 5)SALIR"));

switch (op) {

    case 1:
        //suma
        mostrar_alert(operacion_matematica("suma"));
        break;
    case 2:
        //resta 
        var x = operacion_matematica("resta");
        mostrar_console(x);
        break;
    case 3:
        //multiplicación
        mostrar_console(operacion_matematica("multiplicacion"));
        break;
    case 4:
        //división
        mostrar_alert(operacion_matematica("division"));
        break;
    case 5:
        break;
    default:
        alert("Ingrese una opción correct");
        break;
}



function operacion_matematica(accion) {
    var a = parseFloat(prompt("Ingrese el primer número"));
    var b = parseFloat(prompt("Ingrese el segundo número"));
    var total = 0;

    switch (accion) {

        case 'suma':
            total = a + b;
            break;
        case 'resta':
            total = a - b;
            break;
        case 'multiplicacion':
            total = a * b;
            break;
        case 'division':
            if (b != 0) {
                total = a / b;
            } else {
                alert("No se puede dividir entre 0");
            }
            break;
    }
    return total; //devuelve el resultado 
}
function mostrar_alert(param) {
    alert("El resultado es: " + param);
}

function mostrar_console(param) {
    console.log("El resultado es: " + param);
}
*/

//--------------------------------------------------------------------------------

//Según un texto ingresado por el usuario, van a crear 3 funciones:
/*
-Mayusculas (que reciba un parametro y devuelva ese mismo en mayúsculas)
-Minusculas (que reciba un parametro y devuelva ese mismo en minúsculas)
-mostrar (que reciba un parametro y muestr por consola el mismo)

darle a elegir al usuario, como desea transformar el texto ( a may o min) y luego se muestra.


function minusToMayus(texto) {
    transformada += texto.toUpperCase();
    return transformada;
}

function mayusToMinus(texto) {
    transformada += texto.toLowerCase();
    return transformada;
}

function mostrar(transformada) {
    console.log("La frase transformada es: " + transformada);
}
   


var texto = prompt("Ingrese un texto para posteriormente transformarlo a minúscula o mayúscula");
var transformada = "";

while (opcion != 4) {

    
    var opcion = parseInt(prompt("El texto lo desea transformar a: \n\n 1) MAYÚSCULA \n 2) MINÚSCULA \n 3) MOSTRAR RESULTADO \n 4) SALIR"));

    switch (opcion) {
        case 1:
            //minuscula a mayuscula
            minusToMayus(texto);
            break;
        case 2:
            mayusToMinus(texto);
            //Mayuscula a minuscula
            break;
        case 3:
            //mostrar
            mostrar(transformada);
        case 4:
            alert("GRACIAS!!!");
            break;    
    }
};
*/

/*
Crear una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
  es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
  
  Ejemplo: 
  - Anana 
  - La ruta nos aporto otro paso natural
  */
function EliminarEspacios(texto) {
    for (var i = 0; i <= texto.length - 1; i++) {

        if (texto.slice(i, i + 1) != ' ') {
            //arrayTexto[i] = texto.slice(i , i + 1);
            textoSinEspacio += texto.slice(i, i + 1);
        }
    }
    return textoSinEspacio;
}

function CovertirStringEnArray(textoSinEspacio) {
    for (var i = 0; i <= textoSinEspacio.length - 1; i++) {

        if (textoSinEspacio.slice(i, i + 1) != ' ') {
            arrayTexto[i] = textoSinEspacio.slice(i, i + 1);
        }
    }
    return arrayTexto;
}
//arrayTexto[i] = textoSinEspacio.slice(i, i +1);

function mostrar(textoSinEspacio){
    console.log("texto sin espacios: " + textoSinEspacio);
}

var texto = "La ruta nos aporto otro paso natural";
texto = texto.toLowerCase();
var arrayTexto = [];
var arrayTextoInverso = [];
var textoInverso = " ";
var textoSinEspacio = " ";

EliminarEspacios(texto);
mostrar(textoSinEspacio);
CovertirStringEnArray(textoSinEspacio);
console.log(arrayTexto);


/*
for (var i = 0; i <= texto.length - 1; i++) {

    if (texto.slice(i, i + 1) != ' ') {
        //arrayTexto[i] = texto.slice(i , i + 1);
        textoSinEspacio += texto.slice(i, i + 1);
    }

    for (var j = texto.length - 1; j >= 0; j-- ){
         arrayTextoInverso[j] = arrayTexto[j];
     }
}*/


//console.log("texto sin espacios: " + textoSinEspacio);
console.log("Normal: " + texto);
console.log("Inverso: " + arrayTextoInverso);