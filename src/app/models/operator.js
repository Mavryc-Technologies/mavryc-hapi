// load the things we need
var mongoose = require('mongoose');


// define the schema for our flight model
var operatorSchema = mongoose.Schema({

    operator              : {
        id            : String,
        homeAirport   : String,
        city          : String,
        state         : String,
        zipcode       : String,
        operatorCode  : String,
        insurer       : String
    },
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Operator', operatorSchema);
