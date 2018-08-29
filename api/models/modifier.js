const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modifierSchema = new Schema({
    modifiername: String,
    optionname: String,
    price: Number

})

module.exports = mongoose.model('Modifier', modifierSchema);