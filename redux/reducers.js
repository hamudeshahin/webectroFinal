import { combineReducers } from "redux";

// import all reducers
import { drawerReducer } from "./mobile-drawer/reducer";

// COMBINED REDUCERS
const reducers = {
  drawer: drawerReducer,
};

export default combineReducers(reducers);
