const SuperheroRouter = require('../routes/newSuperhero.route')
const newSuperheroModel = require('../models/newSuperhero.model')


class newSuperheroService{
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez
  async createnewSuperhero(newSuperhero){
    newSuperhero.save();
    return newSuperhero;
  }

  async listnewSuperhero(){
    return newSuperheroModel.find()
  }

  async shownewSuperhero(newSuperheroId){
    return newSuperheroModel.findById({ _id: newSuperheroId })
  }

  /* async editnewSuperhero(newSuperheroId, superhero, identity={realname, profession}, universe, gadgets={weapon, extra, mask}){
    return newSuperheroModel.findById({ _id: newSuperheroId }).then(
      (superheroFind)=> {if(!superheroFind)throw Error('No se encontro el superheroe');
      return newSuperheroModel.updateOne(
        { superheroId },
        { superhero, identity, universe, gadgets }
      );
    }
    );
  } */

  async editnewSuperhero(newSuperheroId, superhero, identity, universe, gadgets){
    return newSuperheroModel.updateOne(
      { _id: newSuperheroId },
      { superhero, identity, universe, gadgets}
    );
  }



  async deletenewSuperhero(newSuperheroId){
      const superhero_remove = newSuperheroModel.findById({ _id: newSuperheroId });
      newSuperheroModel.deleteOne(superhero_remove);
      return newSuperheroModel.deleteOne(superhero_remove);
    }
}

module.exports = newSuperheroService;