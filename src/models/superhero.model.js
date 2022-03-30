const mongoose = require('mongoose');
const superheroSchema = mongoose.Schema({
  superhero:{
    type: String,
    require: true,
    minlength: 3,
    unique: true,
  },
  realname:{
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('superheroCollection',superheroSchema);