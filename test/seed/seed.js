var DailyOperationModel = require('../../app/models/dailyOperationModel');
var dailyOperationsArr = require('./dailyOperations');
var InputModel = require('../../app/models/inputModel');
var inputsArr = require('./inputs');


var popoulateDailyOperations = function (done) {
    DailyOperationModel.remove({})
        .then(function () {
                return DailyOperationModel.insertMany(dailyOperationsArr);
            }
        )
        .then(function () {
            return done();
        })

}

var popoulateInputs = function (done) {
    InputModel.remove({})
        .then(function () {
                return InputModel.insertMany(inputsArr);
            }
        )
        .then(function () {
            return done();
        })

}


module.exports = {popoulateDailyOperations, popoulateInputs}