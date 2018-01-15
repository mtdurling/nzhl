// @flow
export const CLOSEST_ADDRESS_FETCH = "CLOSEST_ADDRESS_FETCH";
export const CLOSEST_ADDRESS_SUCCESS = "CLOSEST_ADDRESS_SUCCESS";
export const CLOSEST_ADDRESS_FAILURE = "CLOSEST_ADDRESS_FAILURE";

export const fetchClosestAddresses = latLong => ({
  type: CLOSEST_ADDRESS_FETCH,
  latLong
});
