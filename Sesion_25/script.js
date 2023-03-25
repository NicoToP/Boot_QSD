//Variable captura de datos

var titulo = document.getElementById("titulo_ing");
var descripcion = document.getElementById("descripcion_ing");

var btn_agregar = document.getElementById("agregar");


//variables para mostrar info

var titulo_mostrar;
var descripcion_mostrar;

var tareas = [];
var explica = [];
var contador_add = 0;

var lista = document.getElementById("lista");
lista.classList.add("list-group");
lista.classList.add("list-group-numbered");

// Evento

btn_agregar.addEventListener("click", function () {

    guardar_datos();
    mostrar_datos();
    //console.log(" titulo = " + localStorage.getItem("titulo_local"));
    // console.log(" descripcion = " + localStorage.getItem("descripcion_local"));


});

function guardar_datos() {

    tareas[contador_add] = titulo.value;
    explica[contador_add] = descripcion.value

    localStorage.setItem("titulo_local" + contador_add, tareas);
    localStorage.setItem("descripcion_local" + contador_add, explica);
    contador_add++;
}

function mostrar_datos(){
    for (var i = 0; i < contador_add; i++) {

        var li = document.createElement("li");

        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-around");

        titulo_mostrar = localStorage.getItem("titulo_local" + i);
        descripcion_mostrar = localStorage.getItem("descripcion_local" + i);

        var parra1 = document.createElement("p");
        parra1.innerText = titulo_mostrar;

        var parra2 = document.createElement("p");
        parra2.innerText = descripcion_mostrar;

        li.appendChild(parra1);
        li.appendChild(parra2);


        lista.appendChild(li);

    }

//deja los espacios en blanco
    titulo.value = "";
    descripcion.value = "";
}
