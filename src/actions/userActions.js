import { LOGIN, LOGOUT } from "./types";

export const login = (user) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: user,
  });
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
