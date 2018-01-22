import React from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import { TouchableOpacity, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import firebase from "react-native-firebase";

import LoginContainer from "./login/loginContainer";
import { ScanningContainer } from "./scan/scanningContainer";
import { AddressDetailContainer } from "./address/addressDetailContainer";
import { ActionsContainer } from "./actions/actionsContainer";
import { NotesContainer } from "./actions/notesContainer";
import { AddressLookup } from "./address/addressLookup";
import { AppLoading } from "./appLoading";

export const AppNavigator = StackNavigator(
  {
    appLoading: {
      screen: withMappedNavigationProps(AppLoading),
      navigationOptions: {
        headerRight: null
      }
    },
    login: {
      screen: withMappedNavigationProps(LoginContainer),
      navigationOptions: {
        headerRight: null
      }
    },
    scan: {
      screen: withMappedNavigationProps(ScanningContainer)
    },
    addressDetail: {
      screen: withMappedNavigationProps(AddressDetailContainer)
    },
    actions: {
      screen: withMappedNavigationProps(ActionsContainer)
    },
    notes: {
      screen: withMappedNavigationProps(NotesContainer)
    },
    addressLookup: {
      screen: withMappedNavigationProps(AddressLookup)
    }
  },
  {
    cardStyle: { backgroundColor: "#fff" },
    navigationOptions: () => ({
      headerStyle: { backgroundColor: "white", borderBottomWidth: 0 },
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={[s.mr3]}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      )
    })
  }
);
