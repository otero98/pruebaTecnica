const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./db/config")

//SERVIDOR
const app = express();
//CONEXION A SERVIDOR
dbConnection();
//ES CORS
app.use(cors());
//LECTURA Y PARSEO DEL BODY
app.use(express.json());

//RUTAS
//RUTAS PARA LAS TAREAS/TODOS
app.use("/api/todos", require("./routes/todo"));

//ESCUCHAR PETICIONES
app.listen(process.env.PORT, () => { console.log(`Servidor ejecutandose en el puerto: ${process.env.PORT}`) });
