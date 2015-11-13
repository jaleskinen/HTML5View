/*
    * This file is a router for User resource
    * Version: 0.0.1
    * Author: Jarmo Leskinen
    * Description: File created
*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*these vars are defined here because of lint errors*/
var require, module;

var query = require('./queries');
var express = require("express");

var router = express.Router();

//Handle GET request for /friends context, attribute "username". Attribute count makes difference, not name.
router.get('/:username', function (req, res) {
    "use strict";
    console.log("Get with username user router called");
    query.getFriendsByUsername(req, res);

});

// This router handles the request to url localhost:3000/friends/login
router.post('/login', function (req, res) {
    "use strict";
    query.loginFriend(req, res);
});

// This router handles the request to url localhost:3000/friends/register
router.post('/register', function (req, res) {
    "use strict";
    query.registerFriend(req, res);
});

module.exports = router;
