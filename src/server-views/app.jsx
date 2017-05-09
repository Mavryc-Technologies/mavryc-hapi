const getWebpackAssets = require('../tools/get-webpack-assets');
const React = require('react');

const App = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Main App</title>
      <link rel="stylesheet" type="text/css" href="../main-app.css"/>
    </head>
    <body>
      <div id="test">This text will be replaced by our component</div>
       <script src={getWebpackAssets().app.js} />
    </body>
  </html>
);

module.exports = App;
