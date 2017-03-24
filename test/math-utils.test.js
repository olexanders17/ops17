var {sumIf}=require('../app/utils/math-utils');
var chai = require('chai');
chai.should();
var expect = chai.expect;

chai.use(require('chai-things'));
chai.use(require('chai-arrays'));


chai.use(require('chai-things'));

var arrOfObj = [{"color": "red", "fire": "rare", "price1": 10, "price2": 98},
    {"color": "red", "fire": "rare", "price1": 10, "price2": 96.6},
    {"color": "red", "fire": "well-done", "price1": 10, "price2": 95.2},
    {"color": "red", "fire": "rare", "price1": 10, "price2": 93.8},
    {"color": "red", "fire": "rare", "price1": 10, "price2": 92.4},
    {"color": "green", "fire": "well-done", "price1": 10, "price2": 91},
    {"color": "green", "fire": "medium", "price1": 10, "price2": 89.6},
    {"color": "green", "fire": "well-done", "price1": 10, "price2": 88.2},
    {"color": "green", "fire": "rare", "price1": 10, "price2": 86.8},
    {"color": "green", "fire": "rare", "price1": 10, "price2": 85.4},
    {"color": "green", "fire": "well-done", "price1": 10, "price2": 84},
    {"color": "blue", "fire": "medium", "price1": 10, "price2": 82.6},
    {"color": "blue", "fire": "medium", "price1": 10, "price2": 81.2},
    {"color": "blue", "fire": "well-done", "price1": 10, "price2": 79.8},
    {"color": "blue", "fire": "rare", "price1": 10, "price2": 78.4},
    {"color": "blue", "fire": "well-done", "price1": 10, "price2": 77},
    {"color": "blue", "fire": "medium", "price1": 10, "price2": 75.6},
    {"color": "blue", "fire": "well-done", "price1": 10, "price2": 74.2}];


var summedKeys = ["color", "fire"];
var summedAmount = ["price1", "price2"];

describe("#sumIf", function () {
    it("should return proper array with grouped amounts ", function () {
        var res = sumIf(arrOfObj, summedKeys, summedAmount);

        var totoalSumPrice2 = 0;
        res.forEach(function (el) {
            totoalSumPrice2 += el.price2;
        })
        expect(totoalSumPrice2).to.be.closeTo(1549, 0.99);

        var obj1 = {
            color: "blue",
            file: "medium",
            price1: 30,
            price2: 239.4


        }

        res.should.contain.something.property(summedKeys[0]);
        res.should.contain.something.property(summedKeys[1]);
        res.should.contain.something.property(summedAmount[0],obj1[summedAmount[0]]);
        res.should.contain.something.property(summedAmount[1],obj1[summedAmount[1]]);



        expect(res, "array is exists").is.exist;
        expect(res).have.length.above(1);
        expect(res).is.instanceOf(Object);

        // res.should.include.deep.equals(obj1);

    });
})
