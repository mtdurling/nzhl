import { combineReducers } from "redux";
import { AppNavigator } from "./appNavigator";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("home")
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export const RootReducer = combineReducers({
  nav: navReducer
});
