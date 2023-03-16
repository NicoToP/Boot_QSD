/*
var input = document.getElementById("nombre");
var boton = document.getElementById("btn");


boton.addEventListener("click", function(){

    nombre = input.value;
    localStorage.setItem("usuario", input.value);

});

boton_mostrar.addEventListener("click", function(){
console.log("Variable = " + nombre);
console.log("LocalStorage = " + localStorage.getItem("usuario"));
});
*/

// variables
var x = "hola";

//local storage

localStorage.setItem("edad", 30); //esto permite guardar el valor 30 es un almacenamiento local llamado edad

localStorage.getItem("edad"); //Obtener un dato almacenado en el local Storage

localStorage.removeItem("edad"); // Elimina u dato almacenado en el local storage


//guardado
//var num1 = 8;
//localStorage.setItem("num2",8);

/*var num1;

//obtener

console.log(num1);
console.log(localStorage.getItem("num2"));
*/

/*
solicitar al usuario que ingrese:
-  Nombre
- Apellido
- Dirección
- Telefono
- Serie favorita (utilizar select)

y cuando haga un click en "guardar", que se guarde en local storage
y cuando haga click en "recuperar". que se muestre:

-  Nombre: *****
- Apellido: *****
- Dirección: *****
- Telefono: *****
- Serie favorita:  *****

*/

var nombre = document.getElementById("nombre_ing");
var apellido = document.getElementById("apellido_ing");
var direccion = document.getElementById("direccion_ing");
var telefono = document.getElementById("telefono_ing");
var serie = document.getElementById("serie_ing");

var btn_guardar = document.getElementById("btn_guardar");
var btn_recuperar = document.getElementById("btn_recuperar");

// variables para mostrar info

var nombre_mostrar = document.getElementById("nombre");
var apellido_mostrar = document.getElementById("apellido");
var direccion_mostrar = document.getElementById("direccion");
var telefono_mostrar = document.getElementById("telefono");
var serie_mostrar = document.getElementById("serie");


btn_guardar.addEventListener("click", function () {

    localStorage.setItem("nombre_local", nombre.value);
    localStorage.setItem("apellido_local", apellido.value);
    localStorage.setItem("direccion_local", direccion.value);
    localStorage.setItem("telefono_local", telefono.value);
    localStorage.setItem("serie_local", serie.value);

});

btn_recuperar.addEventListener("click", function () {

    console.log("Nombre = " + localStorage.getItem("nombre_local"));

    nombre_mostrar.innerText = "Nombre = " + localStorage.getItem("nombre_local");
    apellido_mostrar.innerText = "Apellido = " + localStorage.getItem("apellido_local");
    direccion_mostrar.innerText = "Direccion = " + localStorage.getItem("direccion_local");
    telefono_mostrar.innerText = "Telefono = " + localStorage.getItem("telefono_local");
    serie_mostrar.innerText = "Serie favorita = " + localStorage.getItem("serie_local");

});



