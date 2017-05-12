// load the things we need
var mongoose = require('mongoose');


// define the schema for our flight model
var operatorSchema = mongoose.Schema({

    item              : {
        id            : String,
        type          : String,
        operatorId    : String,
        capacity      : Number,
        manufacturer  : String,
        model         : String
    },
});


// create the model for users and expose it to our app
module.exports = mongoose.model('model', itemSchema);
