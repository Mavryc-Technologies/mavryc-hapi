// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model -- This schema will change after authenticion is complete*******
var userSchema = mongoose.Schema({

    local              : {
        id             : String,
        firstname      : String,
        lastname       : String,
        email          : String,
        password       : String,
        phone          : Number,
        birthday       : Date,
        facebookid     : String,
        facebooktoken  : String,
        token          : Object,
        favoriteFlights: Array,
        role           : String,
        dateCreate     : Date,
    },
});

// methods ======================
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
