var cartesian = require('cartesian');
var _ = require('lodash');

function sumIf(arrOfObj, summedKeys, summedAmount) {

    var arrOfObj = arrOfObj || [];
    if (!Array.isArray(arrOfObj)) arrOfObj = [];

    var summedKeys = summedKeys || []
    if (!Array.isArray(summedKeys)) summedKeys = [summedKeys];

    var summedAmount = summedAmount || []
    if (!Array.isArray(summedAmount)) summedAmount = [summedAmount];


    var summedAmount = summedAmount || []
    if (typeof summedAmount === "string") {
        summedAmount = [summedAmount]

    }

    uniqParams = {};

    summedKeys.forEach(function (el) {
        uniqParams[el] = [];
    })

    summedAmount.forEach(function (el) {
        uniqParams[el] = 0;
    })

    for (var i = 0; i < summedKeys.length; i++) {
        for (var j = 0; j < arrOfObj.length; j++) {
            var currentKey = summedKeys[i];

            if (uniqParams[currentKey].indexOf(arrOfObj[j][currentKey]) === -1) {
                uniqParams[currentKey].push(arrOfObj[j][currentKey]);
            }

        }

    }


    var result = cartesian(uniqParams);


    result = result.map(function (el) {
        var isReturn = false;
        arrOfObj.forEach(function (el2) {

            for (var key in el) {
                var isAll = false;
                for (var key2 in el2) {

                    if (summedAmount.indexOf(key) !== -1) {
                        isAll = true;
                        break;
                    }


                    if (el[key] === el2[key2]) {
                        isAll = true;
                        break;
                    }


                }

                if ((el[key] == undefined ) && (el2[key] == undefined)) {
                    isAll = true;

                }

                if (!isAll) return;

            }//

            if (isAll) {
                summedAmount.forEach(function (key3) {
                    el[key3] += el2[key3];
                })
                isReturn = true;
            }


        })
        if (isReturn) {
            return el;
        } else {
            return null;
        }


    });

    result = result.filter(function (el) {
        return el !== null;
    })

    return result;
}

module.exports = {sumIf}

