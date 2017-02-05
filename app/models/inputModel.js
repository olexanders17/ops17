var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inputsSchema = Schema({
    'name': String,
    'nameBudget': String,
    'priceUSD': Number,
    'type': String


});


module.exports = mongoose.model('Inputs', inputsSchema, "inputs")
