// @flow
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { styles as s, sizes } from "react-native-style-tachyons";
import * as Progress from "react-native-progress";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import _ from "lodash";
import { fetchClosestAddresses } from "../address/addressActions";
import { GoogleApi } from "../services/googleApi";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = -36.899442;
const LONGITUDE = 174.934906;
const LATITUDE_DELTA = 0.0009;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  }
};

type State = {
  closestAddress: {}
};

export class ScanningContainer extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      closestAddress: undefined,
      isFetching: false
    };
  }
  componentDidMount() {
    /* eslint-disable */
    navigator.geolocation.requestAuthorization();
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const response = await GoogleApi.reverseGeocode(coords);
      const closestAddress = _.first(response.results);
      this.setState({ closestAddress });
    });
    /* eslint-enable */
  }

  closestAddressCoordinates = () => {
    const { geometry } = this.state.closestAddress;
    return {
      latitude: geometry.location.lat,
      longitude: geometry.location.lng
    };
  };

  updateClosestAddress = async newCoords => {
    this.setState({ isFetching: true });
    const response = await GoogleApi.reverseGeocode(newCoords);
    const closestAddress = _.first(response.results);
    this.setState({ closestAddress, isFetching: false });
  };

  actionButton = () => (
    <View style={[s.absolute, s.aic, s.jcc, { width, left: 0, bottom: 40 }]}>
      <TouchableOpacity
        style={[s.pv3, s.ph4, s.bg_linkeyBlue]}
        onPress={() => {
          this.props.navigation.dispatch(
            NavigationActions.navigate({
              routeName: "addressDetail",
              params: {
                address: this.state.closestAddress
              }
            })
          );
        }}
      >
        <Text style={[s.white, s.b, s.f5]}> Access Details </Text>
      </TouchableOpacity>
    </View>
  );

  closestAddressBanner = () => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        this.props.navigation.dispatch(
          NavigationActions.navigate({
            routeName: "addressLookup"
          })
        );
      }}
      style={[
        s.pa3,
        s.ba,
        s.bg_white,
        s.absolute,
        s.aic,
        s.jcc,
        { width: width - sizes.pa3 * 2, top: 50, left: sizes.pa3 }
      ]}
    >
      {this.state.isFetching ? (
        <Progress.Circle size={18} indeterminate />
      ) : (
        <Text>{this.state.closestAddress.formatted_address}</Text>
      )}
    </TouchableOpacity>
  );

  render() {
    const { closestAddress } = this.state;
    return (
      <View style={[s.flx_i]}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ height, width }}
          region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          {closestAddress && (
            <MapView.Marker
              ref={e => (this.marker = e)}
              coordinate={this.closestAddressCoordinates()}
              onDragEnd={({ nativeEvent }) => {
                this.updateClosestAddress(nativeEvent.coordinate);
              }}
              draggable
            />
          )}
        </MapView>
        {closestAddress && this.closestAddressBanner()}
        {closestAddress && this.actionButton()}
      </View>
    );
  }
}

ScanningContainer.navigationOptions = () => ({
  title: "Address Lookup"
});
