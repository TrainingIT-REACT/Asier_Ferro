export const LOGIN_USER = "LOGIN_USER";
export const loginUser = username => ({
  type: LOGIN_USER,
  payload: username
});

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser = () => ({
  type: LOGOUT_USER
});
