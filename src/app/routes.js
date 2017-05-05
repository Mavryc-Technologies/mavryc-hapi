// app/routes.js

// load up the flight methods
var FlightMethods = require('../app/app-modules/flights/flight-methods.js');
//Load up User methods
var UserMethods = require('../app/app-modules/user/user-methods.js')


module.exports = function(app, passport) {

    // =====================================
    // THE BEAUTIFUL HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });


    // ==================================================================================================================================
    // USER FUNCTIONS =============================================================================================
    // ==================================================================================================================================


    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // View Favorite Flights =====================
    // =====================================    
    app.get('/favorite-flights', function(req, res) {
        res.render('favorite-flights.ejs');
    });
    //Get view to add favorite flights
    app.get('/show-add-favorite-flight', function(req, res) {
        res.render('add-favorite-flight.ejs');
    });
    //Retrieve Favorite Flights
    app.post('/get-favorite-flights', function(req, res) {
       UserMethods.getFlightFavorites(req)
    });

    //Add Favorite flight
    app.post('/add-favorite-flights', function(req, res) {
       UserMethods.addFlightFavorites(req)
       console.log("They were added!")
    });


    // ==================================================================================================================================
    // FLIGHT FUNCTIONS =============================================================================================
    // ==================================================================================================================================

    //Return All Flights
    app.get('/flights', function(req, res) {
        // return flights
        FlightMethods.viewAllFlights()
        res.render('flights.ejs'); 
    });
    //Search flights Page
    app.get('/search-flights', function(req, res) {
        // render the page
        res.render('search-flights.ejs'); 
    });
    //Filter Flight search
    app.post('/filter-flights', function(req, res) {
       FlightMethods.searchFlights(req);
       res.render('flights.ejs'); 
    });

    // show the create flight form
    app.get('/create-flight', function(req, res) {
        // render the page
        res.render('create-flight.ejs'); 
    });

    // process the Create Flight form
    app.post('/process-create-flight', function(req, res) {
       FlightMethods.createFlight(req)
       res.redirect('/create-flight');
    });

};




















// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
