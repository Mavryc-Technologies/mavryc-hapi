import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/homepage-container';
import About from './components/about';


function mainApp() {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
      </div>
    </Router>,
    document.getElementById('test'),
  );
}

document.addEventListener('DOMContentLoaded', mainApp);
