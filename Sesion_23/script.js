// Event listener
//FÓRMULA
/*elemto.addEventListener( "evento" , function(){

});
*/

//var btn = document.getElementById("boton");

//Crear un escuchador de eventos para el botón
/*
btn.addEventListener("click", function () {
    alert("Hola mundo");
});
*/
/*Solicitar al usuario que ingrese un número y decir por alert si el número es PAR o IMPAR.
El número debe solicitarse por input
Necesitamos: 1 input (number), 1 boton, 1 addEventListener

var btn_2 = document.getElementById("mostrar");
var btn_3 = document.getElementById("resetear");
var msj = document.getElementById("mensaje");
var num = document.getElementById("numero");

btn_2.addEventListener("click", function () {

    if (num.value % 2 == 0) {
        msj.innerText = "Hola, el número " + num.value + " es PAR";
    } else {
        msj.innerText = "Hola, el número " + num.value + " es IMPAR";
    }
});

btn_3.addEventListener("click", function () {
    num.value = "";
    msj.innerText = "";
});

var texto = document.getElementById("texto");

var mostrar_nom = document.getElementById("normal");
var mostrar_mayus = document.getElementById("mayus");
var mostrar_minus = document.getElementById("minus");
var mostrar_italica = document.getElementById("italica");
var mostrar_contrario = document.getElementById("contrario");



texto.addEventListener("input", function () { //Tambien usa el evento "keyup"
    mostrar_nom.innerText = texto.value;
    mostrar_mayus.innerText = texto.value.toUpperCase();
    mostrar_minus.innerText = texto.value.toLowerCase();
    mostrar_italica.style.fontStyle = "italic";
    mostrar_italica.innerText = texto.value;

    var contrario = "";

    for (var i = texto.value.length; i >= 0; i--) {

        contrario = contrario + texto.value.slice(i - 1, i);
    }
    mostrar_contrario.innerText = contrario;
});

*/

/*

Crear una calculadora básica, utilizando:
- 2 inputs
- 4 botones
- 1 h4
- funciones con parametros y return
- eventos (addEventListener)



var dato1 = document.getElementById("num1");
var dato2 = document.getElementById("num2");
var total = 0;

var btn_suma = document.getElementById("suma");
var btn_resta = document.getElementById("resta");
var btn_multi = document.getElementById("multi");
var btn_divi = document.getElementById("divi");

var msj_resultado = document.getElementById("msj_resultado");

btn_suma.addEventListener("click", function () {
    suma(dato1.value, dato2.value);
    mostrar(total);
});

btn_resta.addEventListener("click", function () {
    resta(dato1.value, dato2.value);
    mostrar(total);
});

btn_multi.addEventListener("click", function () {
    multiplicacion(dato1.value, dato2.value);
    mostrar(total);
});

btn_divi.addEventListener("click", function () {
    division(dato1.value, dato2.value);
    mostrar(total);
});



function suma(num1, num2) {
    total = parseInt(num1) + parseInt(num2);
    return total;
}

function resta(num1, num2) {
    total = num1 - num2;
    return total;
}

function multiplicacion(num1, num2) {
    total = num1 * num2;
    return total;
}

function division(num1, num2) {
    if (num2 != 0) {
        total = num1 / num2;
        return total;
    } else {
        return alert("No se puede dividir entre 0");
    }
}

function mostrar(resultado) {
    msj_resultado.innerText = resultado;
}

*/

/*

var tabla = document.getElementById("tabla");
var btn_add = document.getElementById("add");
var miTabla = "";
btn_add.addEventListener("click", function () {

    //forma 1
    var fila = document.createElement("tr"); //crear una etiqueta "tr"
    var col = document.createElement("td"); //crear una etiqueta "td"
    var dato = document.createTextNode("Este es un dato de prueba");

    col.appendChild(dato); //le agregamos un "hijo" a la columna
    fila.appendChild(col); //le agregamos un "hijo" a la fila

    tabla.appendChild(fila); //le agregamos a la tabla una fila, que adentro tiene una columna y adentro un dato

    //forma 2

    var miTabla = miTabla + "<tr><td>Hola Chicos cómo están</td></tr>"
    tabla.innerHTML = miTabla;
});

*/

/*
EJERCICIO

Se le solicita al usuario que ingrese:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167
*/

//captura de datos
var fecha = document.getElementById("fecha_ing");
var nombre = document.getElementById("nombre_ing");
var email = document.getElementById("email_ing");
var telefono = document.getElementById("telefono_ing");

var producto = document.getElementById("producto_ing");
var cantidad = document.getElementById("cantidad_ing");
var precio = document.getElementById("precio_ing");

//variables para mostrar datos
var mostrar_fecha = document.getElementById("fecha_salida");
var mostrar_nombre = document.getElementById("nombre_salida");
var mostrar_email = document.getElementById("email_salida");
var mostrar_telefono = document.getElementById("telefono_salida");

//variables bonotes

var boton_add = document.getElementById("add");
var boton_mostrar = document.getElementById("mostrar");

//Variable tabla

var tabla_pro = document.getElementById("tabla_produc");

//Variables vectores

var lista_productos = [];
var lista_cantidades = [];
var lista_precios = [];
var total = 0;
var contador_add = 0;

//Eventos 

boton_mostrar.addEventListener("click", function () {

    mostrar_fecha.innerText = fecha.value;
    mostrar_nombre.innerText = nombre.value;
    mostrar_email.innerText = email.value;
    mostrar_telefono.innerText = telefono.value;

    //Creación de tabla

    for (var i = 0; i < contador_add; i++) {

        var fila = document.createElement("tr");

        var col1 = document.createElement("td");
        var col2 = document.createElement("td");
        var col3 = document.createElement("td");

        var dato1 = document.createTextNode(lista_productos[i]);
        var dato2 = document.createTextNode(lista_cantidades[i]);
        var dato3 = document.createTextNode(lista_precios[i]);


        col1.appendChild(dato1);
        col2.appendChild(dato2);
        col3.appendChild(dato3);

        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);

        tabla_pro.appendChild(fila);
    }


});


boton_add.addEventListener("click", function () {
    
    lista_productos[contador_add] = producto.value;
    lista_cantidades[contador_add] = cantidad.value;
    lista_precios[contador_add] = precio.value;
    total = total + (cantidad.value * precio.value);
    contador_add++;

    producto.value = "";
    cantidad.value = "";
    precio.value = "";
});








