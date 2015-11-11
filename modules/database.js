var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/oma', connectionStatus);
//mongoose.connect('mongodb://localhost:27017/testi', connectionStatus);


/*
    Connetion callback for fail and ok cases
*/
function connectionStatus(err, ok) {
    
    if (err) {
        
        console.log(err.message);
    } else {
        
        console.log("We are conneted:");
    }
}

var User = mongoose.model('User', {
    username: {type: String, unique: true},
    passwors: String,
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person'}]
});

var Person = mongoose.model('Person', {
    name: String,
    address: String,
    age: {type: Number},
    email: String
}, 'person');

//Using exports object you expose the data to other modules
exports.Person = Person;

exports.myFunction = function () {
    
    console.log("This note is from exports.myFunction");
};

