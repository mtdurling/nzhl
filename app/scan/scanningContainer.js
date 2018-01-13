import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { styles as s, sizes } from "react-native-style-tachyons";

export const ScanningContainer = () => (
  <View style={[s.flx_i, s.pa3, s.mt3]}>
    <Text>Scanning Page</Text>
  </View>
);

ScanningContainer.navigationOptions = ({ navigation }) => ({
  title: "Address Lookup"
});
