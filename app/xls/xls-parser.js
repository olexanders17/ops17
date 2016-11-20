var XLSX = require('xlsx');
var fs = require('fs');

//Модуль	Дата	Номер поля	Площа поля	Операція	Оброблено, га	Трактор	Реєстраційний номер	Тракторист	Мотогодини	Причепне обладнання	Серійний номер	Пальне	л/га	Культура	Сорт насіння	Використано насіння, кг	Вид добрив	Використано добрив, кг	Вид хімікату	Використано хімікату, кг/л	Допоміжний стовпчик	Рік збору урожаю

/*opts = {
    _wsn: 'Daily activities',
    _frd: 3,
    _fmt: {
        'C': 'date'
    },

    'B': 'module',
    'C': 'date',
    'D': 'fieldCode',
    'E': 'fieldTotalArea',
    'G': 'doneHa',
    'H': 'tractorModel',
    'I': 'tractorRegNumber',
    'J': 'tractorDriverName',
    'K': 'motoHours',
    'L': 'tillageEqupmentName',
    'M': 'tillageEqupmentRegNumber',
    'N': 'dieselUsage',
    'O': 'dieselUsagePerHa',
    'P': 'cropName',
    'Q': 'seedName',
    'R': 'seedUsage',
    'S': 'ferlilizerName',
    'T': 'ferlilizerUsage',
    'U': 'chemicalName',
    'V': 'chemicalUsage',
    'X': 'harvestYear'


};*/


function parser(path, opts) {

   // console.log(path);
    var bstr = fs.readFileSync(path, "binary");

    var workbook = XLSX.read(bstr, {type: "binary"});
    var worksheet = workbook.Sheets[opts._wsn];

    var arr = [];
    for (var i = opts._frd; i < 20; i++) {
        var obj = {};
        var isEmptyObj = true;

        for (z in opts) {
            var cell = worksheet[z + i];
            var isFormatted = false;
            if (cell) {

                //special fomat
                for (s in opts._fmt) {
                    if (z == s) {

                        switch (opts._fmt[s]) {
                            case 'date' :
                                //TODO:change data  lag
                                obj[opts[z]] = new Date(cell.w);
                                //console.log('cell.v', cell.v);
                                isFormatted = true;
                                break;
                        }
                    }
                }

                // standard format
                if (!(isFormatted)) {
                    obj[opts[z]] = cell.v;
                    isEmptyObj = false;
                }


            }
        }

        if (!(isEmptyObj)) {
            arr.push(obj);
        }


    }


    // console.log(arr);
    return arr;

}

/*var path = __dirname + "\\" + "1.xlsx";

parser(path, opts);*/


module.exports = parser;