import { ACTIVATE_PLAN } from "../actions/types";

const initialState = {
  plan: null,
};

export default function planReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_PLAN:
      return {
        ...state,
        plan: action.payload,
      };

    default:
      return state;
  }
}
