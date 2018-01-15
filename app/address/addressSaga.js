// @flow
import { fork, all, takeLatest, put } from "redux-saga/effects";
import _ from "lodash";

import { GoogleApi } from "../services/googleApi";
import {
  CLOSEST_ADDRESS_FETCH,
  CLOSEST_ADDRESS_SUCCESS,
  CLOSEST_ADDRESS_FAILURE
} from "./addressActions";

export function* doAddressLookup(action) {
  try {
    const geocodeResults = yield GoogleApi.reverseGeocode(action.latLong);
    if (geocodeResults.results && !_.isEmpty(geocodeResults.results)) {
      const currentAddress = _.first(geocodeResults.results);
      const street = _.find(currentAddress.address_components, component =>
        _.includes(component.types, "route")
      );
      const city = _.find(currentAddress.address_components, component =>
        _.includes(component.types, "locality")
      );

      const autoSuggestResults = yield GoogleApi.search(
        `${street.long_name}, ${city.long_name}`,
        action.latLong
      );
      yield put({
        type: CLOSEST_ADDRESS_SUCCESS,
        closestAddresses: autoSuggestResults.predictions
      });
    }
  } catch (error) {
    yield put({
      type: CLOSEST_ADDRESS_FAILURE,
      error
    });
  }
}

export function* watchAddressSearch() {
  yield takeLatest(CLOSEST_ADDRESS_FETCH, doAddressLookup);
}

export function* addressSaga() {
  yield all([fork(watchAddressSearch)]);
}
