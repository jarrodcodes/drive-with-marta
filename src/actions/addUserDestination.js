export const addUserDestination = 'addUserDestination';

let places = [];

export function addDestination(place) {
    places.push(place)
  return {
    type: addUserDestination,
    payload: places
  }
}