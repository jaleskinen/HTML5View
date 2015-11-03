var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET request for /persons context
router.get('/', function (req, res) {
    
    db.getAllPersons(req, res);
});

//Handle POST request for /persons context
router.post('/', function (req, res) {
    
    db.saveNewPerson(req, res);
});

//Handle PUT request for /updatepersons context
router.put('/', function (req, res) {
    
    db.updatePerson(req, res);
});

router.delete('/', function (req, res) {
    
    
});

module.exports = router;