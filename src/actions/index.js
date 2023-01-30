export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DSPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MR = "MR";
export const MC = "MC";

export const MPLUS = "MPLUS";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
