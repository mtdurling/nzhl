// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import { connect, Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";

import NativeTachyons from "react-native-style-tachyons";
import { StyleSheet } from "react-native";

NativeTachyons.build(
  {
    /* REM parameter is optional, default is 16 */
    rem: 16
  },
  StyleSheet
);

import { addNavigationHelpers } from "react-navigation";

import { RootReducer } from "./rootReducer";
import { AppNavigator } from "./appNavigator";

const Navigator = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(Navigator);

const store = createStore(RootReducer, applyMiddleware(logger));

export class App extends Component<> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
