import { combineReducers } from "redux";
import { AppNavigator } from "./appNavigator";

import { address } from "./address/addressReducer";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("home")
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export const RootReducer = combineReducers({
  address,
  nav: navReducer
});
