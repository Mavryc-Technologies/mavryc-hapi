// app/routes.js

// load up the flight methods
var FlightMethods = require('./app-modules/flights/flight-methods.js');
//Load up User methods
var UserMethods = require('./app-modules/user/user-methods.js')



module.exports = function(server) {
// App
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: 'app' // app.jsx in /views
    }
  });
}
