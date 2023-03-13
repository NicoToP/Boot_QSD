//DOM = document Object Model
//ACCESO A NODOS

/* ---------------------- TAG NAME ----------------------  */
// POR NOMBRE DE ETIQUETA (document.getElementsByTagName("Nombre de la etiqueta"))
var parrafos = document.getElementsByTagName("p");

for (var i = 0; i < parrafos.length; i++) {
    console.log("Mostrando innerText " + parrafos[i].innerText); //obtengo el texto interior de cada párrafo
}

for (var i = 0; i < parrafos.length; i++) {

    console.log("-----------------");
    console.log("Mostrando innerHTML " + parrafos[i].innerHTML);// obtengo el HTML interior de cada parrafo
}




/* ---------------------- NAME ----------------------  */
console.log("-----------------");
console.log("Mostrando elementos por propiedad NAME ");

// Mediante la propiedad Name -------> getElementsByName(XXXX) devuelve array
var a = document.getElementsByName("parrafo1");

for (var i = 0; i < a.length; i++) {
    console.log(a[i].innerText);
    //a[i].innerText = "PRUEBA"; // con esta lista se reemplaza lo que hay en esas etiquetas
}


/* ---------------------- ID ----------------------  */
console.log("-----------------");
console.log("Mostrando elementos por propiedad ID ");
// Mediante la propiedad ID  -------> getElementsById(XXXX)
var b = document.getElementById("boton");
console.log(b.innerText);


/* ---------------------- CLASS ----------------------  */
console.log("-----------------");
console.log("Mostrando elementos por propiedad CLASS ");
//Mediante la propiedad clase  -------> getElementsByClassName(XXXX) devuelve array
var c = document.getElementsByClassName("saludo");

for (var i = 0; i < c.length; i++) {
    console.log(c[i].innerText);
}

//Cuando alguien haga click en el botón, mostrar en un alert, un saludo con el nombre del usuario,
// que previamente ingreso en el input
// en la propiedad value de los inputs me devuelve el texto ingresado por el usuario

function mostrar_mensaje() {
    var msj = document.getElementById("nombre");
    alert(msj.value);
    // hacer todo lo posible para que funcione 
}


/*
var enlace = document.getElementById("link");
console.log(enlace.href);
console.log(enlace.style.color);
console.log(enlace.className);

console.log(enlance.getAttribute("class")); //sirve para obtener cualquier atributo en este caso clase
console.log(enlance.getAttribute("style"));//----------------------------- atributo en este caso style
*/

//Crear una etiqueta (cualquiera), colocarle un ID, con base a ese ID, 
//desde Javascript agregarle los siguientes atributos:
/*
  - class = miClase
  - color de letra = verde
  - texto interno = Hola, estamos hackeando la matrix!
  */

var atributos = document.getElementById("mensaje");
mensaje.className = "miClase";
mensaje.style.color = "green";
mensaje.innerText = "Hola, estamos hackeando la matrix!";

/*
function mostrar_mensaje() {

    var input = document.getElementById("helado");
    alert("Te gusta el helado de " + input.value);
}
*/
//EJERCICIO
/*
Cuando el usuario haga click en un botón "MOSTRAR", deberá mostrar en un console log los datos que 
ingresa en los input: nombre, apellidos y edad 
*/

function mostrar_info(){
    var input_1 = document.getElementById("nombre_1");
    var input_2 = document.getElementById("apellido");
    var input_3 = document.getElementById("edad");
    console.log("Los datos son: \n" + " *Nombre: " + input_1.value + "\n *Apellido: " + input_2.value +  "\n *Edad: " +input_3.value);
}
