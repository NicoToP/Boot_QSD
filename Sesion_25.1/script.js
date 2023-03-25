//Utilizando 

$(document).ready(function () {
    // Todo lo que pongamos aquí, se ejecuta SOLO cuando el documento esté ready o listo 

    document.getElementById("dato"); // JS
    $("#dato") // JQuery el # es porque se llama un ID

    document.getElementsByClassName("btn"); //JS
    $(".btn") //JQuery el punto es porque se llama una clase

    //Value
    document.getElementById("dato").value; //JS
    $("#dato").val(); //JQuery

    //Grabar un dato en el value 
    $("#dato").val();

    $("#dato").val("Hola chicos ¿Cómo están?"); //JQuery

    //Eventos 
    //
    //

    $(".btn").click(function () {
        alert("Hola chicos");
    });

    /* Calculadora */

    $("#btn_suma").click(function () {
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) + parseInt(n2);

        $("#resultado").text("El resultado es: " + total).css("color", "blue");
    });

    $("#btn_resta").click(function () {
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) - parseInt(n2);

        $("#resultado").text("El resultado es: " + total).css("color", "blue");
    });

    $("#btn_multi").click(function () {
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();
        var total = parseInt(n1) * parseInt(n2);

        $("#resultado").text("El resultado es: " + total).css("color", "blue");
    });

    $("#btn_divi").click(function () {
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();

        if(n2 != 0){
            var total = parseInt(n1) / parseInt(n2);
            $("#resultado").text("El resultado es: " + total).css("color", "blue");
        } else {

            $("#resultado").text("El resultado es nulo, no se puede dividir entre 0 ").css("color", "blue");
        }

    });

});