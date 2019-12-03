var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('app/views/_assets'));
app.use(express.static('app/public'));


consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


module.exports = app;