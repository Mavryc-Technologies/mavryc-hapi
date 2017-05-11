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

// Register New User
function registerNewUser(request) {
    // Get the payload into a variable that is easier to work with
    var payload = request.payload;
    // Name all variables
    var firstname = payload.firstname;
    var lastname = payload.lastname;
    var email = payload.email;
    var password = payload.password;
    var phone = payload.phone;
    var birthday = payload.birthday;
    
    // Check to see if email already exists in the Database
    User.findOne({ 'email' :  email }, function(err, users) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (users) {
                return(err);
            } else {
                // No user exists, time to create a new user.
                //Place code here to create a token
                var payload = { email: email };
                var secret = 'alwaysflyukko';
                // encoded object that is being returned to the cleint
                var token = jwt.encode(payload, secret);
                // the decoded object is being stroed in the user model to reference
                var decodedToken = jwt.decode(token, secret);

                //Get current date for date create
                var dateCreate = Date()

                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.local.firstname      = firstname;
                newUser.local.lastname      = lastname;
                newUser.local.email         = email;
                newUser.local.password      = newUser.generateHash(password);
                newUser.local.phone         = phone;
                newUser.local.birthday      = birthday;
                newUser.local.token         = decodedToken;
                newUser.local.dateCreate    = dateCreate

                // save the user
                
                newUser.save(function(err) {
                    console.log("About to save")
                    if (err)
                        throw err;
                    //Return token in return statment
                    console.log(token, newUser)
                    return (token, newUser);
                });
            }
            
    });
}

// Login Existing User
function loginExistinguser(request) {
    // Get the payload into a variable that is easier to work with
    var payload = request.payload;
    // Name all variables
    var email = payload.email;
    var password = payload.password;
    password = User.methods.generateHash(password)
    
    //Check DB for matching email and password
    User.findOne({ 'email' :  email, 'password': password}, function(err, users) {
        // if there are any errors, return the error
        if (err)
            return(err);
        if (users) {
            console.log("Found User")
        } else {
            console.log("Email or Password do not match")
            return(err);
        }
    });
}


module.exports = {
    getAllUsers:getAllUsers,
    registerNewUser:registerNewUser,
    loginExistinguser:loginExistinguser
}
