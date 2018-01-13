import { getClosestStationToUser } from '../actions/getClosestStationToUser.js';

export default function (state = [], action) {
  switch (action.type) {
    case getClosestStationToUser:
      const newState = {
        ...state,
        ClosestStationToUser: action.payload,
      }
      return newState
    default:
      return state
  }
}