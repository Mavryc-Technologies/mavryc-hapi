// Get everthing we might need.
// Bcrypt info
var bcrypt = require('bcrypt');
const saltRounds = 10;
//Get access to the User Model
var User = require('../../models/user');
var jwt = require('jwt-simple');
// generating a hash
function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


// Register New User
function registerNewUser(request) {
    // Get the payload into a variable that is easier to work with
    var payload = request.payload;
    // Name all variables
    var email = payload.email;
   
    // Check to see if email already exists in the Database
    User.findOne({ 'local.email' :  email }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        // check to see if theres already a user with that email
        if (user) {
            console.log("Email is already being used")
            return(err);
        } else {
            // No user exists, time to create a new user.
            saveNewUser(payload)
        }    
    });
}


//Save New user 
function saveNewUser(payload){
        //Name all variables
        var firstname = payload.firstname;
        var lastname = payload.lastname;
         var password = payload.password;
        var phone = payload.phone;
        var birthday = payload.birthday;
        var email = payload.email;
        // Bcrpt password so no Hackers find it, although they probably will
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password, salt);

    //Place code here to create a token
        var payload = { email: email };
        var secret = 'alwaysflyukko';
        // encoded object that is being returned to the cleint
        var token = jwt.encode(payload, secret);

        //Get current date for date create
        var dateCreate = Date()

        // if there is no user with that email
        // create the user
        var newUser            = new User();

        // set the user's local credentials
        newUser.local.firstname      = firstname;
        newUser.local.lastname      = lastname;
        newUser.local.email         = email;
        newUser.local.password      = hash;
        newUser.local.phone         = phone;
        newUser.local.birthday      = birthday;
        newUser.local.token         = token;
        newUser.local.role          = "PASSENGER"
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

// Function to login in user
function loginUser (request) {
    // Name all variables
    var email = request.payload.email;
    var password = request.payload.password;
    //Check to see if there is a user with mathching email and password
    User.findOne({ 'local.email' :  email}, function(err, user) {
            // if there are any errors, return the error
            if (err) {
                return (err);
            };
            // check to see if theres already a user with that email
            if (user) {(
            //Since there is a user with this email we will now compare plaintext password to hash
            compareHash(user, password)
            )
            } else {
                console.log("Email and Password do not match")
                return("Email and Password do not match")
            }
            
    });

}

// Function to check if plain txt matches db hashed password
function compareHash(user, password) {
    // Grab password from Db so we can compare it to payload pass
    var hash = user.local.password
    // Bcrpt password so no Hackers find it, although they probably will
        if (bcrypt.compareSync(password, hash) == true) {
        console.log("Password Matched")
        return(user)
        } else {
            console.log("Email and Password do not match")
            return("Email and Password do not match")
        }
}

function checkUserRole (request) {
    // Get the payload into a variable that is easier to work with
    var payload = request.payload;
    // Name all variables
    var token = payload.token;
    
    //Find user token in DB
    User.findOne({ 'local.token' :  token }, function(err, users) {
        // if there are any errors, return the error
        if (err) {
            return done(err);
        }
        // check to see if theres already a user with that token
        if (users) {
            console.log(users)
        } else {
            return("User is not authorized to visit this page");
        }
    });
};

module.exports = {
    generateHash:generateHash,
    registerNewUser:registerNewUser,
    loginUser:loginUser,
    checkUserRole:checkUserRole,
    compareHash: compareHash
}