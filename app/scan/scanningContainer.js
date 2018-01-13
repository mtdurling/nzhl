import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

import { styles as s } from "react-native-style-tachyons";

export const ScanningContainer = props => (
  <View style={[s.flx_i, s.pa3, s.mt3]}>
    <FlatList
      data={[{ id: 1, name: "Address 1" }, { id: 2, name: "Address 2" }]}
      extraData={this.state}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.dispatch(
              NavigationActions.navigate({
                routeName: "addressDetail",
                params: {
                  address: item
                }
              })
            );
          }}
          style={[s.ba, s.pa3]}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

ScanningContainer.navigationOptions = () => ({
  title: "Address Lookup"
});
