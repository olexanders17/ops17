require("./app/config/config");

var express = require('express');
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var routes = require('./app/routes/routes');
var mongoose = require('./app/db/mongoose').mongoose;


var app = express();


app.use(express.static('./public'));
app.use(express.static('./node_modules'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);


/*app.post('/upload', function (req, res, next) {
 var sampleFile;

 if (!req.files) {
 res.send('No files were uploaded.');
 return;
 }
 console.log(req);
 sampleFile = req.files.sampleFile;
 sampleFile.mv(__dirname + '/inbox/filename.xlsx', function (err) {
 if (err) {
 res.status(500).send(err);
 }
 else {
 res.send('File uploaded!');
 }
 });
 });*/


app.listen(3000, function () {
    console.log('listening on port 3000');
})


module.exports = app;