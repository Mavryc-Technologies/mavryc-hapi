import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Test = () => (
  <MuiThemeProvider>
    <AppBar
      title="Welcome to Mavryc"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
);


export default Test;
