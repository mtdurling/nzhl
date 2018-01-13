import { StackNavigator } from "react-navigation";
import { withMappedNavigationProps } from "react-navigation-props-mapper";

import { HomeContainer } from "./home/homeContainer";
import { ScanningContainer } from "./scan/scanningContainer";
import { AddressDetailContainer } from "./address/addressDetailContainer";
import { ActionsContainer } from "./actions/actionsContainer";
import { NotesContainer } from "./actions/notesContainer";
import { AddressLookup } from "./address/addressLookup";

export const AppNavigator = StackNavigator(
  {
    home: {
      screen: withMappedNavigationProps(HomeContainer),
      navigationOptions: { header: null }
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
    cardStyle: { backgroundColor: "#fff" }
  }
);
