var DailyOperationsModel = require('./../models/dailyOperationModel');
var InputModel = require('./../models/inputModel');

var dailyOperationsStructure = require('./../models/xls-structure/dailyOperationsStructure');
var inputsStructure = require('./../models/xls-structure/inputsStructure');

var dailyOperationProcessing = require('./../utils/utils').dailyOperationProcessing;

var xlsParser = require('./../xls/xls-parser');
var path = require('path');


module.exports = function (app) {

    app.get("/api/dailyOperations", function (req, res) {

        DailyOperationsModel.find({})
            .then(function (dailyOperations) {
                res.send(dailyOperations);
            })
            .catch(function (err) {
                res.send(err);
            })

    });


    //load daily operations without pricing
    app.get('/api/load/dailyOperations', function (req, res) {
        console.log(process.cwd());

        DailyOperationsModel.remove({}, function (err, data) {
            if (err)throw err;
            var rez = xlsParser(dailyOperationsStructure);
            DailyOperationsModel.insertMany(rez, function (err, data) {
                if (err)throw err;
                res.send(data);
            })


        });


    });

    //load daily operations including pricing on first load
    app.get('/api/load/dailyOperations2', function (req, res) {
        console.log(" :", "'/api/load/dailyOperations2=", '/api/load/dailyOperations2');

        DailyOperationsModel.remove({})
            .then(function (dailyOperations) {
                var rez = xlsParser(dailyOperationsStructure);
                return InputModel.find({})
                    .then(function (inputs) {

                        //todo: put funcction and return result

                        var objDO = JSONs.parse(JSON.stringify(inputs));
                        //var objDO = inputs.toObject();


                        var dOUpdated = dailyOperationProcessing(rez, objDO);
                        console.log(" :", "dOUpdated=", dOUpdated);

                        return DailyOperationsModel.insertMany(dOUpdated)
                            .then(function (data) {
                                res.send({data});
                            }).catch(function (err) {
                                res.status(400).send(err);
                            });


                    }).catch((err) => {
                        res.status(400).send(err);
                    })
            })

            .catch(function (err) {
                res.status(400).send(err);
            })


    })


    //load to
    app.get('/api/load/inputs', function (req, res) {
        InputModel.remove({}, function (err, data) {
            if (err)throw err;
            var rez = xlsParser(inputsStructure);
            InputModel.insertMany(rez, function (err, data) {

                if (err)throw err;
                res.send(data);
            })


        });

    });


}
