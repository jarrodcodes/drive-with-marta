export const getUserLocation = 'getUserLocation';

let resolved = [];

const getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve);
  });
}
export function fetchGPS() {
  getPosition().then((resolve => {
    console.log(resolve)
    resolved.push(resolve.coords.latitude)
    resolved.push(resolve.coords.longitude)
  }))
  return {
    type: getUserLocation,
    payload: resolved
  }
}