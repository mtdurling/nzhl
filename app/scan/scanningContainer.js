// @flow
import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

import { styles as s } from "react-native-style-tachyons";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  }
};

type State = {
  location: { latitude: string, longitude: string }
};

export class ScanningContainer extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      location: undefined
    };
  }
  componentDidMount() {
    /* eslint-disable */
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords);
    });
    /* eslint-enable */
  }

  render() {
    return (
      <View style={[s.flx_i, s.pa3, s.mt3]}>
        {this.state.location && (
          <View>
            <Text>{this.state.location.latitude}</Text>
            <Text>{this.state.location.longitude}</Text>
          </View>
        )}
        <FlatList
          data={[{ id: 1, name: "Address 1" }, { id: 2, name: "Address 2" }]}
          extraData={this.state}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.dispatch(
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
  }
}

ScanningContainer.navigationOptions = ({ navigation }) => ({
  title: "Address Lookup",
  headerRight: (
    <TouchableOpacity
      style={[s.mr2]}
      onPress={() => {
        navigation.dispatch(
          NavigationActions.navigate({
            routeName: "addressLookup"
          })
        );
      }}
    >
      <Text>Manual</Text>
    </TouchableOpacity>
  )
});
