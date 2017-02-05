//todo: add to daily operations prices and correct  calculate season and use

dailyOperationProcessing = function (dOpers, inputs) {
    var dOpers = dOpers || [];
    var inputs = inputs || [];

    dOpers.forEach(function (dop) {
        inputs.forEach(function (inp) {
            if (dop.fertiliserName === inp.name) {
                console.log(" :", "inp.name=", inp.name);
                dop._fBudgetType = inp.nameBudget;
                dop._fPrice = inp.priceUSD;
                dop._fPrice = Math.round(dop._fPrice * 100) / 100;

                dop._fAmountUSD = inp.priceUSD * dop.fertilizerUsage;
                dop._fAmountUSD = Math.round(dop._fAmountUSD * 100) / 100;
            }

            if (dop.seedName === inp.name) {
                console.log(" :", "inp.name=", inp.name);
                dop._sBudgetType = inp.nameBudget

                dop._sPrice = inp.priceUSD;
                dop._sPrice = Math.round(dop._sPrice * 100) / 100;

                dop._sAmountUSD = inp.priceUSD * dop.seedUsage;
                dop._sAmountUSD = Math.round(dop._sAmountUSD * 100) / 100;
            }

            if (dop.chemicalName === inp.name) {
                console.log(" :", "inp.name=", inp.name);
                dop._cBudgetType = inp.nameBudget
                dop._cPrice = inp.priceUSD;
                dop._cPrice = Math.round(dop._cPrice * 100) / 100;

                dop._cAmountUSD = inp.priceUSD * dop.chemicalUsage;
                dop._cAmountUSD = Math.round(dop._cAmountUSD * 100) / 100;
            }


        });

    });

    return dOpers;
}

/*

 '_sBudgetType': Number,
 '_sPrice': Number,
 '_sAmountUSD': Number,
 '_cBudgetType': Number,
 '_cPrice': Number,
 '_cAmountUSD': Number,
 '_fBudgetType': Number,
 '_fPrice': Number,
 '_fAmountUSD': Number,*/

module.exports.dailyOperationProcessing = dailyOperationProcessing;