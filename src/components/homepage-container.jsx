import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
  <MuiThemeProvider>
    <div style={containerStyle}>
      <div>
        <p>SKYLAR</p>
        <TextField
          hintText="Email"
        />
        <br />
        <TextField
          hintText="Password"
        />
        <br />
        <RaisedButton onClick={handleLogin} label="LOGIN" />
      </div>
    </div>
  </MuiThemeProvider>
);


export default HomePage;
