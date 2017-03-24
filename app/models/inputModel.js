var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var inputsSchema = new Schema({
    'name': String,
    'nameBudget': String,
    'priceUSD': Number,
    'type': String


});


/*inputsSchema.statics.findByName = function (name) {


 var that = this;

 return that.findOne({name: name})
 .then(function (input) {


 return new Promise(function (resolve, reject) {
 if (input) {
 resolve(input)

 } else {
 //reject("Can not find any input object")
 resolve("");

 }


 })
 })
 .catch(function (err) {
 console.log(" :", "err=", err);
 Promise.reject(err);
 })


 }*/


inputsSchema.statics.findByName = function (name, cb) {

    var InputModel = this;

    return InputModel.findOne({name: name}, function (err, data) {
        console.log(" :", "InputModel=", data);
        cb(null, data);
    })


}


module.exports = mongoose.model('Inputs', inputsSchema, "inputs")
