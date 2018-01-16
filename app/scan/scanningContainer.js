// @flow
import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { styles as s } from "react-native-style-tachyons";
import * as Progress from "react-native-progress";

import { fetchClosestAddresses } from "../address/addressActions";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  },
  closestAddresses: [{}],
  isFetching: boolean
};

type State = {
  location: { latitude: string, longitude: string }
};

class ScanningContainerPlaceholder extends Component<Props, State> {
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
      this.props.fetchClosestAddresses(coords);
    });
    /* eslint-enable */
  }

  render() {
    if (this.props.isFetching) {
      return (
        <View style={[s.flx_i, s.aic, s.jcc]}>
          <Progress.Circle size={100} indeterminate />
        </View>
      );
    }
    return (
      <View style={[s.flx_i, s.pa3, s.mt3]}>
        {this.state.location && (
          <View>
            <Text>{this.state.location.latitude}</Text>
            <Text>{this.state.location.longitude}</Text>
          </View>
        )}
        <FlatList
          data={this.props.closestAddresses}
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
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

ScanningContainerPlaceholder.navigationOptions = ({ navigation }) => ({
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

const mapStateToProps = state => {
  const { closestAddresses, isFetching } = state.address;
  return {
    closestAddresses,
    isFetching
  };
};

export const ScanningContainer = connect(mapStateToProps, {
  fetchClosestAddresses
})(ScanningContainerPlaceholder);
