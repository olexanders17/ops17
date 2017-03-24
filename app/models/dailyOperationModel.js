var mongoose = require('mongoose');
//var InputModel = require('./inputModel');
//const {ObjectID} = require('mongodb');

var Schema = mongoose.Schema;

var dailyOperationsSchema = Schema({
    'module': String,
    'date': Date,
    'fieldCode': String,
    'fieldTotalArea': Number,
    'doneHa': Number,
    'tractorModel': String,
    'tractorRegNumber': String,
    'tractorDriverName': String,
    'motorHours': String,
    'tillageEquipmentName': String,
    'tillageEquipmentRegNumber': String,
    'dieselUsage': Number,
    'dieselUsagePerHa': Number,
    'cropName': String,
    'seedName': String,
    'seedUsage': Number,
    'fertiliserName': String,
    'fertilizerUsage': Number,
    'chemicalName': String,
    'chemicalUsage': Number,
    'harvestYear': Number,

    "_chemical": mongoose.Schema.Types.ObjectId,
    //"_chemical": String,
    '_sBudgetType': String,
    '_sPrice': Number,
    '_sAmountUSD': Number,
    '_cBudgetType': String,
    '_cPrice': Number,
    '_cAmountUSD': Number,
    '_fBudgetType': String,
    '_fPrice': Number,
    '_fAmountUSD': Number,

});

/*dailyOperationsSchema.pre("save", function (next) {
    console.log("save");

    var doModel = this;

    /!*return InputModel.findByName(doModel.chemicalName)
     .then(function (data) {
     doModel._chemical = new ObjectID( data._id);
     next();
     })
     .catch(function () {
     next();
     })*!/
    next();

});*/


module.exports = mongoose.model('DailyOperations', dailyOperationsSchema, "dailyOperations ")
