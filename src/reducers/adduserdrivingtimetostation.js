import { getUserDrivingTimeToNearestStation } from '../actions/getUserDrivingTimeToStation.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTimeToNearestStation:
      const newState = {
        ...state,
        DrivingTimeToNearestStation: action.payload,
      }
      return newState
    default:
      return state
  }
}