// Ejercicio calculadora

alert("Hola, a continuación se le va a pedir que ingrese dos número para hacer las 4 operaciones matemáticas básicas")
var num1 = prompt("Ingrese un primer número");
var num1T = parseInt(num1);

var num2 = prompt("ingrese un segundo número");
var num2T = parseInt(num2);


alert("A continuación saldran los resultado de suma, resta, multiplicación y división de esos dos número que digitó");

var suma = num1T + num2T;
var resta = num1T - num2T;
var multiplicacion = num1T * num2T;

if (num2T == 0) {
    alert("No se puede dividir entre 0");
    alert("Suma = " + suma + " Resta = " + resta + " Multiplicación = " + multiplicacion);

}
else {

    var division = num1T / num2T;
    alert("Suma = " + suma + " Resta = " + resta + " División = " + division + " Multiplicación = " + multiplicacion);
}