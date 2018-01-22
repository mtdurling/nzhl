// @flow
import { fork, all, takeLatest, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import firebase from "react-native-firebase";
import { NavigationActions } from "react-navigation";

import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from "./authActions";

const doLogin = action => {
  firebase.auth().signInWithEmailAndPassword(action.email, action.password);
};

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, doLogin);
}

export function* firebaseCallback(result) {
  if (result.user) {
    yield put({ type: LOGIN_SUCCESS, currentUser: result.user });
    yield put(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "scan" })]
      })
    );
  } else {
    yield put(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: "login" })]
      })
    );
  }
}

export default function* initialAuth() {
  const authChannel = eventChannel(emit => {
    const result = firebase
      .auth()
      .onAuthStateChanged(user => emit({ user }), error => emit({ error }));
    return result;
  });
  yield takeLatest(authChannel, firebaseCallback);
}

export function* authSaga() {
  yield all([fork(watchLoginRequest), fork(initialAuth)]);
}
