import React from 'react';
import {
  Link
} from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>HomePage</h1>
    <li><Link to="/about">About</Link></li>
  </div>
);


export default HomePage;
