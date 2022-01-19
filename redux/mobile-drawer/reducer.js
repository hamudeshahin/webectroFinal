import * as constants from "./constants";

const INITIAL_STATE = {
  O: false,
};

export const drawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.OPEN_DRAWER:
      return {
        ...state,
        O: action.payload,
      };
    case constants.CLOSE_DRAWER:
      return {
        ...state,
        O: action.payload,
      };
    default:
      return state;
  }
};
