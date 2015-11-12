/*JSLint warning settings*/
/*jslint  plusplus: true, devel: true*/
/*global $ */

var db = require('./database');

/*
This function gets all ducuments from person colletion
*/
exports.getAllPersons = function (req, res) {
    
    db.Person.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};

/*
This function saves new person information to person colletion
*/
exports.saveNewPerson = function (req, res) {
    
    var personTemp = new db.Person(req.body);
    
    //Save it to database
    personTemp.save(function (err, ok) {
        
        /*res.send("Database action done");*/
        /*res.send("<head><meta http-equiv='Refresh' content='0; url=./index.html'></head>");*/
        
        //Redirect to root context
        res.redirect('/');
    });
};

/*
This function deletes one person from person colletion
*/
exports.deletePerson = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Person.remove({_id: id}, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Delete done");
        }
    });
};

/*
This method updates person information to person colletion
*/
exports.updatePerson = function (req, res) {
    
    var updateData = {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        email: req.body.email
    };
    
    db.Person.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
    });
};

/*
This function search persons from person colletion by name or begin letters of name. Sort by name, ascending order.
*/
exports.findPersonsByName = function (req, res) {
    var search_name = req.params.nimi.split("=")[1];
    console.log("search_name: " + search_name);
    
    db.Person.find({name: {'$regex': '^' + search_name, '$options': 'i'}}, function (err, data) {
            
        if (err) {
            
            console.log(err.message);
            res.send("Error in search!!");
        } else {
            console.log(data);
            res.send(data);
        }
    });
};

exports.registerFriend = function (req, res) {
    
    var friend = new db.Friends(req.body);
    friend.save(function (err) {
        
        if (err) {

            res.send({status: err.message});
        } else {
            res.send({status: "Register OK"});
        }
    });
};

exports.loginFriend = function (req, res) {
    
    var searchObject = {
        
        username: req.body.username,
        password: req.body.password
    };
    
    db.Friends.find(searchObject, function (err, data) {
        
        if (err) {
            
            res.send({status: err.message});
        } else {
            // =< means wrong username or password, readymade HTTP headers for theme messages??
            if (data.length > 0) {
                
                res.send({status: "Login OK"});
                console.log("Login OK");
            } else {
                res.send({status: "Wrong username or password"});
            }
        }
    });
};

exports.getFriendsByUsername = function (req, res) {
    
    var usern = req.params.username.split("=")[1];
    db.Friends.find({username: usern}).populate('friends').exec(function (err, data) {
        if (err) {

            console.log(err);
        } else {
            console.log("friends: " + data);
            res.send(data.friends);
        } 
    });
};