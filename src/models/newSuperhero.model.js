const mongoose = require('mongoose');
const newSuperheroSchema = mongoose.Schema({
  superhero: { type: String, require: true },
  identity: {
    type: Object,
    require: true,
    realname: { type: String, require: true },
    profession: { type: String, require: true }
  },
  universe: { type: String, require: true },
  gadgets: {
    type: Object,
    require: true,
    weapon: { type: String, require: true },
    extra: { type: String, require: true },
    mask: { type: String, require: true },
  }
});
module.exports = mongoose.model('NewSuperheroCollection', newSuperheroSchema);