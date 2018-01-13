import React from "react";
import { StackNavigator } from "react-navigation";

import { HomeContainer } from "./home/homeContainer";
import { ScanningContainer } from "./scan/scanningContainer";

export const AppNavigator = StackNavigator(
  {
    home: {
      screen: HomeContainer,
      navigationOptions: { header: null }
    },
    scan: {
      screen: ScanningContainer
    }
  },
  {
    cardStyle: { backgroundColor: "#fff" }
  }
);
