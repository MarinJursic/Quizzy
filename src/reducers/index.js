import { combineReducers } from "redux";
import planReducer from "./planReducer";
import userReducer from "./userReducer";

export default combineReducers({
  plan: planReducer,
  user: userReducer,
});
