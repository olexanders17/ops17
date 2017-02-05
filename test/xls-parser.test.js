var {expect}=require('chai');
var parser = require('../app/xls/xls-parser');
var path = require("path")

var doOpts = require("../app/models/xls-structure/dailyOperationsStructure");
var doperJSON = require('./seed/dailyOperations');

describe("#parser", function () {
    it("should read and return valid array ", function (done) {
        var chemicalName="Тренд";


        var pathToFile = path.join(process.cwd(), "test/files/dailyOperTest.xlsx")
        var parsedData = parser(doOpts, pathToFile);

        expect(parsedData[0].chemicalName).to.be.eql(chemicalName)


        done();

    })
})


