import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { NavigationActions } from "react-navigation";

import { styles as s, sizes } from "react-native-style-tachyons";

export const HomeContainer = props => (
  <View style={[s.flx_i, s.pa3, s.mt3]}>
    <Image
      source={require("../images/nzhl-logo.png")}
      resizeMode="contain"
      style={{ width: "100%" }}
    />
    <View style={[s.flx_i, s.jcc, s.aic]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.dispatch(
            NavigationActions.navigate({
              routeName: "scan"
            })
          );
        }}
        style={[
          s.w4,
          s.h4,
          s.pa3,
          s.ba,
          s.aic,
          s.jcc,
          { borderRadius: sizes.w4 / 2, backgroundColor: "blue" }
        ]}
      >
        <Text style={[s.f4, { color: "white" }]}>Go</Text>
      </TouchableOpacity>
    </View>
  </View>
);
