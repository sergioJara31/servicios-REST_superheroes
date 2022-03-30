const express = require('express');
const dinamic_routes = express.Router();
const superhero_model = require('../models/superhero.model')
const superheroService = require('../services/superhero.service')
const _service = new superheroService();


/* javascrpit: subproceso o un solo hilo de ejecucion
(solo puede ejecutar una cosa a la vez) */
dinamic_routes.post('/superhero',async(req,res)=>{
  try {
    const new_superhero= superhero_model(req.body)
    const data = await _service.createSuperhero(new_superhero);
    res.status(201).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})


dinamic_routes.get('/',async(req,res)=>{
  try {
    const data= await _service.listSuperheroes();
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }
})


dinamic_routes.get('/:superheroId',async(req,res)=>{
  try {
    const {superheroId}=req.params;
    const data = await _service.showSuperhero(superheroId);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
})

 dinamic_routes.put('/:superheroId',async(req,res)=>{
  const { superheroId } = req.params;
  const { superhero, realname } = req.body;
   await _service
    .editSuperhero(superheroId, superhero, realname)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
})


dinamic_routes.delete('/:superheroId',async(req,res)=>{
  try {
    const {superheroId}=req.params;
    const data = await _service.deleteSuperhero(superheroId)
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
})

module.exports=dinamic_routes;


