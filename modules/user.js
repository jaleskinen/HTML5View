/*
    * This file is a router for User resource
    * Version: 0.0.1
    * Author: Jarmo Leskinen
    * Description: File created
*/
//var require, module;

var query = require('./queries');
var express = require("express");

var router = express.Router();

// This router handles the request to url localhost:3000/friends/login
router.post('/login', function (req, res) {
    
    
});

// This router handles the request to url localhost:3000/friends/register
router.post('/register', function (req, res) {
    
    query.registerFriend(req, res);
});

module.exports = router;
