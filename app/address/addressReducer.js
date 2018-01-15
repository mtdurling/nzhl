// @flow
import {
  CLOSEST_ADDRESS_FETCH,
  CLOSEST_ADDRESS_SUCCESS,
  CLOSEST_ADDRESS_ERROR
} from "./addressActions";

export const address = (state = {}, action) => {
  switch (action.type) {
    case CLOSEST_ADDRESS_FETCH:
      return Object.assign({}, state, {
        isFetching: true
      });
    case CLOSEST_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        closestAddresses: action.closestAddresses
      });
    case CLOSEST_ADDRESS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: "Couldn't fetch right now"
      });
    default:
      return state;
  }
};
