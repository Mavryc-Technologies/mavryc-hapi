import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/material-test';

function mainApp() {
  ReactDOM.render(
    <Test />,
    document.getElementById('test'),
  );
}

document.addEventListener('DOMContentLoaded', mainApp);
