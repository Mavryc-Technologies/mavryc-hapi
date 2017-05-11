const getWebpackAssets = require('../tools/get-webpack-assets');
const React = require('react');

const SimpleLogin = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Main App</title>
      <link rel="stylesheet" type="text/css" href="../main-app.css"/>
    </head>
    <body>
        <h1>Mavryc Simple Login</h1>
        <form action="/user-login" method="post">
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" name="email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" />
            </div>
            <button type="submit" class="btn btn-warning btn-lg">Login</button>
        </form>
       <script src={getWebpackAssets().app.js} />
    </body>
  </html>
);

module.exports = SimpleLogin;
