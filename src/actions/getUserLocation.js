export const getUserLocation = 'getUserLocation';

const resolved = [];

const getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve);
  });
}
export function fetchGPS() {
  getPosition().then(function(resolve){
    resolved.push(resolve)
  })
  return {
    type: getUserLocation,
    payload: resolved
  }
}