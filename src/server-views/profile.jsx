const getWebpackAssets = require('../tools/get-webpack-assets');
const React = require('react');

const SimpleSignup = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Profile</title>
      <link rel="stylesheet" type="text/css" href="../main-app.css"/>
    </head>
    <body>
        <h1>Hey what's up I am a protected profile page. I can only be seen if you are logged in and you have a type of passenger.</h1>
        <h4>Pass me a user token and see your profile results</h4>
       <script src={getWebpackAssets().app.js} />
    </body>
  </html>
);

module.exports = SimpleSignup;
