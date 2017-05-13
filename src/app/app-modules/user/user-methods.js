//Get all the stuff we nedd 
//Get access to the User Model
var User = require('../../models/user');
var jwt = require('jwt-simple');



//---------------------------------------------------
//Methods
//---------------------------------------------------

// Get all users
function getAllUsers() {
    var allUsers = User.find(function (err, users) {
        if (err) return handleError(err);
        return users
    })
    return allUsers
}

module.exports = {
    getAllUsers:getAllUsers
}
