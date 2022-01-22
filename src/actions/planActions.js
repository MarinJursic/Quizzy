import { ACTIVATE_PLAN, CHANGE_PRICING } from "./types";

export const activatePlan = (plan) => {
  return {
    type: ACTIVATE_PLAN,
    payload: plan,
  };
};

export const changePricing = (pricing) => {
  return {
    type: CHANGE_PRICING,
    payload: pricing,
  };
};
