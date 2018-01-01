import { getUserLocation } from '../actions/getUserLocation.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserLocation:
    const newState = {...state,
      GPS: action.payload,
      }
    default:
      return state
  }
}