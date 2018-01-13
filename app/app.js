// @flow
import React from "react";
import { connect, Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import NativeTachyons from "react-native-style-tachyons";
import { StyleSheet } from "react-native";
import { addNavigationHelpers } from "react-navigation";

import { RootReducer } from "./rootReducer";
import { AppNavigator } from "./appNavigator";

NativeTachyons.build(
  {
    /* REM parameter is optional, default is 16 */
    rem: 16
  },
  StyleSheet
);

type NavProps = {
  dispatch: (action: any) => mixed,
  nav: {}
};

const Navigator = (props: NavProps) => {
  const { dispatch, nav } = props;
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
    />
  );
};

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(Navigator);

const store = createStore(RootReducer, applyMiddleware(logger));

export const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
