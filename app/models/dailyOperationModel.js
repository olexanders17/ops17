var mongoose = require('mongoose');

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


module.exports = mongoose.model('DailyOperations', dailyOperationsSchema, "dailyOperations ")
