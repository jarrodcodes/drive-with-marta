import { getUserLocation } from '../actions/getUserLocation.js';

export default function(state = [], action) {
  switch (action.type) {
    case getUserLocation:
      return [action.payload]
      return [action.loadedGPS];
  }
  return state;
}