import { getUserDrivingTimeToSecondaryStation } from '../actions/getUserDrivingTimeToSecondaryStation.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTimeToSecondaryStation:
      const newState = {
        ...state,
        DrivingTimeToSecondaryStation: action.payload,
      }
      return newState
    default:
      return state
  }
}