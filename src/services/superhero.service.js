const superhero_model= require('../models/superhero.model')

class SuperheroService{
  async createSuperhero(new_superhero){
    new_superhero.save();
    return new_superhero;
  }

  async listSuperheroes(){
    return superhero_model.find();
  }

  async showSuperhero(superheroId){
    return superhero_model.findById({_id: superheroId});

  }

  /* async editSuperhero(superheroId, superhero, realname){
    return superhero_model.findById({_id: superheroId}).then((superheroFind)=>{
      if (!superheroFind) throw Error('no se encontro el sueprheroe');
      return superhero_model.updateOne({superheroId},{superhero,realname});
    });

  } */

  /* async editSuperhero(superheroId, superhero, realname){
    return superhero_model.findById({ _id: superheroId }).then(
      (superheroFind)=> {
        if(!superheroFind) throw Error('No se encontro el superheroe');
        return superhero_model.updateOne(
          { superheroId },
          { superhero, realname }
        );
      }
    );
  } */


  async editSuperhero(superheroId, superhero, realname){
    return superhero_model.updateOne(
      { _id: superheroId },
      { superhero, realname}
    );
  }

  async deleteSuperhero(superheroId){
    const index_remove_superhero = superhero_model.findById({_id: superheroId});
    return superhero_model.deleteOne(index_remove_superhero);

  }
}

module.exports = SuperheroService;

