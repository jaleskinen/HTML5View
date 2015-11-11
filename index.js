var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var app = express();

//============ MIDDLEWARES =================
// Must be befoer routers, sometimes also order is fixed

//bodyParser urlencoded() middleware parses the json object from HTTP POST request
app.use(bodyParser.urlencoded());


app.use(function (req, res, next) {
        
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    //console.log(database.Person);
    database.myFunction();
    //send request forward in stack
    next();
});

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));

app.use('/persons', person);

//============ ROUTERS======================
/*

app.get("/persons", function (req, res) {
    
    queries.getAllPersons(req, res);
    

});
*/

app.listen(3000);