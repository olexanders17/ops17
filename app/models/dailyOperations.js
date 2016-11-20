var mongoose = require('mongoose');

module.exports = mongoose.model('dailyOperations', {

    'module': String,
    'date': Date,
    'fieldCode': String,
    'fieldTotalArea': String,
    'doneHa': String,
    'tractorModel': String,
    'tractorRegNumber': String,
    'tractorDriverName': String,
    'motorHours': String,
    'tillageEquipmentName': String,
    'tillageEquipmentRegNumber': String,
    'dieselUsage': String,
    'dieselUsagePerHa': String,
    'cropName': String,
    'seedName': String,
    'seedUsage': String,
    'fertiliserName': String,
    'fertilizerUsage': String,
    'chemicalName': String,
    'chemicalUsage': String,
    'harvestYear': String,


})
