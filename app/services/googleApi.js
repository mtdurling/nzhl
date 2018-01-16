const apiKey = "AIzaSyD_oIFVyaGPUfe5C0gpUkRUOdOep-VXbXo";

export const GoogleApi = {
  search: (address, latLong) => {
    const url =
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}` +
      `&key=${apiKey}` +
      "&components=country:NZ" +
      `&location=${latLong.latitude},${latLong.longitude}` +
      "&type=geocode";
    return fetch(url).then(result => result.json());
  },
  reverseGeocode: latLong => {
    const url =
      "https://maps.googleapis.com/maps/api/geocode/json" +
      `?key=${apiKey}` +
      `&result_type=street_address` +
      `&latlng=${latLong.latitude},${latLong.longitude}`;
    return fetch(url).then(result => result.json());
  }
};
