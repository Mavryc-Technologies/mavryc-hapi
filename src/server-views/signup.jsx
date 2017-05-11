const getWebpackAssets = require('../tools/get-webpack-assets');
const React = require('react');

const SimpleSignup = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Main App</title>
      <link rel="stylesheet" type="text/css" href="../main-app.css"/>
    </head>
    <body>
        <h1>Mavryc Simple Signup</h1>
        <form action="/user-signup" method="post">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" name="firstname" />
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" name="lastname" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" name="email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" />
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="number" class="form-control" name="phone" />
            </div>
            <div class="form-group">
                <label>Birthday</label>
                <input type="date" class="form-control" name="birthday" />
            </div>
            <button type="submit" class="btn btn-warning btn-lg">Signup</button>
        </form>
       <script src={getWebpackAssets().app.js} />
    </body>
  </html>
);

module.exports = SimpleSignup;
