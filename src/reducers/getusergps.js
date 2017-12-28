import { addUserLocation } from '../actions/addUserLocation.js';

export default function(state = [], action) {
  switch (action.type) {
    case addUserLocation:
      return [action.payload];
  }
  return state;
}