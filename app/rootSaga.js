import { fork, all } from "redux-saga/effects";

import { addressSaga } from "./address/addressSaga";

export function* rootSaga() {
  yield all([fork(addressSaga)]);
}
