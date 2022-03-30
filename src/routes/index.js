const express = require('express');
const superhero_routes = require('./superhero.route');
const newSuperhero_route = require('./newSuperhero.route');

function routerApi(app){
/* endpoitn estatico del proyecto para conectar con la api*/
const routes = express.Router();/* GET, POST, PUT, DELETE */

app.use('/api/v2', routes);
/* endpoint dinamico http://localhost:5000/api/v2/superheroes*/
routes.use('/superheroes', superhero_routes);
routes.use('/newSuperheroes', newSuperhero_route);

}

module.exports= routerApi;