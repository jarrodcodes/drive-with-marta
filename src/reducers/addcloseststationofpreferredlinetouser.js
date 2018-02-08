import { getClosestStationOfPreferredLineToUser } from '../actions/getClosestStationOfPreferredLineToUser';

export default function (state = [], action) {
  switch (action.type) {
    case getClosestStationOfPreferredLineToUser:
      const newState = {
        ...state,
        ClosestStationOfPreferredLineToUser: action.payload,
      }
      return newState
    default:
      return state
  }
}