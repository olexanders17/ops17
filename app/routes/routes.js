var DailyOperationsModel = require('./../models/dailyOperationModel');
var InputModel = require('./../models/inputModel');

var dailyOperationsStructure = require('./../models/xls-structure/dailyOperationsStructure');
var inputsStructure = require('./../models/xls-structure/inputsStructure');

var dailyOperationProcessing = require('./../utils/utils').dailyOperationProcessing;

var xlsParser = require('./../xls/xls-parser');
var path = require('path');
var _ = require("lodash");
var forEach = require('async-foreach').forEach;


var pathLoad = process.env.NODE_ENV === "test" ?
    path.join(process.cwd(), process.env.PATH_TEST_XLS) : undefined;


module.exports = function (app) {
// daily operations >>>
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
        console.log(process.env.NODE_ENV);

        DailyOperationsModel.remove({}, function (err, data) {
            if (err)throw err;
            var rez = xlsParser(dailyOperationsStructure, pathLoad);
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

// daily operations <<<

    // inputs >>>

    app.get('/api/inputs', function (req, res) {
        InputModel.find({})
            .then(function (data) {
                res.send(data);
            })
            .catch(function (err) {
                res.send({err});
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


    app.get('/api/pricing/inputs', function (req, res) {


        var DoListPromise = DailyOperationsModel.find({});
        var inputsPromise = InputModel.find({});

        return Promise.all([DoListPromise, inputsPromise])
            .then(function (values) {
                var dopArr = values[0];
                var inpArr = values[1];


                forEach(dopArr,function (dopEl) {
                       console.log(" :", "dopEl=", dopEl.chemicalName);
                    // todo update pricng !!!!

                    return InputModel.findByName(dopEl.chemicalName, function (err, inpEl) {
                        if (inpEl) {
                            dopEl._chemical = inpEl._id
                            console.log(" :", "dopEl=", dopEl);
                            dopEl.save();

                        }

                    })





                });


            })


            .catch(function (err) {
                console.log(" :", "err=", err);
                res.status(400).send({err});
            })


    })


// inputs <<<


}
