
/*var x = 10;  

if (x < 9) {
    alert("es menor que 10");
} else {
    alert("Es mayor o igual que 10");
}
*/

// Switch

/*
var x = 10;  

switch(x) {

    case 10:
    alert("El valor es 10");
    break;

    case 9:
    alert("El valor es 9");
    break;

    case 7:
    alert("El valor es 7");
    break;

    default:
        alert("El valor es otro número");
}
*/

/*
var mes = prompt("Ingrese un mes");  

switch(mes) {

    case 10:
    alert("El valor es 10");
    break;

    case 9:
    alert("El valor es 9");
    break;

    case 7:
    alert("El valor es 7");
    break;

    default:
        alert("El valor es otro número");
}
*/

alert("Bienvenido a mi calculadora");

var opcion = parseInt(prompt("Ingrese la operación que desea hacer: \n\n 1 - Suma \n 2 - Resta \n 3 - División \n 4 - Multiplicación"));

if(opcion >= 1 && opcion <=4) {

    var num1 = parseInt(prompt("Ingrese un primer número"));
    var num2 = parseInt(prompt("Ingrese un segundo número"));
}
var total;
var operacion;


switch (opcion) {

    case 1:
        total = num1 + num2;
        operacion = "Suma";
        break;

    case 2:
        total = num1 - num2;
        operacion = "Resta";
        break;

    case 3:
        if (num2 == 0) {
            alert("No se puede realizar la operación ya que el segundo número es 0");
        } else {
            total = num1 / num2;
            operacion = "División";
        }

    case 4:
        total = num1 * num2;
        operacion = "Multiplicación";
        break;

    default:
        alert("Esa opción no está en el menú");
}

if(opcion >= 1 && opcion <=4) {
alert("La " + operacion + " es: " + total);
}