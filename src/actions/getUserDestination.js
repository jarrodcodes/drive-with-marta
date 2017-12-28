export const getUserDestination = 'getUserDestination';

const places = [];

export function addDestination(place) {
    places.push(place)
  return {
    type: getUserDestination,
    payload: places
  }
}