import React from "react";
import { View, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";

export const AddressDetailContainer = props => (
  <View style={[s.flx_i, s.bg_blue, s.aic, s.jcc]}>
    <Text>{props.address.name}</Text>
  </View>
);
