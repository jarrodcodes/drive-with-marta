export const addUserLocation = 'addUserLocation';

const resolved = [];

var getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve);
  });
}
export function fetchGPS() {
  getPosition().then(function(resolve){
    resolved.push(resolve)
  })
  return {
    type: addUserLocation,
    payload: resolved
  }
}