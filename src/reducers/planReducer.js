import { ACTIVATE_PLAN, CHANGE_PRICING } from "../actions/types";

const initialState = {
  plan: null,
  pricing: "monthly",
};

export default function planReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_PLAN:
      return {
        ...state,
        plan: action.payload,
      };

    case CHANGE_PRICING:
      return {
        ...state,
        pricing: action.payload,
      };

    default:
      return state;
  }
}
