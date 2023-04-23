$(document).ready(function () {

    obtener_clientes();

    $("#form_cliente").submit(function (e) {
        e.preventDefault();
        let datos = $(this).serialize();

        $.ajax({
            url: "http://localhost:3000/nuevo_cliente",
            method: "post",
            data: datos,
            success: function (respuesta) {
                alert(respuesta);
                window.location.href = "http://localhost:3000/clientes"
            },
        });
    });

    function obtener_clientes() {

        $.ajax({
            url: "http://localhost:3000/obtener_clientes",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
                armar_tabla(respuesta);
            },
        });
    }

    function armar_tabla(documentos) {

        if(documentos.length == 0){
            $("#mensaje").text("No hay ningún cliente registrado");
            $("#tabla").hide();
        } else{
            $("#mensaje").text("Clientes registrados");
            $("#tabla").show();
        }

        $("#tabla").empty();

        let cabecera = "<thead><th>#</th><th>Fecha</th><th>Pais</th><th>Nombre</th><th>Correo</th><th>telefono</th></thead>";

        let tr_inicio = "<tr>";
        let tr_fin = "</tr>";

        let td_inicio = "<td>";
        let td_fin = "</td>";

        let tabla;
        let contador = 0;
        for (let i = 0; i < documentos.length; i++) {

            contador = i + 1;
            tabla +=
                tr_inicio +
                td_inicio +
                contador +
                td_fin +
                td_inicio +
                documentos[i].fecha +
                td_fin +
                td_inicio +
                documentos[i].pais +
                td_fin +
                td_inicio +
                documentos[i].nombre +
                td_fin +
                td_inicio +
                documentos[i].correo +
                td_fin +
                td_inicio +
                documentos[i].telefono +
                td_fin +
                tr_fin;
        }

        tabla = cabecera + "<tbody>" + tabla + "</tbody>";

        $("#tabla").append(tabla);
    }



});