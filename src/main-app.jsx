import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/homepage-container';
import UserSignup from './components/users/user-signup';


function mainApp() {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/user-signup" component={UserSignup} />
      </div>
    </Router>,
    document.getElementById('test'),
  );
}

document.addEventListener('DOMContentLoaded', mainApp);
