import React from 'react';
import {
  Link
} from 'react-router-dom';
// Stylesheets
require('../styles/base.sass');

const HomePage = () => (
  <div>
    <h1>Dashboard</h1>
    <li><Link to="/user-signup">User Signup</Link></li>
  </div>
);


export default HomePage;
