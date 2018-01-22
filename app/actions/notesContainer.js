// @flow
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles as s, sizes } from "react-native-style-tachyons";
import { NavigationActions } from "react-navigation";

type Props = {
  navigation: {
    dispatch: (action: any) => mixed
  }
};

export const NotesContainer = (props: Props) => (
  <View style={[s.flx_i, s.pa3, s.mt3, s.aic, s.jcsb]}>
    <Text style={[s.f3]}>NOTES</Text>
    <TextInput style={[s.bg_red, s.ba, s.w4, s.h4]} />
    <TouchableOpacity
      onPress={() => {
        props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: "login" })]
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
);
