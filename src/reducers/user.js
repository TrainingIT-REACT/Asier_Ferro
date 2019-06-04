import { LOGIN_USER, LOGOUT_USER } from "../actions/user";

const initialState = {
  username: "",
  signedIn: false
};

// Implementamos el reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        name: payload,
        signedIn: true
      };
    case LOGOUT_USER:
      return {
        username: "",
        signedIn: false
      };
    default:
      return state;
  }
};

export const getUserName = state => state.user.name;
export const getIsSignedIn = state => state.user.signedIn;

export default reducer;
