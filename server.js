require("./app/config/config");

var express = require('express');
var mongoose = require('./app/db/mongoose').mongoose;
var fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var routes = require('./app/routes/routes');



var app = express();

//console.log(" :", "mongoose=", mongoose.Promise);
app.use(express.static('./public'));
app.use(express.static('./node_modules'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);




app.listen( parseInt(process.env.PORT)   , function () {
    console.log('listening on port 3000');
})


module.exports = app;