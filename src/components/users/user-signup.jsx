import React from 'react';
// Import axios
import axios from 'axios';
// Import redux
// import handleSignupInfo from './redux/actions/authentication-actions';
// Stylesheets
require('../../styles/base.sass');

// Function to submit object to redux
function handleInput() {
  console.log('Called');
  // const sampleUserData = {
  //   firstname: 'Kahlua',
  //   lastname: 'Dog',
  //   email: 'k-dog@aol.com',
  //   phonenumber: '4804591338'
  // };
  // Make a request for a user with a given ID
  axios.get('/users')
    .then(() => function responce(response) {
      console.log(response);
    })
    .catch(() => function (error) {
      console.log(error);
    });
}

const UserSignup = () => (
  <div>
    <h1>Passenger Signup</h1>
    <button onClick={handleInput()}>Signup</button>
  </div>
);


export default UserSignup;
