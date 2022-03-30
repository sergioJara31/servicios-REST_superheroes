
/* const express = require('express');
const newSuperheroService = require('../services/newSuperhero.service');
const newSuperheroModel = require('../models/newSuperheroModel');
const newSuperheroRouter = express.Router();
const service = new newSuperheroService();

//EndPoints
newSuperheroRouter.post('/newSuperhero', async (req, res) => {
  const superhero = newSuperheroModel(req.body);
  await service
    .createsuperhero(superhero)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

newSuperheroRouter.get('/', async (req, res) => {
  await service
    .listsuperhero()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

newSuperheroRouter.get('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .showsuperhero(superheroId)
    .then((data) => res.status(302).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

newSuperheroRouter.put('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  const {superhero, real_name, feature = { universe, super_powers }, superhero_sidekick = { sidekick, side_powers },} = req.body;
  await service
    .editsuperhero({ _id: superheroId, real_name, superhero, feature, address, superhero_sidekick })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});

newSuperheroRouter.delete('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .removesuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = newSuperheroRouter; */



const express = require('express');
const newSuperhero_routes = express.Router();
const newSuperhero_model = require('../models/newSuperhero.model')
const newSuperheroService = require('../services/newSuperhero.service')
const service = new newSuperheroService();


newSuperhero_routes.post('/newSuperhero',async(req,res)=>{
  try {
    const new_superhero= newSuperhero_model(req.body)
    const data = await service.createnewSuperhero(new_superhero);
    res.status(201).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})


newSuperhero_routes.get('/',async(req,res)=>{
  try {
    const data= await service.listnewSuperhero();
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }
})


newSuperhero_routes.get('/:newSuperheroId',async(req,res)=>{
  try {
    const {newSuperheroId}=req.params;
    const data = await service.shownewSuperhero(newSuperheroId);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
})

 /* newSuperhero_routes.put('/:newSuperheroId',async(req,res)=>{
  try {
    const {newSuperheroId}=req.params;
    const {superhero, identity={realname, profession}, universe, gadgets={weapon, extra, mask}} = req.body;
    const data = await service.editnewSuperhero(newSuperheroId,superhero, identity, universe, gadgets);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
}) */


newSuperhero_routes.put('/:superheroId', async (req, res) => {
  const { newSuperheroId } = req.params;
  const {superhero, identity, universe, gadgets} = req.body;
  await service
    .editnewSuperhero(newSuperheroId, superhero, identity, universe, gadgets )
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});



newSuperhero_routes.delete('/:newSuperheroId',async(req,res)=>{
  try {
    const {newSuperheroId}=req.params;
    const data = await service.deletenewSuperhero(newSuperheroId)
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error)
  }
})

module.exports=newSuperhero_routes;


