import React from 'react';
import store from './store';
import handleLoginInfo from './actions/authentication-actions';

const sampleInfo = {
  email: 'Jake@aol.com',
  password: 'abc123'
};
const handleLogin = () => {
  store.dispatch(handleLoginInfo(sampleInfo));
  console.log(store.getState());
};

const containerStyle = {
  height: '100vh',
  width: '100vw',
  margin: 'none',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const HomePage = () => (
  <div style={containerStyle}>
    <div>
      <p>SKYLAR</p>
      <input
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        placeholder="Password"
      />
      <br />
      <button onClick={handleLogin} label="LOGIN" />
    </div>
  </div>
);


export default HomePage;
