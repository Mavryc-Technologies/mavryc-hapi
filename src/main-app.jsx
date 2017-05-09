import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/homepage-container';

function mainApp() {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('test'),
  );
}

document.addEventListener('DOMContentLoaded', mainApp);
