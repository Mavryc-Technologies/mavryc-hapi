// Welcome to SKYLAR
// This is our redux store here. Come shop and find the things you need!
import { createStore } from 'redux';

const authenticationReducer = require('./reducers/authentication-reducers').default;

const store = createStore(authenticationReducer);


export default store;
