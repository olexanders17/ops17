var chai = require('chai');
var {expect} = require('chai');
var chaiHttp = require('chai-http');
var rewire = require('rewire');
var request = require('supertest');

var app = require('../../server');
var {popoulateDailyOperations, popoulateInputs, clearDailyOperations} = require('./../_seed/seed');
var doperJSON = require('./../_seed/dailyOperations');
var inputsJSON = require('./../_seed/inputs.json');

chai.use(chaiHttp);


describe("Routes", function () {

    it("should open main page", function (done) {
        request(app)
            .get("/")
            .expect(200)
            .end(done)
        ;
    })


})


describe("GET /api/dailyOperations", function () {

    beforeEach(popoulateDailyOperations);
    it("should  back  daily operations", function (done) {
        request(app)
            .get('/api/dailyOperations')
            .expect(200)
            .expect(function (res) {
                expect(res.body.length).to.be.eql(5);
                expect(doperJSON[0].fieldCode).to.eql(res.body[0].fieldCode)


            })
            .end(done)

    })




})

describe("GET /api/load/inputs", function () {

    beforeEach(popoulateInputs);
    it("should  back  daily operations", function (done) {
        request(app)
            .get('/api/load/inputs')
            .expect(200)
            .expect(function (res) {
                expect(res.body.length, "lenght").to.be.eql(110);
                expect(doperJSON[0].nameBudget).to.be.eql(res.body[0].nameBudget)


            })
            .end(done)

    })


})


// todo use sinon
describe("GET /api/load/dailyOperations ", function () {
    it("should load and return valid data", function (done) {
        beforeEach(clearDailyOperations);


        request(app)
            .get('/api/load/dailyOperations')
            .expect(200)
            .expect(function (res) {


                expect(res.body[0].chemicalName).to.be.eql("Тренд2");


            })
            .end(done);


    })

})

