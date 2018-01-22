import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

import { styles as s } from "react-native-style-tachyons";

export const AppLoading = () => (
  <View style={[s.flx_i, s.aic, s.jcc]}>
    <Progress.Circle size={60} indeterminate />
  </View>
);
