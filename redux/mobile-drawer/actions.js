import * as constants from "./constants";

export const openDrawer = () => (dispatch) => {
  dispatch({ type: constants.OPEN_DRAWER, payload: true });
};

export const closeDrawer = () => (dispatch) => {
  dispatch({ type: constants.CLOSE_DRAWER, payload: false });
};
