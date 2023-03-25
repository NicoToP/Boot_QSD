$(document).ready(function () {

    $("#seccionCarrito").hide();
    $("#seccionNosotros").hide();


    // eventos menú
    $("#btn_productos").click(function (e) {
        e.preventDefault();
        $("#seccionProductos").show();
        $("#seccionCarrito").hide();
        $("#seccionNosotros").hide();
    });

    $("#btn_carrito").click(function (e) {
        e.preventDefault();
        $("#seccionCarrito").show();
        $("#seccionProductos").hide();
        $("#seccionNosotros").hide();
    });


    $("#btn_nosotros").click(function (e) {
        e.preventDefault();
        $("#seccionNosotros").show();
        $("#seccionProductos").hide();
        $("#seccionCarrito").hide();
    });

    //Varibales

    var contador_add = 0;
    var total = 0;
    var tabla_vacia = true;

    //Evento botón agregar

    $(".btn_agregar").click(function () {
        guardar_datos($(this));
        mostrar_datos();

    });

    function guardar_datos(boton) {

        localStorage.setItem("producto_local" + contador_add, boton.data("producto"));
        localStorage.setItem("precio_local" + contador_add, boton.data("precio"));
        localStorage.setItem("indice_local", contador_add + 1);

        total = total + boton.data("precio");
        localStorage.setItem("total_local", total);

        contador_add++;
        tabla_vacia = false;

    }

    function mostrar_datos() {

        $("#tabla_cuerpo").empty();
        var total_com = parseInt(localStorage.getItem("total_local"));
        var indice = parseInt(localStorage.getItem("indice_local"));


        for (var i = 0; i < indice; i++) {

            var producto = localStorage.getItem("producto_local" + i);
            var precio = localStorage.getItem("precio_local" + i);
            //Creación cuerpo de la tabla
            var fila = document.createElement("tr");

            var col1 = document.createElement("td");
            var col2 = document.createElement("td");
            var col3 = document.createElement("td");
            var col4 = document.createElement("td");

            var dato1 = document.createTextNode(i + 1);
            var dato2 = document.createTextNode(producto);
            var dato3 = document.createTextNode("1");
            var dato4 = document.createTextNode(precio);

            col1.appendChild(dato1);
            col2.appendChild(dato2);
            col3.appendChild(dato3);
            col4.appendChild(dato4);

            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
            fila.appendChild(col4);

            $("#tabla_cuerpo").append(fila);

        }

        $("#totalCompra").text(total_com);

        if (tabla_vacia == false) {

            $("#tabla").show();
            $("#mensaje_vacio").hide();

        } else {

            $("#tabla").hide();
            $("#mensaje_vacio").show();

        }
    }

});