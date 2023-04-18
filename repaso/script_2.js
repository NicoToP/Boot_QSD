$(document).ready(function () {

    //variables

    var nombres_lista = [];
    var i = 0;

    //evento

    $("#btn_guardar").click(function () {

        nombres_lista[i] = $("#input_nombres").val();
        i++;

        //localStorage

        localStorage.setItem("nombres_local", JSON.stringify(nombres_lista));

    });

    $("#btn_mostrar").click(function () {

        var nombres_lista_local = JSON.parse(localStorage.getItem("nombres_local"));

        for (var k = 0; k < nombres_lista_local.length; k++) {
            $("#lista").append("<li>" + nombres_lista_local[k] + "</li>");
            console.log(nombres_lista_local[k]);
        }

    });

});