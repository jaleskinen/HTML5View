
var express = require("express");
var path = require("path");

var app = express();

//============ MIDDLEWARES =================
// MIDDLEWARES MUST BE BEFORE ROUTERS

app.use(function (req, res, next) {
        
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    //send request forward in stack
    next();
});

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/controllers', express.static(path.join(__dirname, 'controllers')));

//============ ROUTERS======================

app.get("/persons", function (req, res) {
    
    res.send("Hello persons there");
    

});

app.listen(3000);