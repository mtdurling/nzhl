import { fork, all } from "redux-saga/effects";

import { addressSaga } from "./address/addressSaga";
import { authSaga } from "./auth/authSaga";

export function* rootSaga() {
  yield all([fork(addressSaga), fork(authSaga)]);
}
