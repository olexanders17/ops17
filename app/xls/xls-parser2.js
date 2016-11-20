var XLSX = require('xlsx');
var fs = require('fs');


function findPropPathInObject(obj, prop, stack) {
    var pathArray = [];

    function _findPropPathInObject(obj, prop, stack) {

        for (var p in obj) {
            if (p === prop) {
                var tmp = stack + ":" + p;
                var tmpArray = tmp.split(":").splice(1);
                tmpArray.push('')
                pathArray = tmpArray;
            }

            if (typeof obj[p] === "object") {

                _findPropPathInObject(obj[p], prop, stack + ":" + p);
                //console.log(stack);
            }


        }


    }

    _findPropPathInObject(obj, prop, stack);

    // console.log(pathArray);
    return (function (arr) {
        var value = arr.pop();
        while (arr.length) {
            var obj = {};
            obj[arr.pop()] = value;
            value = obj;
        }

        return value;
    })(pathArray)
}

function parser(path, opts) {

    var file = fs.readFileSync(path, "binary");
    var workbook = XLSX.read(file, {type: "binary"});
    var worksheet = workbook.Sheets[opts._wsn];

    var arr = [];
    for (var i = opts._frd; i < 20; i++) {
        var obj = {};
        var isEmptyObj = true;
        var mapping = opts.mapping;
        var formats = opts._fmt || {};

        for (var m in mapping) {
            var cell = worksheet[m + i];

            if (cell) {
                var structure = mapping[m];

                //special format
                if (formats[m]) {
                    switch (formats[m]) {
                        case "date": {
                            obj[structure] = new Date(cell.w);

                            break;
                        }
                    }

                }
                //standard format
                else {
                    obj[structure] = cell.v;


                }


            }

        }
        if (Object.keys(obj).length > 0) {
            arr.push(obj);
        }


    }
    return arr;

}

var path = __dirname + "\\" + "1.xlsx";
opts = {
    _wsn: 'Daily activities',
    _frd: 3,
    _fmt: {
        'C': 'date'
    },
    mapping: {

        'B': 'module',
        'C': 'date',
        'D': 'fieldCode',
        'E': 'fieldTotalArea',
        'G': 'doneHa',
        'H': 'tractorModel',
        'I': 'tractorRegNumber',
        'J': 'tractorDriverName',
        'K': 'motorHours',
        'L': 'tillageEquipmentName',
        'M': 'tillageEquipmentRegNumber',
        'N': 'dieselUsage',
        'O': 'dieselUsagePerHa',
        'P': 'cropName',
        'Q': 'seedName',
        'R': 'seedUsage',
        'S': 'fertilizerName',
        'T': 'fertilizerUsage',
        'U': 'chemicalName',
        'V': 'chemicalUsage',
        'X': 'harvestYear'
    },

    structure: {
        fields: {
            nonActive: {},
            active: {
                fieldCode: "",
                fieldTotalArea: ""
            },


        },
        tractor: {
            tractorModel: '',
            tractorRegNumber: '',
            tractorDriverName: ''
        }


    }
};


var rez = parser(path, opts);
console.log(rez);

/*var rez = findPropPathInObject(opts.structure, 'fieldTotalArea2', []);
 console.log(" :", "aaa=", rez);*/

module.exports = parser;