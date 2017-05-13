import * as types from '../actions/action-types';

// export function getUsersSuccess(users) {
//   return {
//     type: types.GET_USERS_SUCCESS,
//     users
//   };
// }

// export function deleteUserSuccess(userId) {
//   return {
//     type: types.DELETE_USER_SUCCESS,
//     userId
//   };
// }

function handleLoginInfo(loginInfo) {
  return {
    type: types.SAVE_LOGIN_INPUT,
    loginInfo
  };
}

function handleSignInfo(signupInfo) {
  return {
    type: types.SAVE_SIGNUP_INPUT,
    signupInfo
  }
}

module.exports = {
  loginInfo:loginInfo,
  handleSignInfo:handleSignInfo
}
