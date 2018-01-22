// @flow
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED
} from "./authActions";

const INITIAL_STATE = {
  loginEmail: "mike@gherkinmedia.co.nz",
  loginPassword: "passw0rd"
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        currentUser: action.currentUser,
        error: undefined
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case LOGIN_EMAIL_CHANGED:
      return Object.assign({}, state, {
        loginEmail: action.email
      });
    case LOGIN_PASSWORD_CHANGED:
      return Object.assign({}, state, {
        loginPassword: action.password
      });
    default:
      return state;
  }
};
