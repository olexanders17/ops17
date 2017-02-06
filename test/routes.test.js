var chai = require('chai');
var {expect}=require('chai');
var chaiHttp = require('chai-http');

var request = require('supertest');
var app = require('../server');
var {popoulateDailyOperations, popoulateInputs}=require('./seed/seed');
var doperJSON = require('./seed/dailyOperations');
var inputsJSON = require('./seed/inputs.json');

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


    /* it("should  back  daily operations 2", function (done) {
     chai.request(app)
     .get('/api/dailyOperations')
     .end(function (err, res) {
     expect(res.status).to.be.eql(200)
     done()
     })

     })
     */

})

describe("GET /api/load/inputs", function () {

    beforeEach(popoulateInputs);
    it("should  back  daily operations", function (done) {
        request(app)
            .get('/api/load/inputs')
            .expect(200)
            .expect(function (res) {
                expect(res.body.length, "lenght").to.be.eql(110);
                expect(doperJSON[0].nameBudget).to.eql(res.body[0].nameBudget)


            })
            .end(done)

    })


})




