//Servidor creado con NODE(puro)
/*const http = require("http");
const fs = require("fs");

//Creamos un objeto con nuestro servidor usando el módulo HTTP
//maneja las "peticiones" (request) del cliente, y le devueve una "respuestas"(respond) 
http.createServer(function (req, res) {
    console.log("Gracias, se comunicó con el SERVIDOR");

    //Creando la CABECERA/HEAD de la respuesta (response)
    res.writeHead(200, {

        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",

    });

    // Acceder al archivo que quiero enviarle al cliente 
    let leerArchivo = fs.createReadStream(__dirname + "/index.html");

    leerArchivo.pipe(res);

})
    .listen(3000, function () {
        //localhost:3000
        console.log("Servidor Listo y escuchando el puerto 3000");

    });*/

//Servido creado con express

const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// Configurar el boyparser para utilizarlo

app.use(bodyParser.urlencoded({ extended: true }));
//Creamos la URL  + Método = Request o Peticion del cliente

//cuando el CLIENTE ingrese por GET a la URL = http://localhost:3000/ejemplo
app.get("/home", function (req, res) {
    //hago algo
    console.log("EL CLIENTE ingreso por GET a http://localhost:3000/home");

    //respuesta del servidor 
    res.sendFile(__dirname + "/index.html");
});

// ruta para GET/ registro
app.get("/registro", function (req, res) {
    res.sendFile(__dirname + "/registro.html");
});
// ruta para GET/ login
app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.get("/calculador", function (req, res) {
    res.sendFile(__dirname + "/calculador.html");
});
//Ruta para manejar la petición POST/ formulario

app.post("/formulario_login", function (req, res) {

    // Capturamos los datos y hacemos algo 
    console.log(req.body);
    console.log("correo " + req.body.dato1);
    console.log("clave " + req.body.dato2);
    //res.send("gracias por completar el formulario");
});

app.post("/calculador", function (req, res) {

    // Capturamos los datos y hacemos algo 
    let total = 0;
    let num1 = parseInt(req.body.numero1);
    let num2 = parseInt(req.body.numero2);

    if (req.body.operacion == "suma") {
        total = num1 + num2;
    } else if (req.body.operacion == "resta") {
        total = num1 - num2;
    } else if (req.body.operacion == "multi") {
        total = num1 * num2;
    } else if (req.body.operacion == "divi" && req.body.numero2 != 0) {
        total = num1 / num2;
    }
        console.log(req.body);
        console.log("Num 1 = " + req.body.numero1);
        console.log("Num 2 = " + req.body.numero2);
        console.log("operacion = " + req.body.operacion);
        console.log("Resultado = " + total);
        //res.send("gracias por completar el formulario");
    });

/*
app.get("/hola", function (req, res) {
    res.send("Estas en la seccion /hola");
});

app.get("/chau", function (req, res) {
    res.send("Estas en la seccion /chau");
});
*/
app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000");
});