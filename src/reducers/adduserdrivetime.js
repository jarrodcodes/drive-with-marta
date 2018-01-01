import { getUserDrivingTime } from '../actions/getUserDrivingTime.js';

export default function (state = [], action) {
  switch (action.type) {
    case getUserDrivingTime:
    const newState = {...state,
    DriveTime: action.payload,
    }
      return newState
    default:
      return state
  }
}