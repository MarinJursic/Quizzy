import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  loggedIn: false,
  user: null,
};

// cues so action.payload ka donosi

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false,
      };

    default:
      return state;
  }
}
