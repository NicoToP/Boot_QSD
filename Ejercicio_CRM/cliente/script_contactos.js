$(document).ready(function () {

    obtener_clientes();
    obtener_contactos();

    $("#form_contactos").submit(function (e) {
        e.preventDefault();
        let datos = $(this).serialize();

        $.ajax({
            url: "http://localhost:3000/nuevo_contacto",
            method: "post",
            data: datos,
            success: function (respuesta) {
                alert(respuesta);
                window.location.href = "http://localhost:3000/contacto"
            },
        });
    });

    function obtener_contactos(){
        $.ajax({
            url: "http://localhost:3000/obtener_contactos",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
                armar_tabla(respuesta);
            },
        });
    }

    function obtener_clientes() {

        $.ajax({
            url: "http://localhost:3000/obtener_clientes",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
                armar_options(respuesta);
            },
        });
    }


    function armar_options(resp) {
        let opciones;
        for (let i = 0; i < resp.length; i++) {
            opciones += '<option value="' + resp[i].nombre + '">' + resp[i].nombre + '</option>';
        }
        console.log("////Acá////");
        console.log(opciones);
        $("#clientes").append(opciones);
    }

    function armar_tabla(documentos) {

        if(documentos.length == 0){
            $("#mensaje").text("No hay ningún contacto registrado");
            $("#tablac").hide();
        } else{
            $("#mensaje").text("Contactos registrados");
            $("#tablac").show();
        }
        if(documentos.length == 0){
            $("#mensaje").text("No hay ningún contacto");
            $("#tablaC").hide();
        } else{
            $("#tablaC").show();
        }

        $("#tablaC").empty();

        let cabecera = "<thead><th>#</th><th>Fecha</th><th>Nombre</th><th>Descripcion</th><th>Estado</th><th>Tipo</th></thead>";

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
                documentos[i].nombre +
                td_fin +
                td_inicio +
                documentos[i].descripcion +
                td_fin +
                td_inicio +
                documentos[i].estado +
                td_fin +
                td_inicio +
                documentos[i].tipo +
                td_fin +
                tr_fin;
        }

        tabla = cabecera + "<tbody>" + tabla + "</tbody>";

        $("#tablaC").append(tabla);
    }

});