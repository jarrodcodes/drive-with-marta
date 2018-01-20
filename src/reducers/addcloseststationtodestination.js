import { getClosestStationToDestination } from '../actions/getClosestStationToDestination.js';

export default function (state = [], action) {
  switch (action.type) {
    case getClosestStationToDestination:
      const newState = {
        ...state,
        ClosestStationToDestination: action.payload,
      }
      return newState
    default:
      return state
  }
}