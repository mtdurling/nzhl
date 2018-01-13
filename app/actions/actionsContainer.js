// @flow
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles as s } from "react-native-style-tachyons";

import { NavigationActions } from "react-navigation";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  },
  address: {}
};

export class ActionsContainer extends Component<Props> {
  actionButton = action => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.dispatch(
          NavigationActions.navigate({
            routeName: "notes",
            params: {
              address: this.props.address,
              action
            }
          })
        );
      }}
    >
      <Text style={[s.f3]}>{action}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={[s.flx_i, s.pa3, s.mt3, s.aic, s.jcsb]}>
        {this.actionButton("NO ACCESS/GATE")}
        {this.actionButton("NOT HOME")}
        {this.actionButton("NOT INTERESTED")}
        {this.actionButton("TOOK KEY")}
      </View>
    );
  }
}
