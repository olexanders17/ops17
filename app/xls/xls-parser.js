var XLSX = require('xlsx');
var fs = require('fs');
var pathN = require('path');


function parser(opts, path) {

    var pathToFile = path;
    if (!pathToFile) {
        pathToFile = pathN.join(process.cwd(), opts._path);
    }


    var file = fs.readFileSync(pathToFile, "binary");
    var workbook = XLSX.read(file, {type: "binary"});
    var worksheet = workbook.Sheets[opts._wsn];

    var arr = [];
    for (var i = opts._frd; i < opts._lrd; i++) {
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

                //todo v w check actions
                //standard format
                else {

                    if (cell.t === "n") {
                        obj[structure] = Math.round(cell.v * 1000) / 1000;
                    } else {
                        obj[structure] = cell.v;
                    }


                }


            }

        }
        if (Object.keys(obj).length > 0) {
            arr.push(obj);
        }


    }
    return arr;

}


module.exports = parser;