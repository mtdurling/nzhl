export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGIN_EMAIL_CHANGED = "LOGIN_EMAIL_CHANGED";
export const LOGIN_PASSWORD_CHANGED = "LOGIN_PASSWORD_CHANGED";

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  password,
  email
});

export const loginEmailChanged = email => ({
  type: LOGIN_EMAIL_CHANGED,
  email
});

export const loginPasswordChanged = password => ({
  type: LOGIN_PASSWORD_CHANGED,
  password
});
