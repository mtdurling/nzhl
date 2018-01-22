// @flow
import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";

import { NavigationActions } from "react-navigation";
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";

import { styles as s, sizes } from "react-native-style-tachyons";
import {
  login,
  loginEmailChanged,
  loginPasswordChanged
} from "../auth/authActions";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  }
};

const LoginContainer = (props: Props) => (
  <View style={[s.flx_i, s.pa3, s.mt3]}>
    <View style={[s.ass, s.aic, s.mb3]}>
      <Image
        source={require("../images/nzhl-logo.png")}
        resizeMode="contain"
        style={{ width: "80%" }}
      />
    </View>

    <FormLabel>Email</FormLabel>
    <FormInput
      onChange={({ nativeEvent }) => {
        props.loginEmailChanged(nativeEvent.text);
      }}
      value={props.loginEmail}
      autoCapitalize="none"
    />
    <FormLabel>Password</FormLabel>
    <FormInput
      onChange={({ nativeEvent }) => {
        props.loginPasswordChanged(nativeEvent.text);
      }}
      value={props.loginPassword}
      secureTextEntry
    />
    {props.error && (
      <FormValidationMessage>{props.error.message}</FormValidationMessage>
    )}

    <View style={[s.flx_i, s.jcc, s.aic]}>
      {props.isFetching ? (
        <Progress.Circle size={50} indeterminate />
      ) : (
        <Button
          buttonStyle={[s.bg_darkBlue, s.ph5]}
          large
          onPress={() => {
            props.login(props.loginEmail, props.loginPassword);
          }}
          title="Login"
        />
      )}
    </View>
  </View>
);

const mapStateToProps = state => {
  const { isFetching, error, loginEmail, loginPassword } = state.auth;

  return {
    isFetching,
    error,
    loginEmail,
    loginPassword
  };
};

export default connect(mapStateToProps, {
  login,
  loginEmailChanged,
  loginPasswordChanged
})(LoginContainer);
