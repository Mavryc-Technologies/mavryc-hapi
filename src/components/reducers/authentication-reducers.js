import * as types from '../actions/action-types';

const initialState = {
  loginInfo: {
    email: '',
    password: ''
  },
  signup: {
    email: '',
    password: ''
  }
};


const authenticationReducer = function (state = initialState, action) {
  switch (action.type) {

    case types.SAVE_LOGIN_INPUT:
      return Object.assign({}, state, { loginInfo: action.loginInfo });
    default:
      return Object.assign({}, state, { loginInfo: action.loginInfo });

    // case types.DELETE_USER_SUCCESS:

    //   // Use lodash to create a new user array without the user we want to remove
    //   const newUsers = _.filter(state.users, user => user.id != action.userId);
    //   return Object.assign({}, state, { users: newUsers });

    // case types.USER_PROFILE_SUCCESS:
    //   return Object.assign({}, state, { userProfile: action.userProfile });

  }
};

export default authenticationReducer;
