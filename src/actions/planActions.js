import { ACTIVATE_PLAN } from "./types";

export const activatePlan = (plan) => {
  return {
    type: ACTIVATE_PLAN,
    payload: plan,
  };
};
