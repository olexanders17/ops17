var mongoose=require('mongoose');
var database=require('../../config/database');
var DailyOperations=require('../../app/models/dailyOperations');
var parser=require('../xls/xls-parser');
var dailyOperationsStructure=require('../models/xls-structure/dailyOperationsStructure');

mongoose.connect(database.url);
//read from file
var path = "C:\\Users\\Adm\\IdeaProjects\\ops17\\app\\xls\\1.xlsx";
var ops=parser(path, dailyOperationsStructure);
console.log(ops);

//save method

//console.log(dailyOperations);




/*
for (var i = 0; i < ops.length; i++) {
    newDailyOperations=new DailyOperations(ops[i]);
    newDailyOperations.save(function (err,data) {
        if(err) throw err;

        console.log("saved");
        console.log(data);

    });

}
*/









