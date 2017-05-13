// app/routes.js

// load up the flight methods
var FlightMethods = require('./app/app-modules/flights/flight-methods.js');
//Load up User methods
var UserMethods = require('./app/app-modules/user/user-methods.js')
//Load up asll User Auth methods
var UserAuth = require('./app/app-modules/user/user-authentication.js')



module.exports = function(server) {

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  ///////////API ROUTES -- User
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  
  //GET ROUTES
  
  //Get all Users
  server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        var allUsers = UserMethods.getAllUsers()
        reply(allUsers)
    }
  });

  // Signup User
server.route({
    method: 'POST',
    path: '/user-signup',
    handler: function (request, reply) {
      UserAuth.registerNewUser(request);
      reply.view('app');
    }
  });

  // Login 
server.route({
    method: 'POST',
    path: '/user-login',
    handler: function (request, reply) {
      UserAuth.loginUser(request);
      // reply.view('app');
    }
  });

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  ///////////API ROUTES -- Flights
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  
  //GET ROUTES
  
  //Get all flights
  server.route({
    method: 'GET',
    path: '/flights',
    handler: function (request, reply) {
        var allFlights = FlightMethods.viewAllFlights()
        reply(allFlights)
    }
  });

}
