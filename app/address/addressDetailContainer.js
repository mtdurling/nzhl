// @flow
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { NavigationActions } from "react-navigation";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  },
  address: { name: string }
};

export const AddressDetailContainer = (props: Props) => (
  <View style={[s.flx_i, s.bg_blue, s.aic, s.jcc]}>
    <Text>{props.address.name}</Text>
    <TouchableOpacity
      style={[s.pa3, s.ba]}
      onPress={() => {
        props.navigation.dispatch(
          NavigationActions.navigate({
            routeName: "actions",
            params: {
              address: props.address
            }
          })
        );
      }}
    >
      <Text>Actions</Text>
    </TouchableOpacity>
  </View>
);
