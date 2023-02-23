/*SI
var nombre_de_la_variable;
var num1;
var total_empleados;
var listadoClientesDeudores;
var listado_Clientes_Deudores;
*/

/*NOOOO
var numero 1; Espacion e blanco 
var 1numero; no comenzar con número o signos
var .numero; idem anterior
var NUMERO; No mayusculas
var acción; No acentos 
var piña; No caracteres especiales (raros)
var nombre%; idem anterior
var edad¿; idem anterior
var "nombre"; 
*/

//Números o int
var iva = 10;
var total = 100000;



//Cadenas de texto o string
var ensaje = "bienvenidos a mi curso de programación";
var nombreProdcuto = 'Smart TV 55"';
var producto = "Manzana 'deliciosa'";


// boolean 
var estado = true;
var vendido = false;


// funciones para cadenas de texto

// length

var texto = " Hola como están?";
var cantidad = texto.length;

//alert(cantidad)

//Concatenar 

var nombre = "Nicolas ";
var apellido = "Torres";
var nombre_completo = nombre + apellido + " ese soy YO";

//alert(nombre_completo);

//Mayusculas
var mascota = "perro";
//alert(mascota.toUpperCase());

//Minuscula
var color = "VERDE";
//alert(color.toLowerCase());

/*
Prompt es una pequeña interfaz para ingresar datos
var nombre_usuario = prompt("Hola, ingrese su nombre por favor");
alert(nombre_usuario.toUpperCase());
*/

//Operaciones matematicas
/*

+(suma)
-(resta)
*(multiplicación)
/(división)

*/

//ParseInt Transforma un string a un Integer (N° Entero)

//var num = prompt("ingrese un número"); //Acá el número si siendo un string
//parseInt(num); //parseInt ya lo convierte en un N° Entero

//var resta = 10 - num;
//alert(resta);

/* Pedir al usuario que ingrese 2 números (por separado), y mostrar
la suma, resta, multiplicación y división de ambos números */

var num1 = prompt("Ingrese un primer número");
var num1T = parseInt(num1);

var num2 = prompt("ingrese un segundo número");
var num2T =parseInt(num2);




alert("A continuación saldran los resultado de suma, resta, multiplicación y división de esos dos número que digitó");

var suma = num1T + num2T;
var resta = num1T - num2T;
var division = num1T / num2T;
var multiplicacion = num1T * num2T;

alert("Suma = "+ suma + " Resta = " + resta + " División = " + division + " Multiplicación = " + multiplicacion );






/* Solicitar al usuaario que ingrese un color y que este se muestre 
de la siguiente forma:

-Tu color favorito es el ROJO*/

//var color = prompt("hola, ingresa tu color favorito");
//alert("Tu color favorito es el "+color.toUpperCase());


/*
Mostrar en un alert su nombre, apellido y signo del zodiaco que deben ser
variables previamente asignadas. Además, mostrar a continuación la longitud
*/

var nombre = "Nicolas ";
var apellido = "Torres ";
var signo = "Sagitario"
var mi_info = nombre + apellido + signo;
var cantidad = mi_info.length;

//alert("Esta es mi info: " + mi_info.toUpperCase() + " y la longitud es " + cantidad);

/*Crer un script que muestre un alert el de la suma de
2 variables*/

var num_1 = 15;
var num_2 = 20;
var total = num_1 + num_2;

//alert("La suma entre " + num_1 + " y " + num_2 + " es igual a "+ total);
