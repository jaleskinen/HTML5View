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
        
        res.send("Database action done");
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
This function gets all ducuments from horse colletion
*/
exports.getAllHorses = function (req, res) {
    
    db.Horse.find(function (err, data) {
        
        if (err) {
            
            console.log(err.message);
            res.send("Error in database!!");
        } else {
            
            res.send(data);
        }
    });
};

    /*
This function saves new Horse information to Horse colletion
*/
exports.saveNewHorse = function (req, res) {
    
    var horseTemp = new db.Horse(req.body);
    
    //Save it to database
    horseTemp.save(function (err, ok) {
        
        res.send("Database action done");
    });
};

/*
This function deletes one person from person colletion
*/
exports.deleteHorse = function (req, res) {
    
    //Here req.params.id return string "id=35635463456345f"
    //Split function splits the string from "0" and creates an array
    //where [0] contains "id" and [1] contains "35635463456345f"
    var id = req.params.id.split("=")[1];
    
    db.Horse.remove({_id: id}, function (err) {
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
exports.updateHorse = function (req, res) {
    
    var updateData = {
        Nimi: req.body.Nimi,
        Kutsumanimi: req.body.Kutsumanimi,
        Syntymäaika: req.body.Syntymäaika,
        Esittely: req.body.Esittely
    };
    
    db.Horse.update({_id: req.body.id}, updateData, function (err) {
        if (err) {
            
            res.send(err.message);
        } else {
            
            res.send("Updated");
            //res.send({data:"ok"});
        }
        
    });
};