import { getUserDrivingTimeToDestination } from '../actions/getUserDrivingTimeToDestination.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTimeToDestination:
      const newState = {
        ...state,
        DriveTimeToDestination: action.payload,
      }
      return newState
    default:
      return state
  }
}