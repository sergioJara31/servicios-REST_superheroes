/* framework express y base de datos */
const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./src/routes');
const app=express();

/* acceso al archivo .env y asius variables de ambiente */
require('dotenv').config();
const port = process.env.PORT;

/* habilitamos el cuerpo donde correca el proyecto */
app.listen(port,()=> console.log('open port',port));

/* conectar a la base de datos  */
mongoose.connect( process.env.MONGODB_CONNECT)
  .then(()=>console.log('success connection with database'))
  .catch((error)=>console.error(error));

/* el sistema da una respuesta en formato json */
app.use(express.json());

/* accede a los endpoint(rutas) de la api {GET, POST, PUT, DELETE, PATCH} */
routerApi(app);
