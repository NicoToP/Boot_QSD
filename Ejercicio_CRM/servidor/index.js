// Paquetes y módulos estos se dejan igual
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");


//Conexión con la Base de datos
mongoose.connect(
    "mongodb+srv://NicolasTP:Nico123@cluster0.odpek8j.mongodb.net/App_CRM?retryWrites=true&w=majority"
)
    .then(function (db) {
        console.log("conectado a la Base de Datos");
    })
    .catch(function (err) {
        console.log(err);
    });


//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

const Cliente = require("./models/cliente");
const Contacto = require("./models/contactos");

//Ruta -----------> INICIO
app.get("/", function (req, res) {
    res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/clientes", function (req, res) {
    res.sendFile(path.resolve("../cliente/clientes.html"));
});

app.get("/contacto", function (req, res) {
    res.sendFile(path.resolve("../cliente/contacto.html"));
});

//Ruta -------> Obtener listaddo de clientes de la BD
app.get("/obtener_clientes", async function (req, res) {
    let docs = await Cliente.find();
    res.send(docs);
});

//Ruta -------> Obtener listaddo de contactos de la BD
app.get("/obtener_contactos", async function (req, res) {
    let docs = await Contacto.find();
    res.send(docs);
});


//Capturo los datos del registro de un nuevo cliente
app.post("/nuevo_cliente", async function (req, res) {

    let datos_enviados = req.body;
    let nuevo_registro = new Cliente(datos_enviados);
    await nuevo_registro.save();
    console.log("Nuevo cliente registrado " + nuevo_registro);
    res.send("Se ha registrado correctamente le nuevo cliente");

});

//Capturo los datos del registro de un nuevo cliente
app.post("/nuevo_contacto", async function (req, res) {

    let datos_enviados = req.body;
    let nuevo_registro = new Contacto(datos_enviados);
    await nuevo_registro.save();
    console.log("--------------------------------------------");
    console.log("Nuevo contacto registrado " + nuevo_registro);
    res.send("Se ha registrado correctamente el nuevo contacto");
});




//Puerto y escuchar del servidor
app.listen(3000, function () {
    console.log("-------------------------------------");
    console.log("Servidor funcionando correctamente!!!");
});